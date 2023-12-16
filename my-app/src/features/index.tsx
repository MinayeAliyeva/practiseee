import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { uid } from "uid";
export interface ITodo {
  id?: string;
  name?: string;
  sname?: string;
}
type TypeAddActionPayload = PayloadAction<{
  name?: ITodo["name"];
  sname?: ITodo["sname"];
}>;
const initialState: ITodo[] = [];
export const todosSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action: TypeAddActionPayload) => {
      state.push({ ...action.payload, id: uid() });
    },
    remove: (state, action: PayloadAction<ITodo["id"]>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    update: (state, action) => {
      console.log(action.payload);
      const { id, name, sname } = action.payload;
      return state.map((todo) => {
        if (todo.id === id) {
          return { ...todo, name, sname };
        }
        return todo;
      });
    },
  },
});
export const { add, remove, update } = todosSlice.actions;
export const todoReducer = todosSlice.reducer;
