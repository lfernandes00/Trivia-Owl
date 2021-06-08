import Vue from "vue";
import Vuex from "vuex";

import { AuthService } from '@/services/auth.service';
import { UserService } from '@/services/user.service';
import { ActivityService } from '@/services/activity.service';
import { TrophyService } from '@/services/trophy.service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    user: '',
    activities: [],
    activity: "",
    activityClassification: [],
    trophies: [],
    loggedUser: "",
    loggedIn: false,
    message: "",
  },
  getters: {
    getLoggedUser: (state) => {
      return state.loggedUser;
    },
    getUsers: (state) => {
      return state.users;
    },
    getUserById: (state) => {
      return state.user;
    },
    getActivities: (state) => {
      return state.activities;
    },
    getActivityById: (state) => {
      return state.activity;
    },
    getActivityClassification: (state) => {
      return state.activityClassification;
    },
    getTrophies: (state) => {
      return state.trophies;
    },
    
  },
  actions: {
    // async getAPIRoot({ commit }) {
    //   const result = await UserService.getPublicContent()
    //   commit("SET_MESSAGE", result.message);
    // },
    async register({ commit }, user) {
      try {
        const response = await AuthService.register(user);
        // console.log("STORE REGISTER SUCCES: response is...")
        // console.log(response)
        commit('SET_MESSAGE', response.message);
        commit('loginSuccess', user);
      }
      catch (error) {
        console.log('STORE REGISTER FAILS')
        console.log(error)
        throw error;
      }
    },
    async login({ commit }, user) {
      try {
        const loggedUser = await AuthService.login(user);
        commit('loginSuccess', loggedUser);
      }
      catch (error) {
        commit('loginFailure');
        throw error;
      }
    },
    logout({ commit }) {
      AuthService.logout();
      // commit mutation logout
      commit('logout');
    },
    async getAllUsers({ commit }) {
      try {
        const users = await UserService.fetchAllStudents();
        // console.log('STORE listUsers: ' + users.length)
        commit('SET_USERS', users);
        //return Promise.resolve(users);
      }
      catch (error) {
        // console.log('STORE listUsers: ' + error);
        commit('SET_USERS', []);
        // commit("SET_MESSAGE", error);
        throw error; // Needed to continue propagating the error
        //return Promise.reject(error);
      }
    },
    async getOneUser({ commit }, id) {
      try {
        const fetchedUser = await UserService.fetchOneUserByID(id);
        console.log('STORE getOneUser: ')
        console.log(fetchedUser)
        commit('SET_USER_BY_ID', fetchedUser);
      }
      catch (error) {
        commit('SET_USER_BY_ID', []);
        throw error;
      }
    },
    async getAllActivities({ commit }) {
      try {
        const activities = await ActivityService.fetchAllActivities();
        commit('SET_ACTIVITIES', activities);
        //return Promise.resolve(users);
      }
      catch (error) {
        console.log(error);
        commit('SET_ACTIVITIES', []);
        // commit("SET_MESSAGE", error);
        throw error; // Needed to continue propagating the error
        //return Promise.reject(error);
      }
    },
    async getOneActivity({ commit }, id) {
      try {
        const fetchedActivity = await ActivityService.fetchOneActivityByID(id);
        console.log('STORE getOneUser: ')
        console.log(fetchedActivity)
        commit('SET_ACTIVITY_BY_ID', fetchedActivity);
      }
      catch (error) {
        commit('SET_ACTIVITY_BY_ID', []);
        throw error;
      }
    },
    async addLike({ commit }, like) {
      try {
        const response = await ActivityService.AddLike(like);
        commit('SET_MESSAGE', response.message);
      }
      catch (error) {
        console.log('STORE addlike FAILS')
        console.log(error)
        throw error;
      }
    },
    async removeLike({ commit }, like) {
      try {
        const response = await ActivityService.RemoveLike(like);
        commit('SET_MESSAGE', response.message);
      }
      catch (error) {
        console.log('STORE addlike FAILS')
        console.log(error)
        throw error;
      }
    },
    async getAllTrophies({ commit }) {
      try {
        const trophies = await TrophyService.fetchAllTrophies();
        commit('SET_TROPHIES', trophies);
      }
      catch (error) {
        console.log(error);
        commit('SET_TROPHIES', []);
        // commit("SET_MESSAGE", error);
        throw error; // Needed to continue propagating the error
        //return Promise.reject(error);
      }
    },
    async addScore({ commit }, score) {
      try {
        const response = await ActivityService.AddScore(score);
        commit('SET_MESSAGE', response.message);
      }
      catch (error) {
        console.log('STORE addScore FAILS')
        console.log(error)
        throw error;
      }
    },
    async updateUser({ commit }, value) {
      try {
        const response = await ActivityService.UpdateUser(value);
        commit('SET_MESSAGE', response.message);
      }
      catch (error) {
        console.log('STORE updateUser FAILS')
        console.log(error)
        throw error;
      }
    },
    async completeTrophy({ commit }, value) {
      try {
        const response = await TrophyService.CompleteTrophy(value);
        commit('SET_MESSAGE', response.message);
      }
      catch (error) {
        console.log('STORE completeTrophy FAILS')
        console.log(error)
        throw error;
      }
    },
    async getActivityClassification({ commit }, id) {
      try {
        const fetchedActivityClassification = await ActivityService.fetchActivityClassification(id);
        console.log('STORE getActivityClassification: ')
        console.log(fetchedActivityClassification)
        commit('SET_ACTIVITY_CLASSIFICATION', fetchedActivityClassification);
      }
      catch (error) {
        commit('SET_ACTIVITY_CLASSIFICATION', []);
        throw error;
      }
    },
    async createActivity({ commit }, activity) {
      try {
        const response = await ActivityService.CreateActivity(activity);
        commit('SET_MESSAGE', response.message);
      }
      catch (error) {
        console.log('STORE createActivity FAILS')
        console.log(error)
        throw error;
      }
    },
    async editUser({ commit }, value) {
      try {
        const response = await UserService.EditUser(value);
        commit('SET_MESSAGE', response.message);
      }
      catch (error) {
        console.log('STORE editUser FAILS')
        console.log(error)
        throw error;
      }
    },
    removeUser(context, payload) {
      if (confirm('Deseja remover o utilizador?')) {
        context.commit("REMOVEUSER", payload);
        localStorage.setItem('users', JSON.stringify(context.state.users))
      }

    },
    editActivity(context, payload) {
      context.state.activities.map(
        activity => {
          if (activity.id === payload.id) {
            activity.name = payload.name
            activity.course = payload.course
            activity.subject = payload.subject
            activity.points = payload.points
            activity.level = payload.level
            activity.photo = payload.photo
            activity.question1 = payload.question1
            activity.question2 = payload.question2
            activity.question3 = payload.question3
            activity.question4 = payload.question4
            activity.question5 = payload.question5
          }
        }
      )
      localStorage.setItem('activities', JSON.stringify(context.state.activities))
    },
    addProposal(context, payload) {
      const proposal = context.state.proposals.find(proposal => proposal.name === proposal.name);

      if (proposal == undefined) {
        context.commit("REGISTERPROPOSAL", payload);
        localStorage.setItem("proposals", JSON.stringify(context.state.proposals));
      } else {
        throw Error(`Já existe uma atividade com o nome ${payload.name}`)
      }
    },
    aceptProposal(context, payload) {
      context.commit("ACEPTPROPOSAL", payload);
      localStorage.setItem('activities', JSON.stringify(context.state.activities));
      localStorage.setItem("proposals", JSON.stringify(context.state.proposals));
    },
    removeProposal(context, id) {
      context.commit('REMOVEPROPOSAL', id)
      localStorage.setItem("proposals", JSON.stringify(context.state.proposals));
    },
  },
  mutations: {
    SET_MESSAGE(state, payload) {
      state.message = payload
    },
    loginSuccess(state, payload) {
      state.loggedIn = true;
      state.loggedUser = payload;
    },
    loginFailure(state) {
      state.loggedIn = false;
      state.loggedUser = "";
    },
    logout(state) {
      state.loggedIn = false;
      state.loggedUser = "";
    },
    SET_USERS(state, payload) {
      console.log("STORE MUTATION SET_USERS: " + payload.length)
      state.users = payload
    },
    SET_USER_BY_ID(state, payload) {
      console.log("STORE MUTATION SET_USER_BY_ID: " + payload.length)
      state.user = payload
    },
    SET_ACTIVITIES(state, payload) {
      console.log("STORE MUTATION SET_ACTIVITIES: " + payload.length)
      state.activities = payload
    },
    SET_ACTIVITY_BY_ID(state, payload) {
      console.log("STORE MUTATION SET_ACTIVITY_BY_ID: " + payload.length)
      state.activity = payload
    },
    SET_TROPHIES(state, payload) {
      console.log("STORE MUTATION SET_TROPHIES: " + payload.length)
      state.trophies = payload
    },
    SET_ACTIVITY_CLASSIFICATION(state, payload) {
      console.log("STORE MUTATION SET_ACTIVITY_CLASSIFICATION: " + payload.length)
      state.activityClassification = payload
    },
  },

  modules: {}
});
