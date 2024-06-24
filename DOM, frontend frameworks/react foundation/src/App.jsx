import { useState } from 'react' //react does dom manipulation for us
import './App.css'

function App() {
  const [count, setCount] = useState(0) //how to define a state which will take care of all udates in dynamic website
  return (
      <div>
      <button onClick={() => setCount((Math.random()))}>
          count is {count}
        </button>
      </div>
  )
}
export default App
