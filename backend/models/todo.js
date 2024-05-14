const mongoose = require('mongoose');

const TodoModel = new  mongoose.Schema(
{
    name:{
        type:String
    },
    isCompleted:{
        type:Boolean,
        Default:true
    }   
});
module.exports = mongoose.model('Todo',TodoModel);