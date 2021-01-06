<template>
  <div id="navbar">

    <b-navbar toggleable="lg" style="height: 60px">
      <router-link :to="{ name: 'Home' }"
        ><img id="logo" src="../assets/logo_trivia_owl_escuro.png"
      /></router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <!--  class="mt-2 mr-4"-->
        <b-navbar-nav class="ml-auto mr-2">
          <router-link id="firstNav" :to="{ name: 'ListActivities' }"
            ><p class="mt-3">Atividades</p></router-link
          >
          <router-link id="secondNav" :to="{ name: 'Classification' }"
            ><p class="mt-3">Classificação</p></router-link
          >
          <router-link id="thirdNav" :to="{ name: 'Interaction' }"
            ><p class="mt-3">Interação</p></router-link
          >

          <b-nav-item-dropdown id="dropdown" right class="mr-2">
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em><b-avatar :src="getUser.photo"></b-avatar></em>
            </template>
            <b-dropdown-item-button href="#"              
            ><router-link id="firstDropdownItem" :to="{ name: 'Profile' }"
                >Perfil</router-link
              ></b-dropdown-item-button>
            <b-dropdown-item-button id="secondDropdownItem" v-b-modal.modalLogin>Entrar</b-dropdown-item-button>
            <b-dropdown-item-button id="thirdDropdownItem">Notificações</b-dropdown-item-button>
            <b-dropdown-item-button><router-link id="fourthDropdownItem" :to="{ name: 'UserManagement'}">Gerir Utilizadores</router-link></b-dropdown-item-button>
            <b-dropdown-item-button><router-link id="fifthDropdownItem" :to="{ name: 'ActivityManagement'}">Gerir Atividades</router-link></b-dropdown-item-button>
            <b-dropdown-item-button><router-link id="sixthDropdownItem" :to="{ name: 'Team'}">Equipa</router-link></b-dropdown-item-button>
            <b-dropdown-item-button><router-link id="seventhDropdownItem" :to="{ name: 'Sair'}">Sair</router-link></b-dropdown-item-button>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!-- modal Login -->
    <b-modal id="modalLogin" size="sm"  hide-header header-bg-variant="dark" body-bg-variant="dark" hide-footer >
      <div id="mdlLoginHeader">
        <h1 class="mt-5">Login</h1>
        <img  src="../assets/logo_trivia_owl_escuro.png" width="115px">
      </div>
    <form @submit.prevent='Login'>
        <label for="txtUsername">Nome de Utilizador</label><br>
        <input type="text" id="txtUsername" v-model="login.username"><br>

        <label class="mt-3" for="txtPassword">Palavra Passe</label><br>
        <input type="password" id="txtPassword" v-model='login.password'><br><br>

        <b-button pill id="loginSubmit" type="submit">Entrar</b-button>
        
        <b-button pill id="registerBtn" v-b-modal.modalRegister>Registar</b-button>
    </form>
  </b-modal>

  <!-- modal Registo -->
  <b-modal id="modalRegister" size="sm" hide-header  header-bg-variant="dark" body-bg-variant="dark" hide-footer>
    <div id="mdlRegisterHeader">
        <h1 class="mt-5">Registo</h1>
        <img  src="../assets/logo_trivia_owl_escuro.png" width="115px" >
      </div>
    <form @submit.prevent='Register'>
        <label for="txtRegisterUsername">Nome de Utilizador</label><br>
        <input type="text" id="txtRegisterUsername" v-model='register.username'><br><br>

        <label for="txtRegisterPassword">Palavra Passe</label><br>
        <input type="password" id="txtRegisterPassword" v-model='register.password'><br><br>

        <label for="txtRegisterPassword2">Confirmar Palavra Passe</label><br>
        <input type="password" id="txtRegisterPassword2" v-model='register.password2'><br><br>

        <label for="txtRegisterName">Nome</label><br>
        <input type="text" id="txtRegisterName" v-model='register.name'><br><br>

        <label for="txtRegisterBirthDate">Data Nascimento</label><br>
        <input type="date" id="txtRegisterBirthDate" v-model='register.birthDate'><br><br>

        <label for="txtRegisterCourse">Curso</label><br>
        <input type="text" id="txtRegisterCourse" v-model='register.course'><br><br>

        <label for="registerPhoto">Foto</label><br>
        <input type="url" id="registerPhoto" v-model='register.photo'><br><br>

        <label for="txtRegisterType">Tipo de Utilizador</label><br>
        <select id="txtRegisterType" v-model='register.type' required>
          <option value="student">Estudante</option>
          <option value="teacher">Docente</option>
        </select><br><br>

        <b-button pill id="registerSubmit" type="submit">Registar</b-button>
    </form>
  </b-modal>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      login: {
        username: '',
        password: ''
      }, 
      register: {
        username: '',
        password: '',
        password2: '',
        name: '',
        birthDate: '',
        course: '',
        photo: '',
        type: 'student'
      },
      users : [],
      user: ''
    }
  },
  created() {
    this.users = this.$store.getters.getUsers
},
  methods: {
    Login() {
      try {
        //chamar a ação login que está na store
        this.$store.dispatch('login', {username: this.login.username, password: this.login.password})
        //fechar a modal login
      } catch (error) {
        //mudar para sweetalert
        alert(error)
      }
    },
    Register() {
      if (this.register.password != this.register.password2) {
        alert('As palavras passes não são iguais!')
      }
      try {
        this.$store.dispatch('register', {
          id: this.getNextId(),
          username: this.register.username,
          password: this.register.password,
          name: this.register.name,
          birthDate: this.register.birthDate,
          course: this.register.course,
          photo: this.register.photo,
          type: this.register.type
        })
      } catch (error) {
        alert(error)
      }
    },
    getNextId() {
      if (this.users.length == 0) {
        return 1;
      } else {
        return this.users[this.users.length - 1].id + 1
      }
    }
  },
  computed: {
    getUser() {
      // this.user = this.$store.getters.getLoggedUser
      return this.$store.getters.getLoggedUser
    }
  }
};
</script>

