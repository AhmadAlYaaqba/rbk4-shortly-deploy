 var db = require('../config');
 var mongoose = require('mongoose');
 var bcrypt = require('bcrypt-nodejs');
 var Promise = require('bluebird');

var Schema = mongoose.Schema;
var usersSchema = new Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  username: {type: String, required: true, max: 100},
  password: {type: String, required: true},
});

// usersSchema.pre('save', function (next) {
//   var user = this;
//   bcrypt.hash(user.password, 10, function (err, hash){
//     if (err) {
//       return next(err);
//     }
//     user.password = hash;
//     next();
//   })
// });

var User = mongoose.model('User', usersSchema);

module.exports = User;
