import { useState , useEffect } from 'react';
import './App.css';
import TodoList from "./component/listOfTodos"
import Form from "./component/form"

function App() {
  let localTodo =() =>JSON.parse(localStorage.getItem("todos")|| [] )
  const [inputText , setInputText] =useState("")
  const [todos , setTodos] =useState( [localTodo])
  const [statusTodos , setStatusTodos] =useState([])
  const [status , setStatus] = useState("all")

  
useEffect(()=>{
filterHandler();
localStorage.setItem("todos", JSON.stringify(todos))
},[todos , status])
  const filterHandler = ()=>{
    switch(status){
      case "completed":
        setStatusTodos(todos.filter(todo=>   todo.completed===true))
        break;
        case "uncompleted":
          setStatusTodos(todos.filter(todo=>   todo.completed===false))
          break;
          default:
            setStatusTodos(todos)
    }
  }
 
  return (
    <div className="App">
      <header>
      <h1>Ziko's Todo List</h1>
    </header>
    <Form 
    inputText ={inputText}
    setInputText={setInputText}
    todos={todos}
    setTodos={setTodos}
    setStatus={setStatus}
   
    />
   <TodoList
   todos={todos}
   status = {status}
   setTodos={setTodos}
  statusTodos={statusTodos}
  />
    </div>
  );
}

export default App;
