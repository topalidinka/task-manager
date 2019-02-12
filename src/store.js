import Vue from 'vue'
import Vuex from 'vuex'
import data from './data.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data
  },
  mutations: {
    saveTask (state, payload) {
      let data = state.data.map(user => {
        let tasks = user.tasks.map(task => {
          if (task.id === parseInt(payload.id)) {
            return payload
          }
          return task
        })
        user.tasks = tasks
        return user
      })
      state.data = data
    }
  },
  getters: {
    getData: state => {
      return state.data
    }
  },
  actions: {
    getTaskInfo ({ commit, state }, taskId) {
      let curTask = {}
      state.data.forEach(user => {
        user.tasks.forEach(task => {
          if (task.id === parseInt(taskId)) {
            curTask = task
          }
        })
      })
      return curTask
    },
    saveTask ({ commit, state }, params) {
      commit('saveTask', params)
    }
  }
})
