// In app_server/models/user.js

const mongoose = require('mongoose'); // Import mongoose

// Define the User schema
const userSchema = new mongoose.Schema({
  name: String,  // Existing fields
  email: String, // Existing fields

  // New fields to add
  favoriteCuisine: String,    // New field for storing favorite cuisine
  specialtyDish: String,      // New field for storing specialty dish
});

// Export the model so it can be used in other parts of the app
module.exports = mongoose.model('User', userSchema);
