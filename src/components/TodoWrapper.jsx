import { useState } from 'react'
import { TodoForm } from './todoForm'
import { v4 as uuidv4 } from 'uuid' //importa a função uuidv4 para gerar IDs únicos
import { Todo } from './todo'
import { EditTodoForm } from './EditTodoForm'

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
  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)) //alterna o status de edição da tarefa utilizando o id para identificar a tarefa correta e atualiza o estado
  }
  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing} : todo)) //atualiza a tarefa com o novo valor e define isEditing como false
  }

  return (
    <div className='TodoWrapper'>
      <h1>✨Lista de Tarefas✨</h1>
      <TodoForm addTodo={addTodo /*passa a função addTodo como prop */} />
      {todos.map((todo, index) => (
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo task={todo} key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo} /> /* passa a tarefa como prop */
        )

      ))}

    </div>
  )
} 