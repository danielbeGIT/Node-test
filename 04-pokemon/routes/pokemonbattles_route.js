const express = require('express');
const router = express.Router();

// Implement GET / READ all pokemon battles
// curl -X GET http://localhost:3000/pokemonbattles/
router.get('/', (req, res) => {  //  -> /pokemonbattles/
    res.send('GET not implemented');
});

// Implement GET / READ one pokemon battle
// curl -X GET http://localhost:3000/pokemonbattles/1234
router.get('/:id', (req, res) => {  // -> /pokemonbattles/1234  (req.params.id = 1234)
    res.send('GET (' + req.params.id + ') not yet implemented!');
});

// Implement POST / CREATE one pokemon battle
// curl -X POST http://localhost:3000/pokemonbattles/1234
router.post('/', (req, res) => {
    res.send('POST not yet implemented');
});

// Implement PUT / UPDATE one pokemon battle
// curl -X PUT http://localhost:3000/pokemonbattles/1234
router.put('/:id', (req, res) => {
    res.send('PUT (' + req.params.id + ') not yet implemented');
});

// Implement DELETE / DELETE one pokemon battle
// curl -X DELETE http://localhost:3000/pokemonbattles/1234
router.delete('/:id', (req, res) => {
    res.send('DELETE (' + req.params.id + ') not yet implemented');
});

module.exports = router;