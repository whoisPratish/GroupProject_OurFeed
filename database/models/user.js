const { mongoose } = require("mongoose");

// Defining mongoose schema for 'User' model with fields for username, password, and email

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
});

// Exporting the 'User' model based on the defined schema

module.exports = mongoose.model("User", userSchema);
