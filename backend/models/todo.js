const mongoose = require('mongoose');

const TodoModel = new  mongoose.Schema(
{
    name:{
        type:String
    },
    isCompleted:{
        type:Boolean
    }   
});
module.exports = mongoose.model('Todo',TodoModel);