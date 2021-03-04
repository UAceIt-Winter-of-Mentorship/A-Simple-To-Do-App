import  {useState,useEffect} from 'react';
 
import TodoForm from './Components/TodoForm'
import Todos from './Components/Todos'
 import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
 





 const App=()=> {
    
  const[Todo,setTodo]=useState([])
    useEffect(()=>{
      const localTodos=localStorage.getItem("Todos")
      if(localTodos)
        setTodo(JSON.parse(localTodos))
     },[])
     useEffect(()=>{
   
       localStorage.setItem("Todos",JSON.stringify(Todo))
   
   
    },[Todo])

    const addTodo=(Tod)=>{
      setTodo([...Todo,Tod])
    }
    const markComplete=(id)=>{
      setTodo(Todo.filter((Todo)=>(
        Todo.id!==id

      )))
    }
    
     
    
  
    
  

    return(
      <div>
        <h1>Todo app with local storage</h1>
         <TodoForm AddTodo={addTodo}></TodoForm>
         <Todos Todo={Todo} markComplete={markComplete}  ></Todos>   
       
      </div>
       
    )

  
}

export default App;
