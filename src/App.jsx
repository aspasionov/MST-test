import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import './App.css'
import useStore from "./hooks/useStore.js";
import UserItem from './components/UserItem.jsx'
import Header from './components/Header.jsx'

function App() {
  const store = useStore()
  const { users: usersStore } = store
  
  useEffect( () => {
    usersStore.getUsers()
  },[])
  
  const data = usersStore.users.toJSON()

  return (
    <>
      <Header/>
      <ul>
        {data.map(el => {
          return <UserItem user={el} key={el.id}/>
        })}
      </ul>
    </>
  )
}

export default observer(App)
