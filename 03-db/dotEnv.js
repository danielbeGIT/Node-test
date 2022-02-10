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
    let sql = "SELECT id, name, hp FROM PokemonCards";
    con.query(sql, (err, result) => {
        if (err) throw err;
        
        console.log('We got the Pokemons!')
        console.log(result)

        con.end();
    });
});

// console.log(process.env);