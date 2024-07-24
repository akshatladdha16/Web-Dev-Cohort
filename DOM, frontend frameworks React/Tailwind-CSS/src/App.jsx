import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { RevenueCard } from './Components/RevenueCard'

function App() {
  return(
    <div className='grid grid-cols-4 m-2 p-2'>
    <RevenueCard title={"Amount Pending"} amount={"92,317.20"} orderCount={13}></RevenueCard>
    <RevenueCard title={"Amount Pending"} amount={"92,317.20"} orderCount={13}></RevenueCard>

    </div>
  )
}

export default App
