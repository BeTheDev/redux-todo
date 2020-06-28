export const ADD_TODO = "todoList/ADD_TODO";
export const DELETE_TODO = "todoList/DELETE_TODO";

export const addTodo = ({ id, title, description }) => ({
  type: ADD_TODO,
  id,
  title,
  description,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});

export default function todoList(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          description: action.description,
        },
      ];
    case DELETE_TODO:
      const deleteState = state.filter((todo) => todo.id !== action.id);
      return deleteState;
    default:
      return state;
  }
}
