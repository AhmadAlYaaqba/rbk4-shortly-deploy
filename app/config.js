var path = require('path');
var mongoose = require('mongoose');
var url = "mongodb://localhost/shortlydb";
mongoose.connect(url);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function(){
  console.log("Connected");
})




 module.exports = db; 

