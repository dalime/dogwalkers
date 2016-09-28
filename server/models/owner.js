const mongoose = require('mongoose');
const bcrypt = require('bcrypt-node');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'q3w4de5frg6t7hyj8u9ki0u98y7t6r5e';

const ownerSchema = new mongoose.Schema({
  name:{type:String, required:true},
  pets:[{type:String}],
  image:{type:String},
  phone:{type:String, required: true},
  location: {type: String, required: true},
  walker: {type: mongoose.Schema.Types.ObjectId, ref: 'Walker'},
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

ownerSchema.statics.register = function(userObj, cb) {
  this.findOne({username: userObj.username}, (err, dbUser) => {
    if(err) return cb(err);
    if(dbUser) return cb({error: 'Username already taken.'});

    bcrypt.genSalt(11, (err, salt) => {
      if(err) return cb(err);
      bcrypt.hash(userObj.password, salt, null, (err, hash) => {
        if(err) return cb(err);
        userObj.password = hash;
        this.create(userObj, (err, newUser) => {
          cb(err);
        });
      });
    });
  });
};

ownerSchema.statics.authenticate = function(ownerObj, cb) {
  let { username, password } = ownerObj;
  this.findOne({ username }, (err, dbUser) => {
    if(err || !dbUser) {
      return cb(err || {error: 'Login failed.  Username or password incorrect.'});
    }
    bcrypt.compare(password, dbUser.password, (err, isGood) => {
      if(err) return cb(err);
      if(!isGood) return cb({error: 'Login failed.  Username or password incorrect.'});
      let payload = {
        _id: dbUser._id
      }
      jwt.sign(payload, JWT_SECRET, {}, cb);
    })
  });
};

ownerSchema.statics.authMiddleware = function(req, res, next) {
  let token = req.cookies.authtoken;
  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if(err) return res.status(401).send(err);
    mongoose.model('Owner')
      .findById(payload._id)
      .select('-password')
      .populate('walker')
      .exec((err, owner) => {
        if(err) return res.status(400).send(err);
        if(!owner) return res.status(401).send({error: 'Owner not found.'})

        req.owner = owner;
        next();
      })
  });
};

const owner = mongoose.model('Owner', ownerSchema);

module.exports = owner;
