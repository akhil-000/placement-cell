const express = require('express');
const router = express.Router();
const passport = require('passport');

const resultsController = require('../controllers/results_controller');

router.post('/create', passport.checkAuthentication, resultsController.create);


module.exports = router;