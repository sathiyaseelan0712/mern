const Todo = require('../models/todo');

module.exports.getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find({});
        res.status(200).send(todos);
    }
    catch (err) {
        res.status(500).json(err.message);
    }
}

module.exports.getTodoById = async(req, res) => {
    const { id } = req.params;
    try {
        const todo =await Todo.findById(id);
        if (todo) {
            res.status(200).send({ todo });
        }
        else {
            res.status(404).send({ msg: "Todo not found" });
        }
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

module.exports.addTodo = async (req, res) => {
    try {
        const todo = new Todo(req.body);
        await todo.save();
        res.status(200).send({ msg: "Todo added successfully" });
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

module.exports.updateTodo = async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await Todo.findByIdAndUpdate(id, req.body);
        if (todo) {
        }
        else {
            res.status(200).send({ todo });
            res.status(404).send({ msg: "Todo not found" });
        }
    }
    catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports.deleteTodo = async(req, res) => {
    const {id}=req.params;
    try{
        const todo = await Todo.findByIdAndDelete(id,req.body);
        if(todo){
            res.status(200).send({msg:"Todo deleted successfully"});
        }
        else{
            res.status(404).send({msg:"Todo not found"});
        }
    }
    catch(err){
        res.status(500).send(err.message);
    }   

}