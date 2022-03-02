const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const { body, matchedData, validationResult } = require('express-validator');

// instantiate express
const app = express();

// middlewares
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// way to make a validation, length has to be minimum 3
// make sure to use the methods in the right order, trim will make a number into a string if trim() is before isString()
// .trim() will trim the string, it will remove unnecessary backspaces etc
// .exists() forces the current "body" to exist, to send it in
// .optional() doesnt have to exist, its optional to send it in

app.post('/test', [         // pretty much just a array with rules
    body('name').exists().isLength( { min: 3} ),
    body('address').optional().isString().trim().isLength( { min: 6, max: 42 } ),   // has to be between 6 to 42 length
    
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).send( { status: 'fail', data: errors.array() } );
    }

    // has to match the values that exists, so it has to be name or address
    // cannot create random values with matchedData, function from express-validator
    const validData = matchedData(req);

    res.send( { status: 'success', data: validData } );
});

// routes
app.use(require('./routes'));

module.exports = app;