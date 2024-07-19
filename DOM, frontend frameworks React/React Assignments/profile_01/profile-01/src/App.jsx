import { useState } from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { followersAtom,likesAtom,photosAtom } from './atoms';

function App() {
  //tip: always wrap a compoenent not complete div inside recoil root component
  return(
    <RecoilRoot>
    <MainApp></MainApp> 
    </RecoilRoot>
  )
}
function MainApp(){
  const followers=useRecoilValue(followersAtom)
  const likes=useRecoilValue(likesAtom);
  const photos=useRecoilValue(photosAtom);
  return(
    <div>
      <h2>Akshat Rai Laddha</h2>
      <br />
      <button>Followers ({followers})</button>
      <button>Likes ({likes})</button>
      <button>Photos ({photos})</button>
    </div>
  )
}

export default App
