const express = require('express');
const router = express.Router();
const{
    getAllTodos,
    getTodoById,
    addTodo,
    deleteTodo,
    updateTodo
} = require('../controller/todo');
router.get('/',getAllTodos)
router.get('/:id',getTodoById)
router.post('/',addTodo);
router.put('/:id',updateTodo)
router.delete('/:id',deleteTodo)

module.exports = router;