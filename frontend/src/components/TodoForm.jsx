import React from 'react'

const TodoForm = () => {
  
  
  return (
    <div>
      <input type="text" placeholder="Ajouter une tache" className="input input-bordered w-full max-w-xs bg-neutral-50
      " />
      <button className="btn ml-2">Ajouter</button>
    </div>
  )
}

export default TodoForm