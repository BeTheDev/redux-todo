import React from "react";

const Todo = ({ id, title, description, onClickDeleteTodo }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={() => onClickDeleteTodo(id)}>삭제</button>
    </div>
  );
};

export default Todo;
