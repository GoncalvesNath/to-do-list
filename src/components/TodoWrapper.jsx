import { useState } from 'react'
import { TodoForm } from './todoForm'
import { v4 as uuidv4 } from 'uuid' //importa a função uuidv4 para gerar IDs únicos
import { Todo } from './todo'
uuidv4()

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]) //estado para armazenar as tarefas
  const addTodo = todo => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
    console.log(todos)
  }
  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)) //alterna o status de conclusão da tarefa utilizando o id para identificar a tarefa correta e atualiza o estado
  }
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id)) //remove a tarefa do estado utilizando o id para identificar a tarefa correta
  }
  return (
    <div className='TodoWrapper'>
      <h1>✨Lista de Tarefas✨</h1>
      <TodoForm addTodo={addTodo /*passa a função addTodo como prop */} />
      {todos.map((todo, index) => ( /*mapeia o array de tarefas*/
        <Todo task={todo} key={index}
          toggleComplete={toggleComplete} deleteTodo={deleteTodo} /> /* passa a tarefa como prop */
      ))}
    </div>
  )
}
