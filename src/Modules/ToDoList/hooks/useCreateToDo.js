import {apiRequest, fetchToDos} from '../../../Helpers/ApiRequestHelper'
import {useState} from 'react'
import {TODOS_URL} from '../../../config'

const useCreateToDo = ({todoList, setTodoList}) => {
  const [todoInput, setTodoInput] = useState('')
  const [createTodoErrorMsg, setCreateTodoErrorMsg] = useState('')

  const handleAddToDo = async () => {
    if (!todoInput) return
    const newId = todoList && todoList.length ? (todoList[todoList.length - 1].id + 1) : 1
    const newItem = {id: newId, checked: false, text: todoInput}
    setTodoInput('')

    const createTodoResponse = await apiRequest(TODOS_URL, 'POST', newItem)
    if (!createTodoResponse) {
      setCreateTodoErrorMsg('Could not create todo')
    }

    const updatedTodosResponse = await fetchToDos(TODOS_URL)
    if (!updatedTodosResponse) {
      setCreateTodoErrorMsg('Could not fetch todos')
    }
    setTodoList(updatedTodosResponse)
  }

  const changeInputValue = (e) => {
    setTodoInput(e.target.value)
  }

  return {changeInputValue, handleAddToDo, todoInput, createTodoErrorMsg}
}
export default useCreateToDo