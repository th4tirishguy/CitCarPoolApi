var express = require('express');
var router = express.Router();
/* Controllers */
var ctrlIndex = require('../controllers/index');
var ctrlUsers = require('../controllers/users');

/* GET home page. */
router.get('/', ctrlIndex.index);
router.get('/users', ctrlUsers.index);

/* GET All Users */

module.exports = router;
