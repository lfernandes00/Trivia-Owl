<template>
  <div id="navbar">
    <b-navbar toggleable="lg" style="height: 60px">
      <router-link :to="{ name: 'Home' }"
        ><img id="logo" alt="" src="../assets/logo_trivia_owl_escuro.png"
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
          <div class="dropdown dropleft">
            <button
              class="btn btn-secondary dropdown-toggle dropdownBtn " 
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <b-avatar :src="getUser.photo"></b-avatar>
            </button>
            <div class="dropdown-menu dropdownMenu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item dropdownItem" href="#">Action</a>
              <a class="dropdown-item dropdownItem" href="#">Another action</a>
              <a class="dropdown-item dropdownItem" href="#">Something else here</a>
            </div>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!-- modal Login -->
    <b-modal
      id="modalLogin"
      size="sm"
      hide-header
      hide-footer
      content-class="my-class"
    >
      <div id="mdlLoginHeader">
        <h1 class="mt-5">Login</h1>
        <img src="../assets/logo_trivia_owl_escuro.png" alt="" width="115px" />
      </div>
      <form @submit.prevent="Login">
        <label for="txtUsername">Nome de Utilizador</label><br />
        <input type="text" id="txtUsername" v-model="login.username" /><br />

        <label class="mt-3" for="txtPassword">Palavra Passe</label><br />
        <input
          type="password"
          id="txtPassword"
          v-model="login.password"
        /><br /><br />

        <b-button pill id="loginSubmit" type="submit">Entrar</b-button>

        <b-button pill id="registerBtn" v-b-modal.modalRegister
          >Registar</b-button
        >
      </form>
    </b-modal>

    <!-- modal Registo -->
    <b-modal
      id="modalRegister"
      size="sm"
      hide-header
      hide-footer
      content-class="my-class"
    >
      <div id="mdlRegisterHeader">
        <h1 class="mt-5">Registo</h1>
        <img src="../assets/logo_trivia_owl_escuro.png" width="115px" />
      </div>
      <form @submit.prevent="Register">
        <label for="txtRegisterUsername">Nome de Utilizador</label><br />
        <input
          type="text"
          id="txtRegisterUsername"
          v-model="register.username"
        /><br /><br />

        <label for="txtRegisterPassword">Palavra Passe</label><br />
        <input
          type="password"
          id="txtRegisterPassword"
          v-model="register.password"
        /><br /><br />

        <label for="txtRegisterPassword2">Confirmar Palavra Passe</label><br />
        <input
          type="password"
          id="txtRegisterPassword2"
          v-model="register.password2"
        /><br /><br />

        <label for="txtRegisterName">Nome</label><br />
        <input
          type="text"
          id="txtRegisterName"
          v-model="register.name"
        /><br /><br />

        <label for="txtRegisterBirthDate">Data Nascimento</label><br />
        <input
          type="date"
          id="txtRegisterBirthDate"
          v-model="register.birthDate"
        /><br /><br />

        <label for="txtRegisterCourse">Curso</label><br />
        <input
          type="text"
          id="txtRegisterCourse"
          v-model="register.course"
        /><br /><br />

        <label for="registerPhoto">Foto</label><br />
        <input
          type="url"
          id="registerPhoto"
          v-model="register.photo"
        /><br /><br />

        <label for="txtRegisterType">Tipo de Utilizador</label><br />
        <select id="txtRegisterType" v-model="register.type" required>
          <option value="estudante">Estudante</option>
          <option value="docente">Docente</option></select
        ><br /><br />

        <b-button pill id="registerSubmit" type="submit">Registar</b-button>
      </form>
    </b-modal>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "NavBar",
  data() {
    return {
      isVisible: false,
      focusedIndex: 0,
      login: {
        username: "",
        password: "",
      },
      register: {
        username: "user",
        password: "1234",
        password2: "1234",
        name: "António",
        birthDate: "10-12-2000",
        course: "TSIW",
        photo:
          "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        type: "student",
      },
      users: [],
      user: "",
      loggedUser: "",
      show: {
        profile: "visible",
        login: "visible",
        notification: "visible",
        userManagement: "visible",
        activityManagement: "visible",
        team: "visible",
        logout: "visible",
      },
    };
  },
  created() {
    this.users = this.$store.getters.getUsers;
    this.loggedUser = this.$store.getters.getLoggedUser;

    if (this.loggedUser == "") {
      this.show.profile = "hidden";
      this.show.login = "visible";
      this.show.notification = "hidden";
      this.show.userManagement = "hidden";
      this.show.activityManagement = "hidden";
      this.show.team = "hidden";
      this.show.logout = "hidden";
    }

    if (this.loggedUser.type == "estudante") {
      this.show.profile = "visible";
      this.show.login = "hidden";
      this.show.notification = "visible";
      this.show.userManagement = "hidden";
      this.show.activityManagement = "hidden";
      this.show.team = "visible";
      this.show.logout = "visible";
    }

    if (this.loggedUser.type == "docente") {
      this.show.profile = "visible";
      this.show.login = "hidden";
      this.show.notification = "visible";
      this.show.userManagement = "hidden";
      this.show.activityManagement = "visible";
      this.show.team = "hidden";
      this.show.logout = "visible";
    }

    if (this.loggedUser.type == "admin") {
      this.show.profile = "visible";
      this.show.login = "hidden";
      this.show.notification = "visible";
      this.show.userManagement = "visible";
      this.show.activityManagement = "visible";
      this.show.team = "hidden";
      this.show.logout = "visible";
    }
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
    hideDropdown() {
      this.isVisible = false;
      this.focusedIndex = 0;
    },
    Login() {
      try {
        //chamar a ação login que está na store
        this.$store.dispatch("login", {
          username: this.login.username,
          password: this.login.password,
        });
        this.loggedUser = this.$store.getters.getLoggedUser;
        this.hideModal("modalLogin");

        if (this.loggedUser.type == "estudante") {
          this.show.profile = "visible";
          this.show.login = "hidden";
          this.show.notification = "visible";
          this.show.userManagement = "hidden";
          this.show.activityManagement = "hidden";
          this.show.team = "visible";
          this.show.logout = "visible";
        }

        if (this.loggedUser.type == "docente") {
          this.show.profile = "visible";
          this.show.login = "hidden";
          this.show.notification = "visible";
          this.show.userManagement = "hidden";
          this.show.activityManagement = "visible";
          this.show.team = "visible";
          this.show.logout = "visible";
        }

        if (this.loggedUser.type == "admin") {
          this.show.profile = "visible";
          this.show.login = "hidden";
          this.show.notification = "visible";
          this.show.userManagement = "visible";
          this.show.activityManagement = "visible";
          this.show.team = "visible";
          this.show.logout = "visible";
        }
        //fechar a modal login
      } catch (error) {
        //mudar para sweetalert
        Swal.fire({
          title: "Erro!",
          text: error,
          buttonsStyling: false,
          confirmButtonClass: "btn btn-danger",
          icon: "error",
        });
      }
    },
    hideModal(id) {
      this.$root.$emit("bv::hide::modal", id);
    },
    Register() {
      if (this.register.password != this.register.password2) {
        Swal.fire({
          title: "Erro!",
          text: "As palavras passe não são iguais",
          buttonsStyling: false,
          confirmButtonClass: "btn btn-danger",
          icon: "error",
        });
      }
      try {
        this.$store.dispatch("register", {
          id: this.getNextUserId(),
          username: this.register.username,
          password: this.register.password,
          name: this.register.name,
          birthDate: this.register.birthDate,
          course: this.register.course,
          photo: this.register.photo,
          type: this.register.type,
          points: 0,
          historic: [],
          trophies: [],
          level: 1,
          doneActivities: 0,
          team: 0,
        });
        this.hideModal("modalRegister");
      } catch (error) {
        Swal.fire({
          title: "Erro!",
          text: error,
          buttonsStyling: false,
          confirmButtonClass: "btn btn-danger",
          icon: "error",
        });
      }
    },
    getNextUserId() {
      if (this.users.length == 0) {
        return 1;
      } else {
        return this.users[this.users.length - 1].id + 1;
      }
    },
    logout() {
      this.$store.dispatch("logout");
      this.loggedUser = this.$store.getters.getLoggedUser;
      this.$router.push({ name: "Home" });

      if (this.loggedUser == "") {
        this.show.profile = "hidden";
        this.show.login = "visible";
        this.show.notification = "hidden";
        this.show.userManagement = "hidden";
        this.show.activityManagement = "hidden";
        this.show.team = "hidden";
        this.show.logout = "hidden";
      }
    },
    focusItem() {
      this.$refs.dropdown.children[this.focusedIndex].children[0].focus();
    },
  },
  computed: {
    getUser() {
      // this.user = this.$store.getters.getLoggedUser
      return this.$store.getters.getLoggedUser;
    },
  },
};
</script>

