import React from 'react'

export default function DeveloperCard(props) {
  const { children, handleDeleteExcuse, index, handleEditExcuse } = props

  return (
    <li className='todoItem'>
      {children}
      <div className='actionsContainer'>

        <button onClick={() => {
          handleEditExcuse(index)
        }}>
          <i className="fa-solid fa-pen"></i>
        </button>

        <button onClick={() => {
          handleDeleteExcuse(index)
        }}>
        <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  )
}
