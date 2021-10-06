import React from 'react'
import TodoItems from "./TodoItems";

export default function Todos(props) {
    const style ={
        padding:"25px 10px 75px 10px",
    }
    return (
        <div className="container" style={style}>
            <h3 className="text-center my-5 text-decoration-underline ">
                Todos list
            </h3>
            {props.todos.length===0?"NO Todos to Display!!!" :
            props.todos.map((todo)=>{
            return <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            
            })}
            

        </div>
    )
}
