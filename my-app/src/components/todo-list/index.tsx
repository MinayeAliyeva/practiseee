import React from 'react'
import { getTodoListSelector, useAppSelector } from '../../store'

const TodoList = () => {
  const todoList=useAppSelector(getTodoListSelector)
  console.log('todoList',todoList);
  
  return (
    <>
        <ul>
            
        </ul>
    </>
  )
}

export default TodoList