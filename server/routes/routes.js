var express = require('express');
var router = express.Router();
var dataController = require('../controllers/dataController.js');

router.route('/data/create')
	.post(dataController.createData);

router.route('/data/index')
	.post(dataController.getData);
