import React from "react";
import Todo from "./Todo"
const listOfTodos =  ({todos , status , setTodos, statusTodos})=>{
    return(
        <div className="todo-container">
        <ul className="todo-list">
         {statusTodos.map(todo =>(
             <Todo
             status={status}
             todo = {todo}
             todos = {todos}
             setTodos = {setTodos}
             key={todo.id}/>
             
         ))} 
        </ul>
      </div>
    )
}
export default listOfTodos;