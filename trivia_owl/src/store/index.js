import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      {username: 'admin', password: 'admin', type: 'admin', name: 'Luis', birthDate: '10-10-2000', course: '1', photo: 'https://telegram.org/file/811140509/b45/dQTLEwKZ9gs.22232.gif/4580677d940852f30e'},
    ],
    loggedUser: ''
  },
  getters: {
    getLoggedUser: (state) => state.loggedUser
  },
  actions: {
    login(context, payload) {
      //verificar se o user já existe
      const user = context.state.users.find(user => user.username === payload.username && user.password === payload.password)

      if (user != undefined) {
        //login com sucesso
        context.commit('LOGIN', user)
      } else {
        //login sem sucesso
        throw Error('Login inválido!')
      }
    }
  },
  mutations: {
    LOGIN(state, user) {
      state.loggedUser = user
    },
    LOGOUT(state) {
      state.loggedUser = ''
    }
  },
  
  modules: {}
});
