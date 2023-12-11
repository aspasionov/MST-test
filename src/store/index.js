import {types} from 'mobx-state-tree';
import UsersStore from "./users.js";

const RootStore = types.model('RootStore',{
  users: UsersStore
})

export default RootStore;
