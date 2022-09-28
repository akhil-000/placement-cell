const express = require('express');
const router = express.Router();
const passport = require('passport');

const jobsapiController = require('../controllers/jobsapi_controller');


router.post('/jobs', jobsapiController.jobs);
router.get('/jobspage', jobsapiController.jobs);

module.exports = router;