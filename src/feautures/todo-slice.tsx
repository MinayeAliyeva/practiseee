import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { uid } from "uid";
interface ITodo {
  id: string;
  name: string;
  age: number;
  sname: string;
}
type AddActionPayload = PayloadAction<{
  name: ITodo["name"];
  age: ITodo["age"];
  sname: ITodo["sname"];
}>;
export const todoSlice = createSlice({
  name: "todo",
  initialState: [] as ITodo[],
  reducers: {
    add: (state, action: AddActionPayload) => {
      const newTodo = {
        name: action.payload.name,
        sname: action.payload.sname,
        age: action.payload.age,
        id: uid(),
      };
      state.push(newTodo)
      console.log("a", JSON.parse(JSON.stringify(state)));
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const { add } = todoSlice.actions;
