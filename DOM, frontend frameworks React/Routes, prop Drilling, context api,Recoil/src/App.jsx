import React, { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useRecoilState, useRecoilValue,RecoilRoot } from 'recoil'
import { countAtom, evenselector } from './state/atoms/count'
// import { CountContext } from './Components/Context';

function App() {
  // const [count,setCount]=useState(0); no need of this as we used a sepearte folder to define state using recoil
  return (
    <div>
      {/* <Button count={count} setCount={setCount}></Button>  here the concept of prop drilling comes */}
      <RecoilRoot> 
      <Count></Count>
      </RecoilRoot>
      
    </div>
  )
}
function Count(){
  return (
    <div>
      <CountRenderer/>
      <Button></Button>
      <Even></Even>
    </div>
  )
}
function CountRenderer(){
  const count=useRecoilValue(countAtom); //as in this component we dont' need to update the state
  return (<div>
    {count}
  </div>)
}
function Button(){
  const [count,setCount]=useRecoilState(countAtom)
  return(
    <div>
      <button onClick={()=>{
        setCount(count+1);
      }}>Increase</button>

      <button onClick={()=>{
        setCount(count-1);
      }}>Decrease</button>
    </div>
  )
}
function Even(){
  const iseven=useRecoilValue(evenselector);
  return (<div>
    <p>{iseven?"it is even":""}</p>
  </div>)
}
export default App
