import React,{useEffect,useState} from "react";
import axois from "axios";
function Todopage() {
    const[todolist,setTodolist]=useState([]);
    async function getTodoList()
    {
        const response= await axois.get("http://localhost:3000/");
        setTodolist(response.data);
    }
    useEffect(()=>{
        getTodoList();
    },[]);
    return (
        <div>
            {
                todolist.map((todo,index)=>
                    <div style={{display: 'flex'}}>
                        <input type="checkbox"  checked={todo.isCompleted?true:false}/>
                        <p>{todo.name}</p>
                    </div>
                )
            }
        </div>
    );
}   
export default Todopage;    