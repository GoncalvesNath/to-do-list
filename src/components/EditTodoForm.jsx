import { useState } from 'react'

export const EditTodoForm = ({editTodo, task}) => {
  const [value, setValue] = useState(task.task)
  const handleSubmit = (e) => {
    e.preventDefault()
    editTodo(value, task.id)
    setValue('') //Limpa o campo após adicionar a tarefa
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' className='todo-input' 
        value={value} // atualiza
        placeholder='Atualizar Tarefa' 
        onChange={(e) => setValue(e.target.value)}/>
      <button type='submit' className='todo-btn'>Atualizar tarefa</button>
    </form>
  )
}
