//best practose to store all state logic in a seperate folder

import { atom, selector } from "recoil";

export const countAtom=atom({
    key:"countAtom",
    default:0
})

export const evenselector=selector({
    key:"evenselector",
    get:({get})=>{
        const count=get(countAtom);
        return count%2==0;
    }
})