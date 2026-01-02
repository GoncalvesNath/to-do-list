import { useState } from 'react'

export const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(value)
    setValue('') //Limpa o campo após adicionar a tarefa
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' className='todo-input' 
        value={value} // atualiza
        placeholder='Qual tarefa deseja criar?' 
        onChange={(e) => setValue(e.target.value)}/>
      <button type='submit' className='todo-btn'>Adicionar tarefa</button>
    </form>
  )
}
