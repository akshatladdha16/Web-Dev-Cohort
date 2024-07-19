import { atom } from "recoil";

export const followersAtom=atom({
    key:"followerAtom",
    default:0
})

export const likesAtom=atom({
    key:"likesAtom",
    default:0
})

export const photosAtom=atom({
    key:"photosAtom",
    default:0
})
