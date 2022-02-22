const bookshelf = require('./bookshelf');
const PokemonCards = require('./PokemonCards')

const PokemonFriends = bookshelf.Model.extend({
    tableName: "PokemonFriends",
    cards() {
        return this.belongsToMany(PokemonCards, "PokemonFriendCards", "friend", "card");
    }
});

module.exports = PokemonFriends;