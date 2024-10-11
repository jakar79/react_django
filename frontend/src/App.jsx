import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import Table from './components/Table'


function App() {

  const [todos, setTodos] = useState("")


  const fetchData = async () => {
    try {

    } catch (error){
      console.log(error)
    }
  }
  

  return (
    <div className='bg-blue-200 px-8 min-h-screen'>
      <nav className='pt-8'>
        <h1 className='text-5xl text-center pb-16'>Liste des Taches</h1>
      </nav>
      <TodoForm />
      <Table />
    </div>
  )
}

export default App
