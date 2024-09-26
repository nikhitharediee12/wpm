// In app_server/routes/profile.js

const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Handle the POST request to update profile
router.post('/', function(req, res) {
  const { favoriteCuisine, specialtyDish } = req.body;

  // Assume user is logged in and you can find them by ID (example)
  User.findById(req.user.id, function(err, user) {
    if (err) return res.status(500).send(err);

    // Update user data
    user.favoriteCuisine = favoriteCuisine;
    user.specialtyDish = specialtyDish;

    // Save the updated user
    user.save(function(err) {
      if (err) return res.status(500).send(err);
      res.redirect('/profile');  // Redirect back to the profile page
    });
  });
});

module.exports = router;
