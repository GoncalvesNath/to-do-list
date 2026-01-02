import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => { //recebe a tarefa como prop
  return (
    <div className='Todo'>
      <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ''}`}>{task.task}</p> {/* exibe a tarefa e permite marcar como concluída */}
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)}/> {/* ícone de editar */}
        <FontAwesomeIcon icon={faTrash}  onClick={() => deleteTodo(task.id)}/> {/*icone de deletar com função de deletar a tarefa*/}
      </div>
    </div>
  )
}
