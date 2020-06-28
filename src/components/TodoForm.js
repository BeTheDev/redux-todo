import React, { useState } from "react";

const TodoForm = ({ onClickAddTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div>
      <input onChange={onChangeTitle} value={title} />
      <textarea onChange={onChangeDescription} value={description} />
      <button onClick={() => onClickAddTodo({ id: Math.random() * 10, title, description })}>추가</button>
    </div>
  );
};

export default TodoForm;
