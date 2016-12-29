const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// const id = '586482c4f056f20b0969686b';
//
// if (!ObjectID.isValid(id)){
//   console.log('Id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('id not found');
//   }
//   console.log('Todo', todo);
// }).catch((err) => {
//   console.log(err);
// });

const id = '586350a467c44f10c761db08';

User.findById(id).then((user) => {
  if (!user) return console.log('User not found.');
  console.log('USER', user);
}).catch((err) => {
  console.log('Error fetching user by id');
});
