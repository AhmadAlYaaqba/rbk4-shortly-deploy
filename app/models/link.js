var db = require('../config');
var mongoose = require('mongoose');
var crypto = require('crypto');
var Schema = mongoose.Schema;

var UrlsSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  url: String,
  baseUrl: String,
  code:String,
  title:String,
  visits:Number
});
 var Link = mongoose.model('Link', UrlsSchema);

module.exports = Link;