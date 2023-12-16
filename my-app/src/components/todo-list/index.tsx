import { useCallback, useMemo, useState } from "react";
import {
  getTodoListSelector,
  useAppDispatch,
  useAppSelector,
} from "../../store";
import { bindActionCreators } from "@reduxjs/toolkit";
import { remove, update } from "../../store";
import { ITodo } from "../../features";
const initialData = {
  updatedname: "",
  updatedsname: "",
};
const TodoList = () => {
  const todoList = useAppSelector(getTodoListSelector);
  const [isEdit, setIsEdit] = useState(false);
  const [updatedObj, setUpdatedObj] = useState(initialData);
  const dispatch = useAppDispatch();
  //niye useMemo
  const boundActionCreators = useMemo(
    () => bindActionCreators({ remove, update }, dispatch),
    [dispatch]
  );
  // console.log("boundActionCreators", boundActionCreators);

  const onRemove = useCallback(
    (id?: string) => {
      boundActionCreators.remove(id);
    },
    [boundActionCreators]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedObj((prevs) => ({
      ...prevs,
      [name]: value,
    }));
  };
  console.log(updatedObj);

  const editUser = useCallback(
    (todoObj: ITodo) => {
      const { name, sname, id } = todoObj ?? {};
      // console.log(name, sname, id);

      boundActionCreators.update({
        id,
        name: updatedObj.updatedname || name,
        sname: updatedObj.updatedsname || sname,
      });
      setUpdatedObj(initialData);
      setIsEdit(!isEdit);
    },
    [updatedObj, isEdit, boundActionCreators]
  );

  return (
    <>
      <ul>
        {todoList &&
          todoList?.map((todo) => (
            <li key={todo.id}>
              {isEdit ? (
                <form>
                  <input
                    value={updatedObj.updatedname}
                    name="updatedname"
                    onChange={(e) => handleChange(e)}
                  />
                  <input
                    value={updatedObj.updatedsname}
                    name="updatedsname"
                    onChange={(e) => handleChange(e)}
                  />
                </form>
              ) : (
                <div>
                  {todo?.name} ,{todo.sname}
                </div>
              )}
              <button onClick={() => onRemove(todo?.id)}>Delete</button>
              <button onClick={() => editUser(todo)}>
                {isEdit ? "save" : "edit"}
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default TodoList;
