import {useState} from 'react'
import { TodoForm } from './todoForm'
import { v4 as uuidv4 } from 'uuid' //importa a função uuidv4 para gerar IDs únicos
import { Todo } from './todo'
uuidv4()

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]) //estado para armazenar as tarefas
  const addTodo = todo => {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    console.log(todos)
  }

  return (
    <div className='TodoWrapper'>
      <TodoForm addTodo={addTodo /*passa a função addTodo como prop */}/> 
      {todos.map((todo, index) => ( /*mapeia o array de tarefas*/
        <Todo task={todo} key={index} /> /* passa a tarefa como prop */
      ))}
    </div>
  )
}
