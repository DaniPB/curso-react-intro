import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

// #### for testing purposes  ####

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true},
//   { text: 'Tomar Curso', completed: false},
//   { text: 'Meditar', completed: true},
//   { text: 'Escribir', completed: false},
//   { text: 'Correr', completed: false},
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))

// ################################

function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
