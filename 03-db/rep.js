const mysql = require('mysql');

const setting = {
    host: "localhost",
    // port: "3306",   // standard/default port 3306, dont have to type in port if using standard/default port
    user: "root",
    password: "root",   // default password is "root" in MAMP
    database: "Repetition"
};

// create connection with mysql
const con = mysql.createConnection(setting);

// start connection to database
con.connect(function(err) {
    if(err) {
        throw err;
    }

    console.log("Connected to the database!");

    // select where to throw the action
    let sql = "SELECT id, make, type FROM Vehicles";
    // action through database
    con.query(sql, function(err, result) {
        if(err) {
            throw err;
        }

        console.log(result);

        con.end();  // will end the connection to database
    });
});

console.log('The end!');
