import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task}) => { //recebe a tarefa como prop
  return (
    <div className='Todo'>
      <p>{task.task}</p> {/* exibe a tarefa */}
      <div>
        <FontAwesomeIcon icon={faPenToSquare} /> {/* ícone de editar */}
        <FontAwesomeIcon icon={faTrash} />{/* ícone de deletar */}
      </div>
    </div>
  )
}