<style scoped>
#firstDropdownItem:hover {
  text-decoration: none;
}

#secondDropdownItem:hover {
  text-decoration: none;
}

#thirdDropdownItem:hover {
  text-decoration: none;
}

#fourthDropdownItem:hover {
  text-decoration: none;
}

#fifthDropdownItem:hover {
  text-decoration: none;
}

#sixthDropdownItem:hover {
  text-decoration: none;
}

#seventhDropdownItem:hover {
  text-decoration: none;
}

#navbar {
  background-color: #1c2541;
  
}

#firstNav {
  background-color: #1c2541;
  border-block-color: #1c2541;
  border-left-color: #1c2541;
  height: 60px;
  width: 150px;
  color: #6fffe9;
}

#firstNav:hover {
  background-color: #6fffe9;
  color: #1c2541;
  text-decoration: none;
}

#secondNav {
  background-color: #1c2541;
  border-block-color: #1c2541;
  border-left-color: #1c2541;
  height: 60px;
  width: 150px;
  color: #6fffe9;
}

#secondNav:hover {
  background-color: #6fffe9;
  color: #1c2541;
  text-decoration: none;
}

#thirdNav {
  background-color: #1c2541;
  border-block-color: #1c2541;
  border-left-color: #1c2541;
  height: 60px;
  width: 150px;
  color: #6fffe9;
}

#thirdNav:hover {
  background-color: #6fffe9;
  color: #1c2541;
  text-decoration: none;
}

#logo {
  width: 50px;
  height: 60px;
}

#mdlLoginHeader {
  display: flex;
  justify-content: space-between;
}

#mdlRegisterHeader {
  display: flex;
  justify-content: space-between;
}

h1 {
  color: #70FFB4;
}

#txtUsername {
  width: 264px;
}

#txtPassword {
  width: 264px;
}

label {
  color: #70FFB4;
}

#loginSubmit {
  background-color: #70FFB4;
  color: #0B132B;
  border-color: #70FFB4;
  width: 110px;
}

#registerBtn {
  background-color: #70FFB4;
  color: #0B132B;
  border-color: #70FFB4;
  width: 110px;
  float: right;
}

#modalLogin {
  width: 1000px;
}

input[type=text]{
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
     border-radius: 20px;
     border: 0px;
     width: 264px;
     height: 30px;
     padding-left: 10px;
}

input[type=password]{
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
     border-radius: 20px;
     border: 0px;
     width: 264px;
     height: 30px;
     padding-left: 10px;
}

input[type=date]{
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
     border-radius: 20px;
     border: 0px;
     width: 264px;
     height: 30px;
     padding-left: 10px;
}

input[type=url]{
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
     border-radius: 20px;
     border: 0px;
     width: 264px;
     height: 30px;
     padding-left: 10px;
}

#txtRegisterType {
  -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
     border-radius: 20px;
     border: 0px;
     width: 264px;
     height: 30px;
     padding-left: 10px;
}

#registerSubmit {
  background-color: #70FFB4;
  color: #0B132B;
  border-color: #70FFB4;
  width: 120px;
  float: right;
}
</style>
