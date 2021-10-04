import './App.css';
import Header from './Components/Header';
import Todos from "./Components/Todos";
import Footer from "./Components/Footer";
import React, { useState } from 'react';

function App() {

  const onDelete =(todo)=>{
    console.log("I am going to Delete",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }


  const [todos, setTodos] =useState([
    {
      sno : 1,
      title :"go to kanjhawala",
      desc :"bhai jana hai tujhe kanjhawala"
    },
    {
      sno : 2,
      title :"go to kanj",
      desc :"bhai jana hai tujhe kanj"
    },
    {
      sno : 3,
      title :"go to k",
      desc :"bhai jana hai tujhe k"
    }
  ]);
  return (
    <>
      <Header title = "Todos list" searchBar={true}/> 
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}
//try using false in header ....
export default App;
