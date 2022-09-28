const express = require('express');

const router = express.Router();
const employeeController = require('../controllers/employee_controller');

console.log('router loaded');

router.get('/', employeeController.employee);

router.use('/users', require('./users'));
router.use('/students', require('./Students'));
router.use('/interviews', require('./Interviews'));
router.use('/results', require('./Results'));
router.use('/employee', require('./employee'));
router.use('/jobsapi', require('./jobsapi'));


module.exports = router;