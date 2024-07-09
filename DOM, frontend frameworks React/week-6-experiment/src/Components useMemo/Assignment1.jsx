import {useMemo, useState} from "react"

///assignment 1: perform an expensive operation to calculta efcatorial and then show it on screen
/// use useMemo to optimise the rendering process and not rerender untill and unless the input chnages 

export function Assignment1(){
    const [fact,setfact]=useState(1);
    
    /// to not rerender the expensive operation everytime parent child rerenders so we use usememo
    const val=useMemo(()=>{
        let exp_value=1;
        for(let i=1;i<=fact;i++){
            exp_value=exp_value*i
        }
        return exp_value;
    },[fact])
    return(
        <div>
            <input type="number" value={fact} onChange={(e)=>setfact(e.target.value)} />
            <p>Calculate Value {val}</p>
        </div>
    )
}