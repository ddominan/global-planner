import {TODOS_URL} from '../../../config'
import {apiRequest, fetchToDos} from '../../../Helpers/ApiRequestHelper'
import {useState} from 'react'

const useDeleteTodo = ({todoList, setTodoList}) => {
  const [deleteTodoErrorMsg, setDeleteTodoErrorMsg] = useState('')

  const handleDeleteToDo = async (todoId) => {
    const deletedToDo = todoList.filter((item) => (item.id === todoId))[0]

    const toDoUrl = `${TODOS_URL}/${deletedToDo._id}`
    const deleteTodoResponse = await apiRequest(toDoUrl,'DELETE', deletedToDo)
    if (!deleteTodoResponse) {
      setDeleteTodoErrorMsg('Could not delete todo')
      return
    }

    const updatedTodosResponse = await fetchToDos(TODOS_URL)
    if (!updatedTodosResponse) {
      setDeleteTodoErrorMsg('Could not fetch todos')
      return
    }

    setTodoList(updatedTodosResponse)
  }
  return {handleDeleteToDo, deleteTodoErrorMsg}
}
export default useDeleteTodo