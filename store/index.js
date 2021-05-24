// Queries
// import getUserAppointment from './apolloQueries/getUserAppointment'


export const state = () => ({
 user: {},
 events: []
})

// Here We define the name of moudles and Implement it to store.
export const modules = {
  
}

// Actions

export const actions = {
  addUser({ commit }, event) {
    const user = {
      name: event.username,
      email: event.email
    }
    
  //  const event = {
  //   time: "",
  //   date: "",
  //   title: "",
  //   location: "",
  //   address: "",
  //  }
    
    commit('ADD_USER', user)
    commit('ADD_EVENT', event)
  },
}

// Mutations
export const mutations = {
  ADD_USER(state, payload) {
    state.user = payload
  },
  ADD_EVENT(state, payload) {
    let events = state.events
    events.push(payload) 
    state.events = events
  },
}

// Getters
export const getters = {
  getUser: (state) => state.user,
  getEvents: (state) => state.events,
}
