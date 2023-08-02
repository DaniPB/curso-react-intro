import React, { useState } from "react";
import "./TodoForm.css"
import { TodoContext } from "../TodoContext"

function TodoForm() {
  const {
    setOpenModal,
    addTodo
  } = React.useContext(TodoContext)

  const [newTodoValue, setNewTodoValue] = React.useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    addTodo(newTodoValue)
    setOpenModal(false)
  }

  const onCancel = (event) => {
    setOpenModal(false)
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTodo(newTodoValue)
      setOpenModal(false)
    }
  }

  return(
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        placeholder="Workout"
        value={newTodoValue}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />

      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Añadir
        </button>
      </div>
    </form>
  )
}

export { TodoForm }