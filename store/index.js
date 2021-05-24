// Queries
// import getUserAppointment from './apolloQueries/getUserAppointment'


export const state = () => ({
 user: {},
 events: {}
})

// Here We define the name of moudles and Implement it to store.
export const modules = {
  
}

// Actions

export const actions = {
  addUser({ commit }, form) {
    const user = {
      name: form.username,
      email: form.email
    }
    let events = []
    events.push(form) 
    
    commit('ADD_USER', user)
    commit('ADD_EVENT', events)
  },
}

// Mutations
export const mutations = {
  ADD_USER(state, payload) {
    state.user = payload
  },
  ADD_EVENT(state, payload) {
    state.events = payload
  },
}

// Getters
export const getters = {
  getUser: (state) => state.user,
  getEvents: (state) => state.events,
}
