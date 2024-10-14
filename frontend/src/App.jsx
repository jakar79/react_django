import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import TodoForm from './components/TodoForm'
import Table from './components/Table'


function App() {

  const [todos, setTodos] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchData()
    console.log(todos)
  }, [])

  const fetchData = async () => {
    try {

      const response = await axios.get('http://localhost:8000/api/todo/')
      //console.log(response)
      setTodos(response.data)
      setIsLoading(false )

    } catch (error){
      console.log(error)
    }
  }
  

  return (
    <div className='bg-blue-200 px-8 min-h-screen'>
      <nav className='pt-8'>
        <h1 className='text-5xl text-center pb-16'>Liste des Taches</h1>
      </nav>
      <TodoForm 
        setTodos={setTodos} 
        fetchData={fetchData}
      />
      <hr className='my-8' />
      <Table
        todos={todos}
        setTodos={setTodos} 
        isLoading={isLoading}
      />
    </div>
  )
}

export default App
