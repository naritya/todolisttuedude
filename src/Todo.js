import React, {useState, useRef} from 'react';
import "./Todo.css";

const Todo = () => {

    const [todo, setTodo]= useState({strvalue:"", completed:false});
  
    const [completeList, setCompleteList]= useState([]); 

const handleAddtodo=()=>{
 if(todo.strvalue.trim())
 {
    alert("Added succesfully")
    setCompleteList([...completeList, todo]);
 }
    
    
else
     alert("Input field is empty")
}
const styleFunc=(completed)=>{
  console.log("completed in stylefunc", completed)
   if(completed)
    return {textDecoration:"line-through", height:"2rem", fontSize:"1.8rem", fontWeight:"bolder", color:"green"}
  else
    return {textDecoration:"none", height:"2rem", fontSize:"1.8rem", fontWeight:"bolder", color:"blue"}
}
  return (
    <div style={{backgroundColor: "yellow", height: "100vh"}}>
      <div style={{margin:"2rem"}}>
      <input style={{width:"15vw",height:"3vh", borderRadius:"1rem", border:"0.25rem solid red", marginTop:"2rem"}} type="text" onChange={(e)=>setTodo({...todo, strvalue:e.target.value})}/>
      <button style={{width:"10vw", borderRadius:"0.5rem", border:"0.25rem solid black", height:"3vh"}} onClick={handleAddtodo}>Add To Do</button>
      </div>
      {completeList.length>0?( <h3 style={{color:"red", fontSize:"3rem"}}>Here is your complete list</h3>):
      ( <h3 style={{color:"red", fontSize:"3rem"}}>Add items now</h3>)}
    
      {
        completeList.map((itm)=>{
        return <div className="TodoListWrap" key={itm.strvalue} >
          
          
        <input style={{height:"2rem", width:"2rem"}} checked={itm.completed} type="checkbox" onChange={(e) => {
  
  setCompleteList((prev) =>
    prev.map((item) =>
      item.strvalue === itm.strvalue
        ? { ...item, completed: e.target.checked }
        : item
    )
  );
}} /> 

<p style={styleFunc(itm.completed) }>{itm.strvalue} 
        </p>

        </div>
        })
      }
   
    </div>
  )

}

export default Todo

// onChange={(e)=>{

          
//             console.log("checked", itm.strvalue, e.target.checked)
//            if(e.target.checked){
//            setCompleteList((p)=>{
//               p.map((item)=>{
//                if(item.strvalue===itm.strvalue)
//                {
//                 return {...item, completed: e.target.checked}
//                }
//                else{
//                 return item
//                }
//               })

//             })
//            }
            
          
           
          
//         }}
