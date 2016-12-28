const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) return console.log('Unable to connect to DB server.');
  console.log('Connected to DB server.');

  // --> deleteMany
  // db.collection('Todos').deleteMany({
  //   text: 'Eat lunch'
  // }).then((res) => {
  //   console.log(res);
  // });

  // --> deleteOne
  // db.collection('Todos').deleteOne({
  //   text: 'Eat lunch'
  // }).then((res) => {
  //   console.log(res)
  // });

  // db.collection('Todos').findOneAndDelete({
  //   completed: false
  // }).then((res) => {
  //   console.log(res);
  // });

  // db.collection('Users').findOneAndDelete({
  //   _id: new ObjectID('58631eddecda810b1c55e9ce')
  // }).then((res) => {
  //   console.log(`Deleted user ${res.value.name}`);
  // });

  db.collection('Users').deleteMany({
    name: 'Maximilian'
  }).then((res) => {
    console.log(res);
  });


// db.close();
});
