import React, { useState } from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([])

    // achado no stack overflow para não fazer input de entradas que só tenham espaços.
    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        console.log(...todos)
    }

    return (
        <div>
            <h1>Quais são os afazeres de hoje?</h1>
            <TodoForm onSubmit={addTodo}/>        
        </div>
    )
}

export default TodoList
