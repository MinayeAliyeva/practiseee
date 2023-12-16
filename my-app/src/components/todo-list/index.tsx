import { useCallback, useEffect, useMemo, useState } from "react";
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
      setIsEdit(!isEdit);
      const { name, sname, id } = todoObj ?? {};
      if (isEdit) {
        boundActionCreators.update({
          name: updatedObj.updatedname,
          sname: updatedObj.updatedsname,
          id,
        });
        setUpdatedObj({
          updatedname: name!,
          updatedsname: sname as string,
          // type custing
        });
      } else {
        setUpdatedObj((prevs) => ({
          ...prevs,
          updatedname: name!,
          updatedsname: sname!,
        }));
      }
    },
    [updatedObj, isEdit, boundActionCreators]
  );

  // useEffect(()=>{

  // })
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
