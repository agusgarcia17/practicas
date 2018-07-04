var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController')

/* GET users listing. */
router.get('/', usersController.index);


router.post ('/', usersController.newUser);

module.exports = router;
