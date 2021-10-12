import './App.css';
import Header from './Components/Header';
import Todos from "./Components/Todos";
import Footer from "./Components/Footer";
import {Addtodo} from './Components/Addtodo';
import {About} from './Components/About';
import React, { useState,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



window.onload= function(){
  alert("Welcome to Todolist, wishing you a great future ahead!!!")
}

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo= JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete =(todo)=>{
    console.log("I am going to Delete",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo = (title, desc)=>{
    console.log("I am this todo",title,desc)
    let sno;
    if(todos.length===0){
      sno=0;
    }
    else{
      sno = todos[todos.length-1].sno + 1;

    }
    const myTodo ={
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }


  const [todos, setTodos] =useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  return (
    <>
    <Router>
      <Header exact path="/" title = "Todos list" searchBar={true}/> 
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <Addtodo addTodo={addTodo}/>
            <Todos todos={todos} onDelete={onDelete}/>
            </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      <Footer exact path="/"/>
    </Router>  
    </>
  );
}
//try using false in header ....
export default App;
