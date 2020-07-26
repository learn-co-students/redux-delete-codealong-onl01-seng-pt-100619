import React from 'react'
//2. edit to to include a delete button w/ on click attribute
const Todo = props => {
    return (
      <div>
        <span>{props.todo.text}</span><button onClick={() => props.delete(props.todo.id)}>DELETE</button>
      </div>
    )
  }
   

export default Todo;
