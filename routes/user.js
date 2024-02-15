const express = require('express');
const router = express.Router();
const User = require('../models/user');
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require('passport');
const { saveRedirectUrl } = require('../middleware.js');
const userController = require("../controllers/users.js")

router.route("/signup")
//render signup page
.get(userController.renderSignupForm)
//signup routes
.post(wrapAsync(userController.signup));

router.route("/login")
//render login page
.get( userController.renderLoginFrom)
//login routes
.post(saveRedirectUrl,passport.authenticate('local',{failureRedirect:'/login',failureFlash:true}),userController.login,);

//logout routes
router.get('/logout', userController.logout);

module.exports = router;