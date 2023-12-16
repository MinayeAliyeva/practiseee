import React from "react";
import "./App.css";
import AddForm from "./components/add-form";
import TodoList from "./components/todo-list";

function App() {
  return (
    <div className="App">
      <AddForm />
      <hr />
      <TodoList/>
    </div>
  );
}

export default App;
