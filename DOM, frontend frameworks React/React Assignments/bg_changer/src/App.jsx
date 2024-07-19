import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [Color,setColor]=useState('gray')
    return(
      <div className='w-full h-screen duration-200' style={{backgroundColor:Color}}> 
        <div className='flex fixed flex-wrap justify-center bottom-12 inset-x-0 px-2'>

          <div className='bg-red-500 rounded-xl hover:bg-red-700 margin-20 padding-20'>
            <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' onClick={()=>{
              setColor('red');
              }}>Red</button>
          </div>

          <div className='bg-yellow-500 rounded-xl hover:bg-yellow-700 margin-20 padding-20'>
            <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' onClick={()=>{
              setColor('yellow');
              }}>Yellow</button>
          </div>

          <div className='bg-pink-500 rounded-xl hover:bg-pink-700 margin-20 padding-20'>
            <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' onClick={()=>{
              setColor('pink');
            }}>Pink</button>
          </div>
          
          <div className='bg-gray-500 rounded-xl hover:bg-gray-700 margin-20 padding-20'>
            <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' onClick={()=>{
              setColor();
            }}>Default</button>
          </div>
        </div>
        </div>
    )
}


export default App
