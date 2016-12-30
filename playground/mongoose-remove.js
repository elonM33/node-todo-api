const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove({})

Todo.findByIdAndRemove('5864bbb65ad6b715a0ed8e78').then((todo) => {
  console.log({todo});
});
