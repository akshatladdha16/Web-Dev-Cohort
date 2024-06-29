import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css' 
import {CreateTodo} from '../src/components/CreateTodo.jsx'
import { Todos } from './components/Todo.jsx'
function App() {
  const [count, setCount] = useState(0)

  return(
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={[{
        title:"bjhbsuf",
        description:"dmbhvdjnkdnf",
        completed:false
      }]} />
    </div>
  )
}

export default App
