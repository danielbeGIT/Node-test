require('dotenv').config();
const mysql = require('mysql');

const knex = require('knex');
const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
});


// connection.select('id, 'name') <--- will only show id and names, empty () will show all of the info
connection.select().table('PokemonCards').then( (result) => {   // same as SELECT * FROM PokemonCards
        console.log(result);

        result.forEach(r => {
            console.log('Pokemon with the name ' + r.name + ' with hp ' + r.hp);
        });
});


// SELECT id, name FROM PokemonCards WHERE id = 2
// connection.select('id', 'name').where( {id: 2} ).table('PokemonCards').then( (result) => {   // same as SELECT id, name FROM PokemonCards
//     console.log(result);
// });


// SELECT id, name FROM PokemonCards WHERE id = 2 OR id = 4
// connection.select('id', 'name').where( {id: 2} ).orWhere( {id: 4} ).table('PokemonCards').then( (result) => {   // same as SELECT id, name FROM PokemonCards
//     console.log(result);
// });


// SELECT id, name FROM PokemonCards WHERE id IN (2, 4, 6)
// connection.select('id', 'name').whereIn('id', [2, 4, 6] ).table('PokemonCards').then( (result) => {   // same as SELECT id, name FROM PokemonCards
//     console.log(result);
// });


// connect to knex table another way
// SELECT * FROM PokemonCards WHERE id = 1
// connection('PokemonCards').where('id', 1).select().then( (result) => {
//     console.log(result);
// });


// connection('PokemonCards').insert({ name: 'Nodemon', hp: 163}).finally((result) => console.log(result));


// Shut down connection after 1 second
// const s = 1;
// setTimeout(() => {
//     process.exit(0);    // process exit will turn of the current "program"
// }, s * 1000);


// Different way to connect knex
// const knex = require('knex')({
//     client: 'mysql',
//     connection: {
//         host: process.env.DB_HOST,
//         port: process.env.DB_PORT,
//         user: process.env.DB_USER,
//         password: process.env.DB_PASSWORD,
//         database: process.env.DB_NAME
//     }
// });

