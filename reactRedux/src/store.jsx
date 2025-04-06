import { createStore } from "redux";

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const initialState = {
  task: [],
};
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        task: [...state.task, action.payload],
      };
    case DELETE_TASK:
      const updatedTask = state.task.filter((currTask, index) => {
        return index != action.payload;
      });
      return {
        ...state,
        task: [updatedTask],
      };
    default:
      return state;
  }
};
export const store = createStore(taskReducer);
// console.log(store.getState());
// store.dispatch({ type: ADD_TASK, payload: "its damm easy" });
// console.log(store.getState());
//!by using functions
export function addTask(data) {
  return { type: ADD_TASK, payload: data };
}

export function deleteTask(id) {
  return { type: DELETE_TASK, payload: id };
}
