import React from 'react'

function TodoList(props) {

    return (
            <li> 
                {props.name} <button onClick={()=> {
                        props.onSelect(props.id)
                    }}
                > Delete </button>
                </li>
    )
}

export default TodoList
