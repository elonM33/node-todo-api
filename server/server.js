require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

// Routes
app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.status(200).send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});

// GET todos
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (err) => {
    res.status(400).send(err);
  });
});

// GET todos by ID
app.get('/todos/:id', (req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id)){
    return res.status(404).send({
      "error": {
        "message": "Id not valid",
        "type": "ERROR_ID",
        "statusCode": 404,
      }
    });
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send({
        "error": {
          message: "No todos were found by given id.",
          type: "ZERO_RESULTS",
          statusCode: 404,
        }
      });
    }

    res.status(200).send({todo});
  }, (err) => {
    res.status(400).send(err);
  }).catch((err) => {
    res.status(400).send(err);
  });

});


app.delete('/todos/:id', (req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(400).send({
      error: {
          message: 'Given id is not valid',
          statusCode: '400'
      }
    });
  }

  Todo.findByIdAndRemove(id).then((todo) => {
    if (!todo) {
      return res.status(404).send({
        error: {
          message: 'Todo not found',
          statusCode: 404
        }
      });
    }
    res.send({todo});
  }).catch((err) => {
    res.status(400).send();
  });
});


app.patch('/todos/:id', (req, res) => {
  let id = req.params.id;
  let body = _.pick(req.body, ['text', 'completed']);

  if (!ObjectID.isValid(id)) {
    return res.status(400).send({
      error: { message: 'Given id is not valid', statusCode: '400' }
    });
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });

});



app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

module.exports = { app };
