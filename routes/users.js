const express = require('express');
const router = express.Router();
const passport = require('passport');

const studentsController = require('../controllers/students_controller');
const usersController = require('../controllers/users_controller');
const interviewsController= require('../controllers/interviews_controller');


router.get('/student', passport.checkAuthentication, studentsController.list);
router.get('/interview',passport.checkAuthentication,interviewsController.list);
router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);


router.post('/create', usersController.create);

// use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
), usersController.createSession);


router.get('/sign-out', usersController.destroySession);

module.exports = router;