const express = require('express');
const router = express.Router();
const passport = require('passport');

const interviewsController = require('../controllers/interviews_controller');
const CSV = require('../controllers/csv');


router.post('/create', passport.checkAuthentication, interviewsController.create);
router.get('/destroy/:id', passport.checkAuthentication, interviewsController.destroy);
router.post('/push',passport.checkAuthentication,interviewsController.push);
router.get('/write', CSV.writefile);


module.exports = router;