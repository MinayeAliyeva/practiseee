import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "../feautures/todo-slice";
import { useDispatch } from "react-redux";
import { add } from "../feautures/todo-slice";
export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
//global dispatch
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export { add };
