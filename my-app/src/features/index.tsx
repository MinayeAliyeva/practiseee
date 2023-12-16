import { createSlice } from "@reduxjs/toolkit";

interface ITodo {
  id: string;
  name: string;
  sname: string;
}

const initialState: ITodo[] = [];

export const todosSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      //    console.log('feautures=>action',action);
        //  console.log('feautures=>state',JSON.parse(JSON.stringify(state)));
      //    console.log('feautures=>action.payload',action.payload);
      state.push(action.payload);
    },
  },
});

export const { add } = todosSlice.actions;
export const todoReducer = todosSlice.reducer;
