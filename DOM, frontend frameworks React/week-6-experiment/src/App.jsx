import { useEffect, useMemo, useState } from 'react'
import React , {memo} from 'react'
import axios from 'axios'  
import './App.css'
// import { Assignment1 } from './Components useMemo/Assignment1'
import { Assignment2 } from './Components useMemo/Assignment2'
import { Assignment3 } from './Components useMemo/Assignmnet3'

import { Assignment1 } from './Components useCallbacks/Assignment1'
function App(){
return (
  <div>
    <Assignment1></Assignment1>
    {/* <Assignment2 /> */}
    {/* <Assignment3 /> */}
    
  </div>
)}


export default App
