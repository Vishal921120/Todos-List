import React from 'react'

export default function TodoItems({todo ,onDelete}) {
    return (
        <div>
           <h4>{todo.title}</h4>
           <p>{todo.desc}</p>
           <buttton className ="btn btn-primary" onClick={()=>{onDelete(todo)}}>Delete</buttton>

        </div>
    )
}
