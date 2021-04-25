import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./Components/Header";
import Quote from "./Components/Quote";
import Todo from "./Components/Todo";
import ToDoForm from "./Components/ToDoForm";

// Main to-do code inspiration is from: https://www.digitalocean.com/community/tutorials/how-to-build-a-react-to-do-app-with-react-hooks

function App() {
  const savedItems = JSON.parse(localStorage.getItem("todos"));
  const [todos, setTodos] = useState(savedItems || []);

  // Local storage code assistance is from: https://dev.to/saranshk/react-hooks-and-local-storage-let-s-build-a-todo-app-39g3
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <Header />
      <Quote />
      <div className="todo-list">
        <p className="title">Tasks:</p>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
      <ToDoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
