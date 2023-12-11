import { useState } from 'react'
import useStore from "../hooks/useStore.js";
import { observer } from "mobx-react-lite";
import { DISABLE_STATE, EDIT_STATE, ACTIVE_STATE } from "../constans/index.js";

const UserItem = observer(({ user }) => {
  const [name, setName] = useState(user.name)
  const store = useStore()
  const { users: usersStore } = store
  
  const isUserDisable = user.state === DISABLE_STATE
  const isUserEdit = user.state === EDIT_STATE
  
  const handleDisable = () => {
    usersStore.updateUser(user.id, { state: isUserDisable ? ACTIVE_STATE : DISABLE_STATE } )
  }
  
  const handleEdit = () => {
    if(isUserEdit) {
      usersStore.updateUser(user.id, { state: ACTIVE_STATE, name })
    } else {
      usersStore.updateUser(user.id, { state: EDIT_STATE })
    }
  }
  
  return (
    <li className='user-item'>
      {isUserEdit ? <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      : <div className='user-item__name'>{user.name}</div>}
      <div className='user-item__controls'>
        {!isUserDisable && <>
          <button type='button' onClick={handleEdit}>
            {isUserEdit ? 'Save'
              : <i className="fa fa-pencil" aria-hidden="true"/>}
          </button>
          <button type='button' onClick={() => {usersStore.deleteUser(user.id)}}>
            <i className="fa fa-trash" aria-hidden="true"/>
          </button>
        </>}
        <button type='button' onClick={handleDisable}>
          {isUserDisable ? <i className="fa fa-lock" aria-hidden="true"/> : <i className="fa fa-unlock" aria-hidden="true"/>}
        </button>
      </div>
    </li>
  );
});

export default UserItem;
