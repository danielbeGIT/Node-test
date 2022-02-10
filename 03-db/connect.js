const mysql = require('mysql');

// create connection with mysql
const con = mysql.createConnection(
    {
        host: "localhost",
        port: "3306",   // standard/default port 3306, dont have to type in port if using standard/default port
        user: "root",
        password: "root",   // default password is "root" in MAMP
        database: "Pokemon"
    }
);

// start connection to database
con.connect( (err) => {
    if (err) throw err;

    console.log("Connected to the database");

    // select database
    // let sql = "SELECT id, name, hp FROM PokemonCards";
    // sql = sql + "WHERE id = 2";

    // action through database and select where
    con.query("SELECT id, name, hp FROM PokemonCards", (err, result) => {
        if (err) throw err;
        
        console.log('We got the Pokemons!')
        // console.log(result)

        result.forEach(r => {
            console.log('Pokemon with the name '+ r.name + ' with hp ' + r.hp);
        });

        con.end();  // will end the connection to database
    });
});
