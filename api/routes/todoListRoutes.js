module.exports = (app) => {
  const todoList = require('../controllers/todoListController');

  app.route('/todos')
    .get(todoList.list_all_todos)
    .post(todoList.create_todo);
  
  app.route('/todos/:todoId')
    .get(todoList.read_single_todo)
    .put(todoList.update_todo_status)
    .delete(todoList.delete_todo);
};