import React from "react";

const Form =({inputText,setInputText,todos , setTodos , status , setStatus })=>{


const handelInputText=e=>{
    setInputText(e.target.value)

}
const submiteTodoHandler = e=>{
    e.preventDefault()
    setTodos([...todos, {text : inputText , completed : false , id : Math.random()*10}] )
    setInputText("");
}
const selectHandler =e=>{
  setStatus(e.target.value)
 
  }
  

    return (
<form>
      <input onChange={handelInputText} value={inputText} type="text" className="todo-input" />
      <button onClick={submiteTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={selectHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    )
}
export default Form;