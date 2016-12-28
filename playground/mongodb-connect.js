const {MongoClient, ObjectID} = require('mongodb');
const shortid = require('shortid');

shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Keep up with NodeJS',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo.', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Matias',
  //   age: 30,
  //   location: 'Wellington, NZ'
  // }, (err, result) => {
  //
  //   if (err) return console.log('Unable to insert user', err);
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //
  // });

  db.collection('Users').insertOne({
    _comment: "rid = relative identifier",
    rid: shortid.generate(),
    name: 'Maximilian',
    age: 28,
    location: 'USA'
  }, (err, res) => {
    if (err) return console.log("Error trying to insert a user", err);
    console.log(JSON.stringify(res.ops, undefined, 2));
  });

  db.close();
});
