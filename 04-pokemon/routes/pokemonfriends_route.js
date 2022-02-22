const express = require('express');
const router = express.Router();
const pokemonfriends_controller = require('../controllers/pokemonfriends_controller')

// Implement GET / READ all pokemon friends
// curl -X GET http://localhost:3000/pokemonfriends/
// router.get('/', (req, res) => {  //  -> /pokemonfriends/
//     res.send('GET not implemented');
// });
router.get('/', pokemonfriends_controller.read);

// Implement GET / READ one pokemon friend
// curl -X GET http://localhost:3000/pokemonfriends/1234
// router.get('/:id', (req, res) => {  // -> /pokemonfriends/1234  (req.params.id = 1234)
//     res.send('GET (' + req.params.id + ') not yet implemented!');
// });
router.get('/:id', pokemonfriends_controller.read);

// Implement POST / CREATE one pokemon friend
// curl -X POST http://localhost:3000/pokemonfriends/1234
// router.post('/', (req, res) => {
//     res.send('POST not yet implemented');
// });
router.post('/', pokemonfriends_controller.create);

// Implement PUT / UPDATE one pokemon friend
// curl -X PUT http://localhost:3000/pokemonfriends/1234
// router.put('/:id', (req, res) => {
//     res.send('PUT (' + req.params.id + ') not yet implemented');
// });
router.put('/', pokemonfriends_controller.update);

// Implement DELETE / DELETE one pokemon friend
// curl -X DELETE http://localhost:3000/pokemonfriends/1234
// router.delete('/:id', (req, res) => {
//     res.send('DELETE (' + req.params.id + ') not yet implemented');
// });
router.delete('/:id', pokemonfriends_controller.destroy);

// Implement addCards to specific id/friend
// curl -X POST http://localhost:3000/pokemonfriends/1/addCard -H 'Content-Type: application/json' -d '{ "card" : 3 }'
router.post('/:id/addCard', pokemonfriends_controller.addCard);

module.exports = router;