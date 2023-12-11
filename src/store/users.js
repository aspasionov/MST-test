import { types, flow } from 'mobx-state-tree';
import { ACTIVE_STATE } from "../constans/index.js";

const Geo = types.model( {
  lat: types.string,
  lng: types.string
});

const Address = types.model( {
  street: types.string,
  suite: types.string,
  city: types.string,
  zipcode: types.string,
  geo: Geo
});

const Company = types.model( {
  name: types.string,
  catchPhrase: types.string,
  bs: types.string
});

const User = types.model('User', {
    id: types.identifierNumber,
    name: types.string,
    username: types.string,
    email: types.string,
    address: Address,
    phone: types.string,
    website: types.string,
    state: types.optional(types.string, ACTIVE_STATE),
    company: Company
}).actions(self => {
  return {
    editUser: (name) => {
      self.name = name
    },
    changeState: (state) => {
      self.state = state
    }
  }
})

const UsersStore = types.model('UserStore', {
  users: types.maybe(types.array(User))
}).actions(self => {
  return {
    deleteUser: (id) => {
      self.users = self.users.filter(el => el.id !== id)
    },
    addNewUser: (user) => {
      self.users.push(user)
    },
    updateUser: (id, data) => {
      const currentUserIndex = self.users.findIndex(el => el.id === id)
      self.users[currentUserIndex] = {...self.users[currentUserIndex], ...data }
    },
    getUsers: flow(function* () {
        const response = yield fetch('https://jsonplaceholder.typicode.com/users')
        self.users = yield response.json()
    }),
    
  }
})

export default UsersStore;
