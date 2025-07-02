import {TODOS_URL} from '../../../config'
import {apiRequest, fetchToDos} from '../../../Helpers/ApiRequestHelper'

const useUpdateToDo = ({todoList, setTodoList}) => {
  const handleCheckToDo = async (todoId) => {
    const itemsList = todoList.map((item) => (item.id === todoId ? {...item, checked: !item.checked} : item))
    const checkedToDo = itemsList.filter((toDo) => (toDo.id === todoId))[0]

    const updateOptionsObj = {todoId, checked: checkedToDo.checked, text: checkedToDo.text}
    const toDoUrl = `${TODOS_URL}/${checkedToDo._id}`
    //TODO add error handling and display the error in Container, see useCreateToDo
    await apiRequest(toDoUrl, 'PUT', updateOptionsObj)
    const updatedTodos = await fetchToDos(TODOS_URL)
    setTodoList(updatedTodos)
  }

  return {handleCheckToDo}
}
export default useUpdateToDo