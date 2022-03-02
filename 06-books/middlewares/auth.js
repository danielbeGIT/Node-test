/**
 * Authentication Middleware
 */

const debug = require('debug')('books:auth');
const models = require('../models');
const { User } = require('../models');

/**
 * HTTP Basic Authentication
 */
const basic = async(req, res, next) => {
    debug("Hello from auth basic");

    // make sure Authorization header exists, otherwise fail
    if (!req.headers.authorization) {
        debug("Authorization header missing")

        return res.status(401).send({
            status: "fail",
            data: "Authorization required"
        });
    }

    // log headers to console
    // console.log("headers:", req.headers);

    debug("Authorization header: %o", req.headers.authorization);

    // split header into "<authSchema> <base64Payload>"
    // auth.split(' ')
    // [0] = Basic
    // [1] = cGVsbUG981nsadj75
    const [authSchema, base64Payload] = req.headers.authorization.split(' ');

    // if authSchema isnt basic then bail
    if (authSchema.toLowerCase() !== "basic") {
        debug("Authorization schema isn't basic");

        return res.status(401).send({
            status: "fail",
            data: "Authorization required"
        });

        // not our to authenticate
    }

    // decode payload from base64 => ascii
    const decodedPayload = Buffer.from(base64Payload, 'base64').toString('ascii');
    // decodedPayLoad = "username:password"

    // split decoded payload into "<username>:<password>"
    const [username, password] = decodedPayload.split(':');

    // check if a user with this username and password exists
    // find user based on username (bail if no such user exists)
    const user = await new User( { username: username, password: password } ).fetch( { require: false } );
    
    if (!user) {
        return res.status(401).send({
            status: "fail",
            data: "Authorization failed"
        });
    }

    const hash = user.get('password');

    // hash the incoming cleartext password using the salt from the db and compare if the generated hash matches the db-hash
    const result = await bcrypt.compare(password, hash);
    
    if (!result) {
        return res.status(401).send({
            status: 'fail',
            data: 'Authorization failed'
        });
    }

    // finally check attach user to request
    // req.authenticated = true;
    req.user = user;

    // pass request along, need to "call" next() or else no process
    next();
}

module.exports = {
    basic,
}
