const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');
const userValidationRules = require('../validation/user');

/* Get all resources */
router.get('/', userController.index);

/* Get a specific resource */
router.get('/:userId', userController.show);

/* Store a new resource */
// referring to validation/user.js createRules rules with userValidationRules.createRules
// referring to controllers/user_controllers.js store function/rules with userController.store
router.post('/', userValidationRules.createRules, userController.store);

/* Update a specific resource */
// referring to validation/user.js updateRules rules with userValidationRules.updateRules
// referring to controllers/user_controllers.js store function/rules with userController.update
router.put('/:userId', userValidationRules.updateRules, userController.update);

/* Destroy a specific resource */
router.delete('/:userId', userController.destroy);

module.exports = router;