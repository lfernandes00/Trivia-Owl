import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      {id: 1, username: 'admin', password: 'admin', name: 'Luis', birthDate: '10-10-2000', course: '1', photo: 'https://telegram.org/file/811140509/b45/dQTLEwKZ9gs.22232.gif/4580677d940852f30e', type: 'admin'},
    ],
    activities : [
      {id: 1, name: 'Quizz C# 1', course: 'TSIW', subject: 'AED', points: 50, level: 1, type: 'Quizz', photo: 'https://arquivo.devmedia.com.br/cursos/imagem/curso_o-que-e-csharp_1983.png', likes: 1},
      {id: 2, name: 'Quizz C# 2', course: 'TS', subject: 'AE', points: 50, level: 1, type: 'Quizz', photo: 'https://www.motc.gov.qa/sites/default/files/c-programming.png', likes: 2},
      {id: 3, name: 'Quizz C# 3', course: 'TSIW', subject: 'A', points: 50, level: 1, type: 'Quizz', photo: 'https://files.betamax.raywenderlich.com/attachments/collections/161/a3b9ac0f-c565-41b1-97bd-d49a3705e204.png', likes: 3},
      {id: 4, name: 'Quizz C# 4', course: 'TS', subject: 'AE', points: 50, level: 1, type: 'Quizz', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2VyyttfkRVOUfPRzJBEtINxI-UELSkU_EPw&usqp=CAU', likes: 4},
      {id: 5, name: 'Quizz C# 4', course: 'TSI', subject: 'AED', points: 50, level: 1, type: 'Quizz', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2VyyttfkRVOUfPRzJBEtINxI-UELSkU_EPw&usqp=CAU', likes: 5}
    ],
    loggedUser: ''
  },
  getters: {
    getLoggedUser: (state) => state.loggedUser,
    getUsers: (state) => state.users,
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
      //registo com sucesso
      context.commit('REGISTER', payload)
      } else {
      //registo sem sucesso
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
