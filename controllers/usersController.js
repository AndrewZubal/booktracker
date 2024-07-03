const User = require('../models/user');
const bcrypt = require('bcrypt');
const passport = require('passport');

exports.registerForm = (req, res) => {
  res.render('users/register');
};

exports.registerUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({ username: req.body.username, email: req.body.email, password: hashedPassword });
    await user.save();
    res.redirect('/login');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.loginForm = (req, res) => {
  res.render('users/login');
};

exports.loginUser = passport.authenticate('local', {
  successRedirect: '/books',
  failureRedirect: '/login',
  failureFlash: true
});

exports.logoutUser = (req, res) => {
  req.logout();
  res.redirect('/login');
};
