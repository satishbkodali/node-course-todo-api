var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://18.220.60.82:27017/TodoApp', { useNewUrlParser: true });


module.exports = { mongoose };