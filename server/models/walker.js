const mongoose = require('mongoose');

const walkerSchema = new mongoose.Schema({
  name:{type:String, required:true},
  hours:{type:String, required:true},
  image:{type:String},
  phone:{type:String, required: true},
  location:{type:String, required: true}
});

const walker = mongoose.model('Walker', walkerSchema);
module.exports = walker;
