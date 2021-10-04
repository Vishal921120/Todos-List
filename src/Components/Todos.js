import React from 'react'
import TodoItems from "./TodoItems";

export default function Todos(props) {
    return (
        <div className="container">
            <h3 className="text-center my-5 text-decoration-underline ">
                Todos list
            </h3>
            {props.todos.map((todo)=>{
            return <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            })}
            

        </div>
    )
}
