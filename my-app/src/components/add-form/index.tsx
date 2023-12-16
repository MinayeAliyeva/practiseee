import React, { useState, useCallback } from "react";
import { uid } from "uid";
import { useAppDispatch, add } from "../../store";

const initialState = {
  name: "",
  sname: "",
};
const AddForm = () => {
  const [user, setUser] = useState(initialState);
  const dispatch = useAppDispatch();
  //burani callbace almanin menasi varmi?
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevs) => ({
      ...prevs,
      [name]: value,
      id: uid(),
    }));
  };

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
      dispatch(add(user));
      setUser(initialState);
    },
    [user, dispatch]
  );

  return (
    <>
      <form className="form">
        <label>Name</label>
        <input
          name="name"
          value={user.name}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <label>Surname</label>
        <input
          value={user.sname}
          name="sname"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button onClick={(e) => handleSubmit(e)}>Add</button>
      </form>
    </>
  );
};

export default AddForm;
