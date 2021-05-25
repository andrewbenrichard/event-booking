// Queries
// import getUserAppointment from './apolloQueries/getUserAppointment'

export const strict = false

export const state = () => ({
 user: {},
 events: []
})

// Here We define the name of moudles and Implement it to store.
export const modules = {
  
}

// Actions

export const actions = {

  deleteEvent({ commit }, events, index) {
    let data = events
    data.splice(index, 1)
    commit('UPDATE_EVENTS_ARRAY', data)
  },

}

// Mutations
export const mutations = {
  ADD_USER(state, payload) {
    const user = {
      name: payload.username,
      email: payload.email
    }
    
    state.user = JSON.parse(JSON.stringify(user))
  },

  ADD_EVENT(state, payload) {
    let events = state.events
    events.push(payload) 
    state.events = JSON.parse(JSON.stringify(events))
  },

  UPDATE_EVENTS_ARRAY(state, payload) {
    let data = state.events
    data.splice(payload, 1)
    console.log(data);
    state.events = JSON.parse(JSON.stringify(data))
  },

  UPDATE_SINGLE_EVENTS(state, payload) {

    let allEvents = state.events

    allEvents[payload.index] = payload.event 
    
    state.events = JSON.parse(JSON.stringify(allEvents))
  },
}

// Getters
export const getters = {
  getUser: (state) => state.user,
  getEvents: (state) => state.events,
}