<style scoped>
/deep/ .my-class {
  background-color: #0b132b;
}
.dropdownMenu{
  background-color: #1C2541;
  
}
.dropdownBtn{
  background-color: transparent;
  border: none;
  
}
.dropdownBtn:focus{
  background-color: #1C2541 !important;
  border: none;
  outline: none !important;
  outline-width: 0px;
  
}
.dropdownItem{
  color: #6FFFE9;
}
.dropdownBtn:hover{
  background-color: transparent;
}
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
  color: #70ffb4;
}

#txtUsername {
  width: 264px;
}

#txtPassword {
  width: 264px;
}

label {
  color: #70ffb4;
}

#loginSubmit {
  background-color: #70ffb4;
  color: #0b132b;
  border-color: #70ffb4;
  width: 110px;
}

#registerBtn {
  background-color: #70ffb4;
  color: #0b132b;
  border-color: #70ffb4;
  width: 110px;
  float: right;
}

#modalLogin {
  width: 1000px;
}

input[type="text"] {
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  border: 0px;
  width: 264px;
  height: 30px;
  padding-left: 10px;
}

input[type="password"] {
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  border: 0px;
  width: 264px;
  height: 30px;
  padding-left: 10px;
}

input[type="date"] {
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  border: 0px;
  width: 264px;
  height: 30px;
  padding-left: 10px;
}

input[type="url"] {
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
  background-color: #70ffb4;
  color: #0b132b;
  border-color: #70ffb4;
  width: 120px;
  float: right;
}
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.1s ease-in-out;
}
.dropdown-fade-enter,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
