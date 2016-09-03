const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
  name:{type:String, required:true},
  pets:[{type:String}],
  image:{type:String},
  phone:{type:String, required: true},
  location: {type: String, required: true},
  walker: {type: mongoose.Schema.Types.ObjectId, ref: 'Walker'}
});

const owner = mongoose.model('Owner', ownerSchema);
module.exports = owner;
