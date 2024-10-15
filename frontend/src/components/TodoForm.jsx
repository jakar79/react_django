import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

const TodoForm = (setTodos, fetchData) => {
  
  const [newTodo, setNewTodo] = useState({
    'body': '',
  })

  const handleSubmit = (e) => {
    setNewTodo(prev => ({
      ...prev,
       'body': e.target.value
      }))
      console.log(newTodo);
  }

  const postTodo = async() => {
    try {
      await axios.post('http://localhost:8000/api/todo/', newTodo)
      setTodos({'body': ''})

      fetchData()
      
    } catch (error) {
      console.log(error)
    }
  }

  
  return (

    <div>
      <input type="text" 
        placeholder="Ajouter une tache" 
        className="input input-bordered w-full max-w-xs bg-neutral-100" 
        onChange={handleSubmit} value={newTodo.body}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            postTodo()
          }
        }}
      />
      <button className="btn ml-2" onClick={postTodo}>Ajouter</button>
    </div>
  )
}

export default TodoForm