const bookshelf = require('./bookshelf');
const PokemonBattles = require('./PokemonBattles');

const PokemonCards = bookshelf.Model.extend({
    tableName: "PokemonCards",
    wonBattles() {
        return this.hasMany(PokemonBattles, 'winningPokemon');
    },

    lostBattles() {
        return this.hasMany(PokemonBattles, 'loosingPokemon');
    }
});

module.exports = PokemonCards;