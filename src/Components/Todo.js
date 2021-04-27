import React from "react";
import { Icon } from "@iconify/react";
import circleIcon from "@iconify/icons-akar-icons/circle";
import crossIcon from "@iconify/icons-akar-icons/cross";
import tickSmallOutline from "@iconify/icons-teenyicons/tick-small-outline";
import bxsPencil from "@iconify/icons-bx/bxs-pencil";

const Todo = ({ todo, index, completeTodo, removeTodo, editTodo }) => {
  return (
    <div className="todo">
      <Icon
        icon={circleIcon}
        className={todo.isCompleted ? "circles circles-clicked" : "circles"}
        onClick={() => completeTodo(index)}
      />
      <Icon
        icon={tickSmallOutline}
        className={todo.isCompleted ? "tick" : "no-tick"}
      />
      <p className={todo.isCompleted ? "completed" : ""}>{todo.text}</p>
      <Icon
        icon={bxsPencil}
        className="pencil"
        onClick={() => editTodo(index, todo)}
      />
      <Icon
        icon={crossIcon}
        className="cross"
        onClick={() => removeTodo(index)}
      />
    </div>
  );
};

export default Todo;
