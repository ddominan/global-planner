import * as React from 'react'
import Box from '@mui/material/Box'
import {TextField} from '@mui/material'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import useGetToDoList from '../hooks/useGetToDoList'
import useCreateToDo from '../hooks/useCreateToDo'
import useDeleteTodo from '../hooks/useDeleteTodo'
import useUpdateToDo from '../hooks/useUpdateToDo'
import TodoListItemComponent from '../Components/TodoListItemComponent'

//CONTAINER  = BUSINESS LOGIC + UI

//Business logic = custom hooks (api calls, useEffect, input/checkbox/select handlers, side effects, state), eg: useGetToDoList, useCreateToDo, useDeleteTodo, useUpdateToDo

//UI = stateless components (jsx, html, css), eg: TodoListItemComponent

const ToDoListContainer = () => {
  const {todoList, setTodoList} = useGetToDoList()
  //TODO please add a Snackbar/Toastify/Alert for success/error message for each of the following hooks

  const {changeInputValue, handleAddToDo, todoInput, createTodoErrorMsg} = useCreateToDo({todoList, setTodoList})
  const {handleDeleteToDo, deleteTodoErrorMsg} = useDeleteTodo({todoList, setTodoList})
  const {handleCheckToDo} = useUpdateToDo({todoList, setTodoList})
  return (
    //TODO display error messages (you can use Snackbar or Alert from MUI, or Toastify), see useCreateToDo
    <Box>
      {/*use Typography instead of h1,h2,or any paragraph*/}
      <h1>To do list</h1>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Box>
          <TextField value={todoInput} onChange={changeInputValue}/>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <AddIcon onClick={handleAddToDo}/>
          </IconButton>
        </Box>
        <Box sx={{width: 600}}>
          {todoList && todoList.length ? (todoList.map((item) => (
              <TodoListItemComponent checked={item.checked}
                                     handleCheckToDo={() => handleCheckToDo(item.id)}
                                     handleDeleteToDo={() => handleDeleteToDo(item.id)}
                                     text={item.text}
                                     key={item.id}
              />)))
            : <p>Nothing to do today</p>}
        </Box>
      </Box>
    </Box>)
}
export default ToDoListContainer