const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://tofful:doonde123@ds149268.mlab.com:49268/todoapp'
};
mongoose.connect('mongodb://tofful:123456@ds149268.mlab.com:49268/todoapp');

module.exports = { mongoose };
