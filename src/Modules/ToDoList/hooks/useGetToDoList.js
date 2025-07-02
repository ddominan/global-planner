import {useEffect, useState} from 'react'
import {fetchToDos} from '../../../Helpers/ApiRequestHelper'
import {TODOS_URL} from '../../../config'

const useGetToDoList = () => {
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    (async () => {
      const todoListResponse = await fetchToDos(TODOS_URL)
      setTodoList(todoListResponse)
    })()
  }, [])

  return {
    todoList,
    setTodoList
  }
}
export default useGetToDoList