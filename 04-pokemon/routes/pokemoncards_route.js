const express = require('express');
const router = express.Router();
const pokemoncards_controller = require('../controllers/pokemoncards_controller');

// Implement GET / READ all pokemon cards
// curl -X PUT http://localhost:3000/pokemoncards/
// router.get('/', (req, res) => { // -> /pokemoncards/
//     res.send('GET not implemented');
// });
router.get('/', pokemoncards_controller.read);

// Implement GET / READ one pokemon card
// curl -X GET http://localhost:3000/pokemoncards/1234
// router.get('/:id', (req, res) => { // -> /pokemoncards/12113 or any numbers/alphabetic
//     res.send('GET ' + req.params.id + ' not implemented');
// });
router.get('/:id', pokemoncards_controller.read);

// Implement POST / CREATE one pokemon cards
// curl -X POST http://localhost:3000/pokemoncards/ - H 'Content-Type: application/json' -d '{ "name" : "Bobba Fett", "hp" : 145 }'
// router.post('/', (req, res) => {
//     res.send('POST not yet implemented');
// });
router.post('/', pokemoncards_controller.create);

// Implement PUT / UPDATE one pokemon cards
// curl -X PUT http://localhost:3000/pokemoncards/15 - H 'Content-Type: application/json' -d '{ "name" : "Bobba Fett", "hp" : 145 }'
// router.put('/:id', (req, res) => {
//     res.send('PUT ' + req.params.id + ' not yet implemented');
// });
router.put('/', pokemoncards_controller.update);

// Implement DELETE / DELETE one pokemon cards
// router.delete('/') will delete all
// Can try with, curl -X DELETE http://localhost:3000/pokemoncards/
// router.delete('/:id', (req, res) => {
//     res.send('DELETE ' + req.params.id + ' not yet implemented');
// });
router.delete('/:id', pokemoncards_controller.destroy);

module.exports = router;