import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { todoReducer } from "../features";
import { add } from "../features";
export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

//typeleri
console.log(store.getState());

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.dispatch>;
//dispatchi global edirik isdifade ucun
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
//actionlari globbalasdiririq


//selectors
//state dondurur getState ve getTodoListSelector 
const getState=(state:RootState)=>state;
const getTodoListSelector=(state:RootState)=>getState(state)?.todos
export {getTodoListSelector}
export { add };

