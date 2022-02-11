let mongoose = require('mongoose');

let user = new mongoose.Schema({
    name: String,
    PhoneNumber: Number,
  })
  module.exports = mongoose.model('user', user)