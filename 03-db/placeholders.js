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

/*
con.connect( (err) => {
    if (err) throw err;

    console.log("Connected");

    con.query('INSERT INTO PokemonFriends (name, email) VALUES ("' + name + '", "'+ email + '")', (err, result) => {
        if (err) throw err;
        
        console.log(result)

        con.end();
    });
});
*/

const readline = require('readline');
const rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
});



/*
// 1.Make question
let name, email;
rl.question('Whats your username?', (answer) => {
    name = answer;

    rl.question('Whats your email?', (answer => {
        email = answer;

        console.log("Thank you for your entry" + name);
    }));

    con.connect( (err) => {
        if (err) throw err;

        console.log("Connected")

        // 2.Insert without parameters
        let email2 = con.escape(email);
        
        let sql = 'INSERT INTO Users (username, email, type) VALUES ("' + name + '", "' + email2 + '", "user")';
        console.log(sql);
        con.query(sql, (err, result, fields) => {
            if (err) throw err;
            
            console.log(result)

            con.end();
        });

        // 3.Escape
        connection.escape('FOO')
        console.log("email: " + con.escape(email));

        // 4.Insert with parameters
        let sql = 'INSERT INTO Users (username, email, type) VALUES ("?", "?", "user")';
        console.log(sql);
        console.log('Email: ' + email);
        con.query(sql, [name, email], (err, result, fields) => {
            if(err) throw err;
            console.log(result)
            con.end();
        });
    });
    
    rl.close();
});
*/