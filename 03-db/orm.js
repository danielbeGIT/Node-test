const PokemonCards = require('./PokemonCards');
// const PokemonFriends = require('./PokemonFriends');

// Show all the data
// PokemonCards.fetchAll().then((collection) => {
//     console.log(collection);
//     // console.log(collection.toJSON()); // toJSON will show result in JSON format
// });


// Show how many ID's there are
// PokemonCards.count().then((count) => {
//     console.log('We got ' + count + ' pokemons');
// });


// Will only show "id" 6
PokemonCards.where("id", 6).fetch().then((collection) => {
    console.log(collection.toJSON());
});


// Will show all with "hp" 100
PokemonCards.where("hp", 100).fetchAll().then((collection) => {
    console.log(collection.toJSON());
});
// const parameters = {
//     "hp": 100
// };
// PokemonCards.where(parameters).fetchAll().then((collection) => {
//     console.log(collection.toJSON());
// });


// Will only show "id" 6 and "hp" 5
// PokemonCards.where( {"id": 6, "hp": 5} ).fetch().then((collection) => {
//     console.log(collection.toJSON());
// });


// Creating a new Pokemon example
const attribute = {
    name: "Skrelp",
    hp: 50
}
let Skrelp = new PokemonCards(attribute);
Skrelp.save().then( (res) => console.log(res) );

// destroy() to remove/delete
// where() could be use to filter data
// save() to create
// fetch() to read