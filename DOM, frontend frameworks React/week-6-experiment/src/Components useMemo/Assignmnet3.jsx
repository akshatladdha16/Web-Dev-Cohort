/// calculate the total amount after buying groceries
import { useState,useMemo } from "react";
export function Assignment3(){
    const [items,setitems]=useState([
        {item:"apple",value:20},
        {item:"banana",value:30},
        {item:"onion",value:20},
        {item:"carrot",value:10},
        {item:"grapes",value:40}
        //add more items here as per requiremnet
    ]);
    const totalvalue=useMemo(()=>{
        console.log("entered useMemo");
        let total_cost=0;
        for(let i=0;i<items.length;i++){
            total_cost=total_cost+(items[i].value)
        }
        return total_cost;
    },[items])
    return(
        <div>
                <ul>
                {items.map((item,index)=>(
                    <li key={index}>{item.item}-Price ${item.value}</li>
                ))}
                </ul>
            <p>Total cost is {totalvalue}</p>
        </div>
    )
}