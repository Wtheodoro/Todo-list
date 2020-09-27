import React, { useState } from 'react'
// import { usedId } from 'react-id-generator'

function TodoForm(props) {
    const [input, setInput] = useState('')

    const handleChange = e => {
        setInput(e.target.value)
    }

    // Pra evitar que a pagina de reload. peguei isso de um vídeo.
    const handleSubmit = e => {
        e.preventDefault()

        // Ao submeter geral um ID, tentar usar algo da biblioteca react id generator
        props.onSubmit({
            // id: usedId(),
            id: Math.floor(Math.random()*1000),
            text: input
        })

        setInput('')
    }

    return (
        <form className='todo-form' onSubmit={handleSubmit}>

            <input
            type='text'
            placeholder='Adicione uma tarefa'
            value={input}
            name='text'
            className='todo-input'
            onChange={handleChange}
            />

            <button className='todo-button'>Adicionar</button>

        </form>
    )
}

export default TodoForm
