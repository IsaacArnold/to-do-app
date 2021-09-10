import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./Components/Header";
import Quote from "./Components/Quote";
import Todo from "./Components/Todo";
import ToDoForm from "./Components/ToDoForm";
import { Icon } from "@iconify/react";
import saveIcon from "@iconify/icons-carbon/save";

// Main to-do code inspiration is from: https://www.digitalocean.com/community/tutorials/how-to-build-a-react-to-do-app-with-react-hooks

function App() {
  const savedItems = JSON.parse(localStorage.getItem("todos"));

  // Local storage code assistance is from: https://dev.to/saranshk/react-hooks-and-local-storage-let-s-build-a-todo-app-39g3
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  const [todos, setTodos] = useState(savedItems || []);

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

  const showEdittedTodos = (text) => {
    const edittedTodos = [...todos, { text }];
    setTodos(edittedTodos);
  };

  // Edit idea came from: https://ibaslogic.com/how-to-edit-todos-items-in-react/
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState("");
  const editTodo = (index, todo) => {
    setEditing(true);
    setEditText(todo.text);
    removeTodo(index);
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (!editText) return;
    showEdittedTodos(editText);
    setEditing(false);
  };

  let displayEdit = {};
  if (editing) {
    displayEdit.display = "";
  } else {
    displayEdit.display = "none";
  }

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
            editTodo={editTodo}
          />
        ))}
      </div>
      <form
        onSubmit={handleEditSubmit}
        style={displayEdit}
        className="edit-form"
      >
        <input
          type="text"
          className="test"
          value={editText}
          onChange={handleEditChange}
        />
        <Icon
          icon={saveIcon}
          className="save"
          style={{ color: "#FFF", fontSize: "23px" }}
          onClick={handleEditSubmit}
        />
      </form>
      <ToDoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
