const express = require('express');
const router = express.Router();
const passport = require('passport');

const employeeController = require('../controllers/employee_controller');


router.post('/e-sign-up', employeeController.employeecheck);

module.exports = router;