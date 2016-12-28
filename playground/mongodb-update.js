const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) return console.log('Unable to connect to DB server.');
  console.log('Connected to DB server.');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('586327faecda810b1c55ee59')
  // }, {
  //   $set: {
  //     text: 'Coco bongo'
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((res) => {
  //   console.log(res);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('58631ee4ecda810b1c55e9d4')
  }, {
    $set: {
      name: 'Jenny Dolly\'s'
    },
    $inc: {
      age: -1
    }
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(res);
  });


// db.close();
});
