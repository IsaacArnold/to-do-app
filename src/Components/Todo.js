import React from "react";
import { Icon } from "@iconify/react";
import circleIcon from "@iconify/icons-akar-icons/circle";
import crossIcon from "@iconify/icons-akar-icons/cross";
import tickSmallOutline from "@iconify/icons-teenyicons/tick-small-outline";

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
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
        icon={crossIcon}
        className="cross"
        onClick={() => removeTodo(index)}
      />
    </div>
  );
};

export default Todo;
