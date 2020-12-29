import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      {id: 1, username: 'admin', password: 'admin', name: 'Luis', birthDate: '10-10-2000', course: '1', photo: 'https://telegram.org/file/811140509/b45/dQTLEwKZ9gs.22232.gif/4580677d940852f30e', type: 'admin'},
    ],
    activities : [
      {id: 1, name: 'Quizz C#', course: 'TSIW', subject: 'AED', points: 50, level: 1, type: 'Quizz', photo: 'https://arquivo.devmedia.com.br/cursos/imagem/curso_o-que-e-csharp_1983.png', likes: 0},
      {id: 2, name: 'Quizz C#', course: 'TSIW', subject: 'AED', points: 50, level: 1, type: 'Quizz', photo: 'https://arquivo.devmedia.com.br/cursos/imagem/curso_o-que-e-csharp_1983.png', likes: 0},
      {id: 3, name: 'Quizz C#', course: 'TSIW', subject: 'AED', points: 50, level: 1, type: 'Quizz', photo: 'https://arquivo.devmedia.com.br/cursos/imagem/curso_o-que-e-csharp_1983.png', likes: 0},
      {id: 4, name: 'Quizz C#', course: 'TSIW', subject: 'AED', points: 50, level: 1, type: 'Quizz', photo: 'https://arquivo.devmedia.com.br/cursos/imagem/curso_o-que-e-csharp_1983.png', likes: 0},
    ],
    loggedUser: ''
  },
  getters: {
    getLoggedUser: (state) => state.loggedUser,
    getActivities: (state) => state.activities
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
    },
    register(context, payload) {
      //verificar se o user já existe
      const user = context.state.users.find(user => user.username === payload.username)

      if (user == undefined) {
      //login com sucesso
      context.commit('REGISTER', payload)
      } else {
      //login sem sucesso
      throw Error('Username já existente!')
      }
    }
  },
  mutations: {
    LOGIN(state, user) {
      state.loggedUser = user
    },
    LOGOUT(state) {
      state.loggedUser = ''
    },
    REGISTER(state, user) {
      state.users.push(user)
    }
  },
  
  modules: {}
});
