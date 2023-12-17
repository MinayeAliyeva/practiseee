import { useState } from "react";
import { useAppDispatch } from "../../store";
import { add } from "../../store";
const initialData = {
  name: "",
  age: 0,
  sname: "",
};
const Todo = () => {
  const dispatch = useAppDispatch();
  const [todo, setTodo] = useState(initialData);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTodo((prevs) => ({
      ...prevs,
      [name]: value,
    }));
  };
  const onSubmit = () => {
    dispatch(add(todo));
    setTodo(initialData);
  };

  return (
    <form>
      <label>Name</label>
      <input value={todo.name} name="name" onChange={(e) => handleChange(e)} />
      <label>Surname</label>
      <input
        value={todo.sname}
        name="sname"
        onChange={(e) => handleChange(e)}
      />
      <label>Age</label>
      <input
        value={todo.age}
        name="age"
        type="number"
        onChange={(e) => handleChange(e)}
      />
      <button type="button" onClick={onSubmit}>
        Add
      </button>
    </form>
  );
};

export default Todo;
