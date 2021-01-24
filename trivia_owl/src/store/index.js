import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [
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
          historic: [],
          trophies: []
        },
        {
          id: 2,
          username: "User",
          password: "Esmad_2021",
          name: "João",
          birthDate: "29-01-2000",
          course: "TSIW",
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
        proposals: localStorage.getItem("proposals")
        ? JSON.parse(localStorage.getItem("proposals"))
        : [],
        activities: localStorage.getItem("activities")
      ? JSON.parse(localStorage.getItem("activities"))
      : [
        {
          id: 1,
          name: "Quizz C#",
          course: "TSIW",
          subject: "AED",
          points: 50,
          level: 1,
          type: "Quizz",
          desc: 'Testa os teus conhecimentos nesta atividade! Prova para estudantes iniciantes sobre C#! Estudar nunca foi tão divertido!',
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
          name: "Quizz Vue",
          course: "TSIW",
          subject: "PW1",
          points: 60,
          level: 1,
          type: "Quizz",
          desc: 'Testa os teus conhecimentos sobre Vue! Mostra que és um ás da programação!',
          photo: "https://miro.medium.com/max/6416/1*7OCwu--TWqVluPMsZdzWKw.png",
          likes: [],
          question1:
            'O que significa "npm"?;New Project Management;New Private Media;Node Package Manager;Nenhuma das anteriores;Q1A3',
          question2:
            "Para criar um projeto via UI escreva;npm run serve;vue ui;cd new project;vue create;Q2A2",
          question3:
            "Para que serve a pasta 'public'?;Coloca os arquivos não desejados a processar através do Webpack;Mostra as pastas ao público;Publicar a aplicação;Nenhuma das anteriores;Q3A1",
          question4: "A pasta 'public' contém os seguintes ficheiros;index.html e app.js;app.js e store;router e store;index.html e favicon.ico;Q4A4",
          question5:
            "O que é o 'Vue-router'?;Extensão para alterar as cores;Extensão para guardar dados;Extensão para lidar com o roteamento da app;Nenhuma das anteriores;Q5A3",
          classification: [],
        },
        {
          id: 3,
          name: "Quizz Design Gráfico",
          course: "TSIW",
          subject: "DG",
          points: 20,
          level: 1,
          type: "Quizz",
          desc: 'Testa os seus conhecimentos de Design Gráfico nesta atividade!',
          photo:
            "https://comunidade.rockcontent.com/wp-content/uploads/2017/11/design-gr%C3%A1fico-o-que-%C3%A9-SOCIAL.png",
          likes: [],
          question1:
            "Qual destes programas devemos usar para edição de imagem?;Abode Reader;After Effects;Adobe Photoshop;Access;Q1A3",
          question2:
            "Qual destes programas devemos usar para edição de vídeo?;Adobe Illustrator;Adobe Photoshop;Excel;After Effects;Q2A4",
          question3:
            "Qual destes programas devemos usar para prototipar uma página web?;Adobe XD;Word;MySQL Workbench;Visual Studio Code;Q3A1",
          question4: "Qual destes elementos não é importante no design de um protótipo?;Som;Paleta de cores;Tipografia;Layout;Q4A1",
          question5:
            "Qual destes elementos gráficos é importante para a promoção de um protótipo?;Documentação;Poster;Testes de utilizadores;Manual de utilizadores;Q5A2",
          classification: [],
        },
        {
          id: 4,
          name: "Quizz Matemática",
          course: "Matemática",
          subject: "Matemática I",
          points: 35,
          level: 1,
          type: "Quizz",
          desc: 'Teste os seus conhecimentos de Matemática nesta atividade!',
          photo:
            "https://s2.glbimg.com/NNbJWCWpPiTmrRTP6Vq_NWVXZw8=/e.glbimg.com/og/ed/f/original/2018/10/31/math-1500720_1920.jpg",
          likes: [],
          question1:
            "Quanto é 90º em radianos?;π;π/2;π/4;3π/2;Q1A2",
          question2:
            "Quanto é 3π/2 em graus?;45º;60º;180º;270º;Q2A4",
          question3:
            "Numa matriz identidade o número 1 está disposto de que forma?;Diagonal;Vertical;Horizontal;Na matriz identidade não existe 1;Q3A1",
          question4:
           "Qual é a inversa da derivada;Inversa;Negativa;Positiva;Integral;Q4A4",
          question5:
            "1+1 = ?;3;1.5;2;2.5;Q5A3",
          classification: [],
        },
    ],
    trophies: localStorage.getItem("trophies")
      ? JSON.parse(localStorage.getItem("trophies"))
      : [
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
        localStorage.setItem("loggedUser", JSON.stringify(user));
      } else {
        //login sem sucesso
        throw Error("Login inválido!");
      }
    },
    logout(context) {
      context.commit('LOGOUT');
      localStorage.removeItem("loggedUser");
    },
    register(context, payload) {
      //verificar se o user já existe
      const user = context.state.users.find(
        user => user.username === payload.username
      );

      if (user == undefined) {
        //registo com sucesso
        context.commit("REGISTER", payload);
        localStorage.setItem('users', JSON.stringify(context.state.users))
      } else {
        //registo sem sucesso
        throw Error("Username já existente!");
      }
    },
    removeUser(context, payload) {
      if (confirm('Deseja remover o utilizador?')) {
        context.commit("REMOVEUSER", payload);
        localStorage.setItem('users', JSON.stringify(context.state.users))
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
      localStorage.setItem('activities', JSON.stringify(context.state.activities))
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
      localStorage.setItem('users', JSON.stringify(context.state.users))
    },
    addProposal(context,payload) {
      const proposal = context.state.proposals.find(proposal => proposal.name === proposal.name);

      if (proposal == undefined) {
        context.commit("REGISTERPROPOSAL", payload);
        localStorage.setItem("proposals", JSON.stringify(context.state.proposals));
      } else {
        throw Error (`Já existe uma atividade com o nome ${payload.name}`)
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
    activitySolve(context, payload) {
      context.commit('ACTIVITYSOLVE', payload);
      localStorage.setItem('activities', JSON.stringify(context.state.activities))
    },
    updateUser(context, payload) {
      context.commit('UPDATEUSER', payload);
      localStorage.setItem('users', JSON.stringify(context.state.users))
    },
    likeActivity(context, payload) {
      const activity = context.state.activities.find((activity) => activity.id === payload.activityId)

      if (activity.likes.indexOf(payload.username) == -1) {
        context.commit('LIKEACTIVITY', payload);
        localStorage.setItem('activities', JSON.stringify(context.state.activities)) 
      } else {
        context.commit('REMOVELIKE', payload);
        localStorage.setItem('activities', JSON.stringify(context.state.activities))
      }
    },
    completeTrophy(context, payload) {
      context.commit('COMPLETETROPHY', payload);
      localStorage.setItem('users', JSON.stringify(context.state.users))
      localStorage.setItem('trophies', JSON.stringify(context.state.trophies))
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
