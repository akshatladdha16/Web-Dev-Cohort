import { useState,useCallback } from "react";

//make a counter with increment and decrement button and pass these functions to child components to perform incremnet and decrement.
export function Assignment1(){
    const [counter,setcounter]=useState(0);
    
    const incrementhandler=useCallback(()=>{
        setcounter(function(currentcount){
            return currentcount+1;
        })///another way of writing setcount , in this way count will not be used in dependency array.
    },[])
    
    const decrementhandler=useCallback(()=>{
        setcounter(function(currentcount){
            return currentcount-1;
        })
    },[])
    return(
        <div>
            <p>Counter {counter}</p>
            <Childcomponent onincrement={incrementhandler} ondecrement={decrementhandler}></Childcomponent>
        </div>
    )
}
function Childcomponent({onincrement,ondecrement}){
    return(
        <div>
            
            <button onClick={onincrement}>Increment</button>
            <br />
            <button onClick={ondecrement}>Decrement</button>
        </div>
    )
}