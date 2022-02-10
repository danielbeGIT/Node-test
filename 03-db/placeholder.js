require('dotenv').config();
const mysql = require('mysql');

const con = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
);

con.connect( (err) => {
    if (err) throw err;

    console.log("Connected to the database");

    // con.query(sql, placeholder data, callback);
    /*
    let sql = "INSERT INTO PokemonCards (name, hp) VALUES (?, ?)";
    let data = ['Talonflame', 130 ];
    con.query(sql, data, (err, result) => {
        if (err) throw err;
        
        console.log(result);
    });
    */
   
    /*
    let sql = "INSERT INTO PokemonCards SET ?";  //  -> INSERT INTO PokemonCards SET name = "Gourgeist, hp = 100;"
    let data = {
        name: "Gourgeist",
        hp: 100
    };
    con.query(sql, data, (err, result) => {
        if (err) throw err;

        console.log(result);
    });
    */

    // Filter out Pokemon with hp >= 100
    let sql = "SELECT id, name, hp FROM PokemonCards WHERE hp >= ?"
    let data = [ 100 ];
    con.query(sql, data, (err, result) => {
        if (err) throw err;

        console.log(result);
    });
});