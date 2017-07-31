const mongoose = require('mongoose');
const Todo = mongoose.model('Todos')

exports.list_all_todos = (req, res) => {
  Todo.find({}, (err, todos) => {
    if(err) {
      res.send(err);
    }
    res.json(todos);
  });
};

exports.create_todo = (req, res) => {
  const new_todo = new Todo(req.body);
  new_todo.save((err, todo) => {
    if (err) res.send(err);
    res.json(todo);
  });
};

exports.read_single_todo = (req, res) => {
  Todo.findById(req.params.todoId, (err, todo) => {
    if (err) res.send(err);
    res.json(todo);
  });
};

exports.update_todo_status = (req, res) => {
  Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true}, (err, todo) => {
    if (err) {
      res.send(err);
    }
    res.send(todo);
  });
};

exports.delete_todo = (req, res) => {
  const TodoId = req.params.todoId;
  Todo.remove({
      _id: TodoId,
    }, (err, todo) => {
      if (err) res.send(err);
      res.send({message: `${TodoId} removed`});
    }); 
};
