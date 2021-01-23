import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      {
        id: 1,
        username: "Admin",
        password: "Esmad_2021",
        name: "Admin",
        birthDate: "10-10-2000",
        course: "1",
        level: 1,
        photo:
          "https://telegram.org/file/811140509/b45/dQTLEwKZ9gs.22232.gif/4580677d940852f30e",
        type: "admin",
        doneActivities: 0,
        points: 0,
        
      },
      {
        id: 2,
        username: "User",
        password: "Esmad_2021",
        name: "João",
        birthDate: "10-10-2000",
        course: "1",
        level: 1,
        photo:
          "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        type: "estudante",
        doneActivities: 0,
        points: 0,
        historic: [],
        trophies: []
      }
    ],
    proposals: [],
    activities: [
      {
        id: 1,
        name: "Quizz C# 1",
        course: "TSIW",
        subject: "AED",
        points: 50,
        level: 1,
        type: "Quizz",
        desc: '.',
        photo:
          "https://arquivo.devmedia.com.br/cursos/imagem/curso_o-que-e-csharp_1983.png",
        likes: [],
        question1:
          'Qual é a forma correta para imprimir na consola "Hello World";Printl("Hello World");print("Hello world");Console.WriteLine("Hello World");Hello World;Q1A3',
        question2:
          "Console.ReadLine irá fazer o quê?;Ler todo o código já escrito;Ler o que o utilizador irá introduzir;Não irá fazer nada pois o comando não está correto;Apresentar a linha default Hello world;Q2A1",
        question3:
          "Qual a diferença entre Console.Read() e Console.ReadLine();Em Console.Read() os dados são introduzidos em linha enquanto que em ReadLine são introduzidos num paragráfo a seguir;Não há diferença;A segunda dá mais trabalho a escrever;Em Console.Read() os dados são introduzidos no paragráfo a seguir enquanto que em ReadLine são introduzidos na mesma linha;Q3A4",
        question4: "Como escrever comentários em C#?;/*;//;<--!-->;'';Q4A2",
        question5:
          "Para criar uma variável de texto devemos escrever:;text;strg;string;txt;Q5A3",
        classification: [],
      },
      {
        id: 2,
        name: "Quizz C# 2",
        course: "TS",
        subject: "AE",
        points: 50,
        level: 1,
        type: "Quizz",
        desc: '.',
        photo: "https://www.motc.gov.qa/sites/default/files/c-programming.png",
        likes: []
      },
      {
        id: 3,
        name: "Quizz C# 3",
        course: "TSIW",
        subject: "A",
        points: 50,
        level: 1,
        type: "Quizz",
        desc: '.',
        photo:
          "https://files.betamax.raywenderlich.com/attachments/collections/161/a3b9ac0f-c565-41b1-97bd-d49a3705e204.png",
        likes: []
      },
      {
        id: 4,
        name: "Quizz C# 4",
        course: "TS",
        subject: "AE",
        points: 50,
        level: 1,
        type: "Quizz",
        desc: '.',
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2VyyttfkRVOUfPRzJBEtINxI-UELSkU_EPw&usqp=CAU",
        likes: []
      },
      {
        id: 5,
        name: "Quizz C# 4",
        course: "TSI",
        subject: "AED",
        points: 50,
        level: 1,
        type: "Quizz",
        desc: '.',
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2VyyttfkRVOUfPRzJBEtINxI-UELSkU_EPw&usqp=CAU",
        likes: []
      }
    ],
    trophies: [
      {
        id: 1,
        desc: 'Completar 1 atividade',
        points: 10,
        completed: []
      },
      {
        id: 2,
        desc: 'Completar 5 atividades',
        points: 20,
        completed: []
      },
      {
        id: 3,
        desc: 'Completar 10 atividades',
        points: 30,
        completed: []
      },
      {
        id: 4,
        desc: 'Completar 20 atividades',
        points: 40,
        completed: []
      },
      {
        id: 5,
        desc: 'Completar 1 atividade sem errar',
        points: 20,
        completed: []
      },
      {
        id: 6,
        desc: 'Completar 1 atividade sem errar',
        points: 20,
        completed: []
      }
    ],
    loggedUser: ""
  },
  getters: {
    getLoggedUser: (state) => {
      return state.loggedUser;
    },
    getUsers: (state) => {
      return state.users;
    },
    getActivities: (state) => {
      return state.activities;
    },
    getProposals: (state) => {
      return state.proposals;
    },
    getNextActivityId: (state) => {
      return state.activities.length > 0
        ? state.activities[state.activities.length - 1].id + 1
        : 1;
    },
    getNextUserId: (state) => {
      if (state.users.length == 0) {
        return 1;
      } else {
        return state.users[state.users.length - 1].id + 1;
      }
    },
    getNextProposalId: (state) => {
      if (state.proposals.length == 0) {
        return 1;
      } else {
        return state.proposals[state.proposals.length - 1].id + 1;
      }
    },
    getActivityById: (state) => (id) => {
      const activity = state.activities.find((activity) => activity.id === id)

      return activity;
    },
    getAllTrophies: (state) => {
      return state.trophies;
    }
  },
  actions: {
    login(context, payload) {
      //verificar se o user já existe
      const user = context.state.users.find(
        user =>
          user.username === payload.username &&
          user.password === payload.password
      );

      if (user != undefined) {
        //login com sucesso
        context.commit("LOGIN", user);
      } else {
        //login sem sucesso
        throw Error("Login inválido!");
      }
    },
    logout(context) {
      context.commit('LOGOUT');
    },
    register(context, payload) {
      //verificar se o user já existe
      const user = context.state.users.find(
        user => user.username === payload.username
      );

      if (user == undefined) {
        //registo com sucesso
        context.commit("REGISTER", payload);
      } else {
        //registo sem sucesso
        throw Error("Username já existente!");
      }
    },
    removeUser(context, payload) {
      if (confirm('Deseja remover o utilizador?')) {
        context.commit("REMOVEUSER", payload);
      }
      
    },
    editActivity(context,payload) {
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
    },
    editUser(context, payload) {
      context.state.users.map(
        user => {
          if (user.id === payload.id) {
            user.username = payload.username
            user.password = payload.password
            user.name = payload.name
            user.birthDate = payload.birthDate
            user.course = payload.course
            user.photo = payload.photo
          }
        }
      )
    },
    addProposal(context,payload) {
      const proposal = context.state.proposals.find(proposal => proposal.name === proposal.name);

      if (proposal == undefined) {
        context.commit("REGISTERPROPOSAL", payload);
      } else {
        throw Error (`Já existe uma atividade com o nome ${payload.name}`)
      }
    },
    aceptProposal(context, payload) {
      context.commit("ACEPTPROPOSAL", payload);
    },
    removeProposal(context, id) {
      context.commit('REMOVEPROPOSAL', id)
    },
    activitySolve(context, payload) {
      context.commit('ACTIVITYSOLVE', payload);
    },
    updateUser(context, payload) {
      context.commit('UPDATEUSER', payload);
    },
    likeActivity(context, payload) {
      const activity = context.state.activities.find((activity) => activity.id === payload.activityId)

      if (activity.likes.indexOf(payload.username) == -1) {
        context.commit('LIKEACTIVITY', payload);    
      } else {
        context.commit('REMOVELIKE', payload);
      }
    },
    completeTrophy(context, payload) {
      context.commit('COMPLETETROPHY', payload);
    }
  },
  mutations: {
    LOGIN(state, user) {
      state.loggedUser = user;
    },
    LOGOUT(state) {
      state.loggedUser = "";
    },
    REGISTER(state, user) {
      state.users.push(user);
    },
    REGISTERPROPOSAL(state, proposal) {
      state.proposals.push(proposal);
    },
    REMOVEUSER(state, id) {
      state.users = state.users.filter((user) => user.id !== id) 
    },
    ACEPTPROPOSAL(state,proposal) {
      state.activities.push(proposal);
    },
    REMOVEPROPOSAL(state , id) {
      state.proposals = state.proposals.filter((proposal) => proposal.id !== id);
    },
    ACTIVITYSOLVE(state, payload) {
      const currentActivity = state.activities.find((activity) => activity.id === payload.activityId)

      const newResult = {
        userId: payload.userId,
        userName: payload.userName,
        userPhoto: payload.userPhoto,
        score: payload.score
      }

      currentActivity.classification.push(newResult);
    },
    UPDATEUSER(state, payload) {
      const user = state.users.find((user) => user.id === payload.userId)

      let result = parseInt(user.points)
      let result1 = parseInt(payload.activityPoints)

      state.users.map((user) => {
        if (user.id === payload.userId) {
          user.points = result + result1
          user.doneActivities += 1
        }
      })

      const activityHistoric = {
        id: payload.activityId,
        name: payload.activityName,
        course: payload.activityCourse,
        points: payload.activityPoints
      }

      user.historic.push(activityHistoric);

    },
    LIKEACTIVITY(state, payload) {
      const activity = state.activities.find((activity) => activity.id === payload.activityId)

      activity.likes.push(payload.username);
    },
    REMOVELIKE(state, payload) {
      const activity = state.activities.find((activity) => activity.id === payload.activityId)

      activity.likes = activity.likes.filter((like) => like !== payload.username)
    },
    COMPLETETROPHY(state, payload) {
      const trophy = state.trophies.find((trophy) => trophy.id === payload.trophyId)

      trophy.completed.push(payload.username);

      const currentUser = state.users.find((user) => user.id === payload.userId)
      currentUser.trophies.push(trophy);

      let result = parseInt(currentUser.points)
      let result1 = parseInt(payload.trophyPoints)

      state.users.map((user) => {
        if (user.id === payload.userId) {
          user.points = result + result1
        }
      })
    }
  },

  modules: {}
});
