<template>
  <div id="navbar">
    <!-- <router-link :to="{ name: 'Home' }">Home</router-link> 
    <router-link :to="{ name: 'Activities' }">Actividades</router-link> |
    <router-link :to="{ name: 'Classification' }">Classificação</router-link> |
    <router-link :to="{ name: 'Interaction' }">Interação</router-link> |
      <b-dropdown id="dropdown" text="Dropdown" class="m-md-2">
        <b-dropdown-item><router-link :to="{ name: 'Profile' }">Perfil</router-link></b-dropdown-item>
        <b-dropdown-item>Notificações(modal)</b-dropdown-item>
        <b-dropdown-item><router-link :to="{ name: 'UserManagement' }">Gerir Utilizadores</router-link></b-dropdown-item>
        <b-dropdown-item><router-link :to="{ name: 'ActivityManagement' }">Gerir Atividades</router-link></b-dropdown-item>
        <b-dropdown-item><router-link :to="{ name: 'Team' }">Equipa</router-link></b-dropdown-item>
        <b-dropdown-item>Login (modal)</b-dropdown-item>
      </b-dropdown> -->

    <b-navbar toggleable="lg" style="height: 60px">
      <router-link :to="{ name: 'Home' }"
        ><img id="logo" src="../assets/logo_trivia_owl_escuro.png"
      /></router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <!--  class="mt-2 mr-4"-->
        <b-navbar-nav class="ml-auto mr-2">
          <router-link id="firstNav" :to="{ name: 'Activities' }"
            ><p class="mt-3">Atividades</p></router-link
          >
          <router-link id="secondNav" :to="{ name: 'Classification' }"
            ><p class="mt-3">Classificação</p></router-link
          >
          <router-link id="thirdNav" :to="{ name: 'Interaction' }"
            ><p class="mt-3">Interação</p></router-link
          >

          <b-nav-item-dropdown right class="mr-2">
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em><b-avatar :src="getUser.photo"></b-avatar></em>
            </template>
            <b-dropdown-item href="#"
              ><router-link :to="{ name: 'Profile' }"
                >Perfil</router-link
              ></b-dropdown-item
            >
            <b-dropdown-item href="#"><b-button v-b-modal.modalLogin >Entrar</b-button></b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!-- modal Login -->
    <b-modal style="background-color: #0B132B" id="modalLogin" title="Login">
    <form @submit.prevent='Login'>
        <label for="txtUsername">Nome de Utilizador</label><br>
        <input type="text" id="txtUsername" v-model="login.username"><br>

        <label for="txtPassword">Palavra Passe</label><br>
        <input type="password" id="txtPassword" v-model='login.password'><br><br>

        <input type="submit" value="Entrar">
        <b-button v-b-modal.modalRegister @click='openRegister()'>Registar</b-button>
    </form>
  </b-modal>

  <!-- modal Registo -->
  <b-modal style="background-color: #0B132B" id="modalRegister" title="Registo">
    <form @submit.prevent='Register'>
        <label for="txtUsername">Nome de Utilizador</label><br>
        <input type="text" id="txtUsername" v-model='register.username'><br>

        <label for="txtPassword">Palavra Passe</label><br>
        <input type="password" id="txtPassword" v-model='register.password'><br><br>

        <label for="txtPassword2">Confirmar Palavra Passe</label><br>
        <input type="password" id="txtPassword2" v-model='register.password2'><br><br>

        <label for="txtName">Nome</label><br>
        <input type="text" id="txtName" v-model='register.name'><br><br>

        <label for="txtBirthDate">Data Nascimento</label><br>
        <input type="date" id="txtBirthDate" v-model='register.birthDate'><br><br>

        <label for="txtCourse">Curso</label><br>
        <input type="text" id="txtCourse" v-model='register.course'><br><br>

        <label for="photo">foto</label><br>
        <input type="url" id="photo" v-model='register.photo'><br><br>

        <label for="txtType">Tipo de Utilizador</label><br>
        <select id="txtType" v-model='register.type' required>
          <option value="student">Estudante</option>
          <option value="teacher">Docente</option>
        </select><br><br>

        <input type="submit" value="Registar">
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
        type: ''
      }
    }
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
        this.$store.dispatch('register ', {
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
    }
  },
  computed: {
    getUser() {
      return this.$store.getters.getLoggedUser
    }
  }
};
</script>

<style scoped>
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

/* p {
  color: #6FFFE9;
}

p:hover {
color: #1c2541;
} */
</style>
