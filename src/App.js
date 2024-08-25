import './App.css';
import Nav from './Components/Nav';
import Todo from './Components/Todo';
import Footer from './Components/Footer';
import Add from './Components/Add';
import React, {useState, useEffect} from 'react';

function App() {
  const initialTodos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];

  const [todos, setTodos] = useState(initialTodos);

  const onDelete = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  }

  const addTodo = (title, task) => {
    let id = todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;
    let newTodo = {id, title, task};
    setTodos([...todos, newTodo]);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Nav title="Todo List"></Nav>
      <Add addTodo={addTodo}></Add>
      <Todo todos={todos} onDelete={onDelete}></Todo>
      <Footer></Footer>
    </>
  );
}

export default App;
