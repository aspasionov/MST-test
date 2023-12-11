import {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import RootStore from './store'
import './index.css'

const store = RootStore.create({ users: { users: []} })
export const StoreContext = createContext(store)

ReactDOM.createRoot(document.getElementById('root')).render(
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
)

