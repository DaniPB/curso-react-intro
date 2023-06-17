import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Tomar Curso', completed: false},
  { text: 'Meditar', completed: true},
  { text: 'Escribir', completed: false},
  { text: 'Correr', completed: false},
]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
function App() {

  const [searchValue, setSearchValue] = React.useState('')
  const [todos, setTodos] = useLocalStorage('TODOS_V1', [])

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()

      return todoText.includes(searchText)
    }
  )

  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text === text)

    newTodos[todoIndex].completed = true
    setTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text === text)

    newTodos.splice(todoIndex, 1);
    setTodos(newTodos)
  }

  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
