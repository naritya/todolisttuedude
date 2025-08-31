import React, {useState} from 'react';
import "./Todo.css";

const Todo = () => {

    const [todo, setTodo]= useState("");
    const [completeList, setCompleteList]= useState([]); 

const handleAddtodo=()=>{
 if(todo.trim())
 {
    alert("Added succesfully")
    setCompleteList([...completeList, todo]);
 }
    
    
else
     alert("Input field is empty")
}
  return (
    <div>
      <input type="text" onChange={(e)=>setTodo(e.target.value)}/>
      <button onClick={handleAddtodo}>Add To Do</button>
      {completeList.length>0?( <h3>Here is your complete list</h3>):( <h3>Add items now</h3>)}
    
      {
        completeList.map((itm)=>{
        return <div className="TodoListWrap">
        <input type="checkbox" /> {itm}
        </div>
        })
      }
    </div>
  )

}

export default Todo
