import { useEffect} from 'react'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue,} from 'recoil'
import { notificationsAtom,totalCountSelector } from './atoms'


///creating top linkedin bar for our project 
function App() {
  return (
    <div>
      <RecoilRoot>
      <MainApp></MainApp>
      </RecoilRoot>
    </div>
  )
}
function MainApp() {
  const notifications = useRecoilValue(notificationsAtom);
  const totalCount = useRecoilValue(totalCountSelector);

  return (
    <div>
      <button>Network ({notifications.network})</button>
      <button>Notifications ({notifications.notifications})</button>
      <button>Jobs ({notifications.jobs})</button>
      <button>Messages ({notifications.messaging})</button>

      <button>Me ({totalCount})</button>
    </div>
  );
}
export default App
