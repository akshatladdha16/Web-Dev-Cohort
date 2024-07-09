import {useState} from "react"
import { useMemo } from "react";
// assignmnet 2: renders a large list of sentences with an input section to filter out the sentences conatining particular words

const words=["hi","my","random","name","Akshat","is","for"];
const total_lines=1000;
const all_words=[]

for(let i=0;i<total_lines;i++){
    let sent="";
    for(let j=0;j<words.length;j++){
        sent=sent+(words[Math.floor(words.length*Math.random())]);
        sent=sent+" ";
    }
    all_words.push(sent);
}

export function Assignment2(){
    const [sentences,setsentences]=useState(all_words);
    const [filters,setfilters]=useState("");

    const filteredwords=useMemo(()=>{
        return sentences.filter(x=>x.includes(filters));
    },[sentences,filters])

    return(
        <div>
            <input type="text" value={filters} onChange={e=>{
                setfilters(e.target.value);
            }}></input>
            {filteredwords.map((word, index) => (
        <div key={index}>{word}</div>
      ))}
        </div>
    )
}