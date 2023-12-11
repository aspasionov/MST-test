import { useState } from "react";
import useStore from "../hooks/useStore.js";

const userObject = {
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496"
    }
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
  }
}

const Header = () => {
  const [userName, setUserName] = useState('')
  const store = useStore()
  const { users: usersStore } = store
  
  const handleClick = () => {
    if(userName) {
      usersStore.addNewUser({ ...userObject, id: +new Date, name: userName })
      setUserName('')
    }
  }
  
  return (
    <div className='header'>
      <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
      <button type='button' onClick={handleClick} >
        <i className="fa fa-plus" aria-hidden="true"/>
      </button>
    </div>
  );
};

export default Header;
