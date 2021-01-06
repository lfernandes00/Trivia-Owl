import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      {
        id: 1,
        username: "admin",
        password: "admin",
        name: "Luis",
        birthDate: "10-10-2000",
        course: "1",
        photo:
          "https://telegram.org/file/811140509/b45/dQTLEwKZ9gs.22232.gif/4580677d940852f30e",
        type: "admin",
        doneActivities: 1,
        points: 0
      }
    ],
    activities: [
      {
        id: 1,
        name: "Quizz C# 1",
        course: "TSIW",
        subject: "AED",
        points: 50,
        level: 1,
        type: "Quizz",
        photo:
          "https://arquivo.devmedia.com.br/cursos/imagem/curso_o-que-e-csharp_1983.png",
        likes: 1,
        question1:
          'Qual é a forma correta para imprimir na consola "Hello World";Printl("Hello World");print("Hello world");Console.WriteLine("Hello World");Hello World;Q1A3',
        question2:
          "Console.ReadLine irá fazer o quê?;Ler todo o código já escrito;Ler o que o utilizador irá introduzir;Não irá fazer nada pois o comando não está correto;Apresentar a linha default Hello world;Q2A1",
        question3:
          "Qual a diferença entre Console.Read() e Console.ReadLine();Em Console.Read() os dados são introduzidos em linha enquanto que em ReadLine são introduzidos num paragráfo a seguir;Não há diferença;A segunda dá mais trabalho a escrever;Em Console.Read() os dados são introduzidos no paragráfo a seguir enquanto que em ReadLine são introduzidos na mesma linha;Q3A4",
        question4: "Como escrever comentários em C#?;/*;//;<--!-->;'';Q4A2",
        question5:
          "Para criar uma variável de texto devemos escrever:;text;strg;string;txt;Q5A3"
      },
      {
        id: 2,
        name: "Quizz C# 2",
        course: "TS",
        subject: "AE",
        points: 50,
        level: 1,
        type: "Quizz",
        photo: "https://www.motc.gov.qa/sites/default/files/c-programming.png",
        likes: 2
      },
      {
        id: 3,
        name: "Quizz C# 3",
        course: "TSIW",
        subject: "A",
        points: 50,
        level: 1,
        type: "Quizz",
        photo:
          "https://files.betamax.raywenderlich.com/attachments/collections/161/a3b9ac0f-c565-41b1-97bd-d49a3705e204.png",
        likes: 3
      },
      {
        id: 4,
        name: "Quizz C# 4",
        course: "TS",
        subject: "AE",
        points: 50,
        level: 1,
        type: "Quizz",
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2VyyttfkRVOUfPRzJBEtINxI-UELSkU_EPw&usqp=CAU",
        likes: 4
      },
      {
        id: 5,
        name: "Quizz C# 4",
        course: "TSI",
        subject: "AED",
        points: 50,
        level: 1,
        type: "Quizz",
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2VyyttfkRVOUfPRzJBEtINxI-UELSkU_EPw&usqp=CAU",
        likes: 5
      }
    ],
    loggedUser: ""
  },
  getters: {
    getLoggedUser: state => state.loggedUser,
    getUsers: state => state.users,
    getActivities: state => state.activities
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
    }
  },

  modules: {}
});
