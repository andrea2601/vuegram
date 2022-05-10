import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //app
      absolute: true,
      overlayup: false,
      drawer: false,

      //ProfilePage
      //absolute: true,
      overlay: false,
      overlayf: false,
      idstory: 1,
      idfeed: 1,
    feeds: [
      {url:`/foto/feed/(5).jpg`, description:"Gliaca"},
      {url:`/foto/feed/(6).jpg`, description:"Canadair"},
      {url:`/foto/feed/(7).jpg`, description:"Canadari1"},
      {url:`/foto/feed/(8).jpg`, description:"Milano"},
      {url:`/foto/feed/(9).jpg`, description:"Barca"},
      {url:`/foto/feed/(10).jpg`, description:"Mucca Muuuu"},
      {url:`/foto/feed/(11).jpg`, description:"Mustang"},
      ],

    storys: [
      {url:`/foto/story/(1).jpg`, description:"Pozzo"},
      {url:`/foto/story/(2).jpg`, description:"Alfa 155"},
      {url:`/foto/story/(3).jpg`, description:"Eclissi"},
      {url:`/foto/story/(4).jpg`, description:"Giochi di fuoco"},
    ],

    //MainNav
    selectedItem: 1,
    items: [
      { text: "Feed", icon: "mdi-home-outline" },
      { text: "Explore", icon: "mdi-compass-outline" },
      { text: "Tranding", icon: "mdi-pound" },
      { text: "Top Post", icon: "mdi-check-decagram-outline" },
      { text: "People", icon: "mdi-account-outline" },
      { text: "Notification", icon: "mdi-bell-outline" },
      { text: "Direct", icon: "mdi-send-outline" },
      { text: "Status", icon: "mdi-checkbox-blank-circle-outline" },
      { text: "Settings", icon: "mdi-cog-outline" },
    ]
  },
  mutations: {
    //SideNav
    updatedrw(state){
      state.drawer = false
    },
    include() {
      return [document.querySelector('.included')]
    },
    //ProfilePage
    overlay(state, payload) {
      console.log(payload)
      console.log(state.storys)
      state.overlay = payload
    },
    overlayf(state, payload) {
      state.overlayf = payload
    },
        
  },
  actions: {
    overlay({commit}, payload){
     console.log(payload)
     commit('overlay', payload)
    },
    overlayf({commit}, payload){
     console.log(payload)
     commit('overlayf', payload)
    },
  },
  modules: {
  },
})
