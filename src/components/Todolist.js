import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteTodo, addTodo } from "../modules/todoList";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = ({ todoList, handleAddTodo, handleDeleteTodo }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <button onClick={handleToggle}>글쓰기 </button>
      {toggle && <TodoForm onClickAddTodo={handleAddTodo} />}
      <div>
        {todoList &&
          todoList.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              description={todo.description}
              onClickDeleteTodo={handleDeleteTodo}
            />
          ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    todoList: state.todoList,
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleAddTodo: ({ id, title, description }) => dispatch(addTodo({ id, title, description })),
  handleDeleteTodo: (id) => dispatch(deleteTodo(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
