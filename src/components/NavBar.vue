<template>
  <div id="navbar">
    <b-navbar toggleable="lg" style="height: 60px">
      <router-link rel="preconnect" :to="{ name: 'Home' }"
        ><img id="logo" alt="" src="../assets/logo_trivia_owl_escuro.webp"
      /></router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <!--  class="mt-2 mr-4"-->
        <b-navbar-nav class="ml-auto mr-2">
          <router-link
            id="firstNav"
            rel="preconnect"
            :to="{ name: 'ListActivities' }"
            ><p class="mt-3">Atividades</p></router-link
          >
          <router-link
            id="secondNav"
            rel="preconnect"
            :to="{ name: 'Classification' }"
            ><p class="mt-3">Classificação</p></router-link
          >
          <router-link
            id="thirdNav"
            rel="preconnect"
            :to="{ name: 'Interaction' }"
            ><p class="mt-3">Interação</p></router-link
          >
          <div class="dropdown dropleft">
            <button
              class="btn btn-secondary dropdown-toggle dropdownBtn"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <b-avatar img-alt="" :src="getUser.photo"></b-avatar>
            </button>
            <div
              v-if="getUser == ''"
              class="dropdown-menu dropdownMenu"
              aria-labelledby="dropdownMenuButton"
            >
              <a
                class="dropdown-item dropdownItem"
                href="#"
                v-b-modal.modalLogin
                >Entrar</a
              >
            </div>
            <div
              v-else-if="getUser.type == 'admin'"
              class="dropdown-menu dropdownMenu"
              aria-labelledby="dropdownMenuButton"
            >
              <a class="dropdown-item dropdownItem" href="#"
                ><router-link
                  class="profileDrop"
                  rel="preconnect"
                  :to="{ name: 'Profile', params: { userID: getUser.id } }"
                  >Perfil</router-link
                ></a
              >
              <a class="dropdown-item dropdownItem" href="#"
                ><router-link class="userManagementDrop" rel="preconnect" :to="{ name: 'UserManagement' }"
                  >Gerir Utilizadores</router-link
                ></a
              >
              <a class="dropdown-item dropdownItem" href="#"
                ><router-link
                  class="activityManagementDrop"
                  rel="preconnect"
                  :to="{ name: 'ListActivityManagement' }"
                  >Gerir Atividades</router-link
                ></a
              >
              <a
                class="dropdown-item dropdownItem"
                rel="preconnect"
                href="#"
                @click="logout"
                >Sair</a
              >
            </div>
            <div
              v-else-if="getUser.type == 'docente'"
              class="dropdown-menu dropdownMenu"
              aria-labelledby="dropdownMenuButton"
            >
              <a class="dropdown-item dropdownItem" href="#"
                ><router-link
                  rel="preconnect"
                  class="profileDrop"
                  :to="{ name: 'Profile', params: { userID: getUser.id } }"
                  >Perfil</router-link
                ></a
              >
              <a class="dropdown-item dropdownItem" href="#"
                ><router-link
                  rel="preconnect"
                  class="activityManagementDrop"
                  :to="{ name: 'ListActivityManagement' }"
                  >Gerir Atividades</router-link
                ></a
              >
              <a
                class="dropdown-item dropdownItem"
                rel="preconnect"
                href="#"
                @click="logout"
                >Sair</a
              >
            </div>
            <div
              v-else-if="getUser.type == 'estudante'"
              class="dropdown-menu dropdownMenu"
              aria-labelledby="dropdownMenuButton"
            >
              <a class="dropdown-item dropdownItem" href="#"
                ><router-link
                  rel="preconnect"
                  class="profileDrop"
                  :to="{ name: 'Profile', params: { userID: getUser.id } }"
                  >Perfil</router-link
                ></a
              >
              <a
                class="dropdown-item dropdownItem"
                rel="preconnect"
                href="#"
                @click="logout"
                >Sair</a
              >
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
        <img src="../assets/logo_trivia_owl_escuro.webp" alt="" width="115px" />
      </div>
      <form @submit.prevent="handleLogin">
        <label for="txtUsername">Nome de Utilizador</label><br />
        <input
          type="text"
          id="txtUsername"
          v-model="userLogin.username"
        /><br />

        <label class="mt-3" for="txtPassword">Palavra Passe</label><br />
        <input
          type="password"
          id="txtPassword"
          v-model="userLogin.password"
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
        <img src="../assets/logo_trivia_owl_escuro.webp" width="115px" />
      </div>
      <form @submit.prevent="handleRegister">
        <label for="txtRegisterUsername">Nome de Utilizador</label><br />
        <input
          type="text"
          id="txtRegisterUsername"
          v-model="user.username"
        /><br /><br />

        <label for="txtRegisterPassword">Palavra Passe</label><br />
        <input
          type="password"
          id="txtRegisterPassword"
          v-model="user.password"
        /><br /><br />

        <label for="txtRegisterName">Nome</label><br />
        <input
          type="text"
          id="txtRegisterName"
          v-model="user.name"
        /><br /><br />

        <label for="txtRegisterBirthDate">Data Nascimento</label><br />
        <input
          type="date"
          id="txtRegisterBirthDate"
          v-model="user.birthDate"
        /><br /><br />

        <label for="txtRegisterCourse">Curso</label><br />
        <input
          type="text"
          id="txtRegisterCourse"
          v-model="user.course"
        /><br /><br />

        <label for="registerPhoto">Foto</label><br />
        <input type="url" id="registerPhoto" v-model="user.photo" /><br /><br />

        <label for="txtRegisterType">Tipo de Utilizador</label><br />
        <select id="txtRegisterType" v-model="user.typeId" required>
          <option value="2">Estudante</option>
          <option value="3">Docente</option></select
        ><br /><br />

        <b-button pill id="registerSubmit" type="submit">Registar</b-button>
      </form>
    </b-modal>
  </div>
</template>

<script>
import Swal from "sweetalert2";

class User {
  constructor(
    username,
    password,
    name,
    birthDate,
    course,
    level,
    photo,
    doneActivities,
    points,
    typeId
  ) {
    this.username = username;
    this.password = password;
    this.name = name;
    this.birthDate = birthDate;
    this.course = course;
    this.level = level;
    this.photo = photo;
    this.doneActivities = doneActivities;
    this.points = points;
    this.typeId = typeId;
  }
}

class UserLogin {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}
export default {
  name: "NavBar",
  data() {
    return {
      user: new User(
        null,
        null,
        null,
        null,
        null,
        "iniciante",
        null,
        0,
        0,
        null
      ),
      userLogin: new UserLogin("", ""),
      message: "",
      errors: [],
      isVisible: false,
      focusedIndex: 0,
      login: {
        username: "",
        password: "",
      },
      users: [],
      loggedUser: "",
    };
  },
  created() {
    this.users = this.$store.getters.getUsers;
    this.loggedUser = this.$store.getters.getLoggedUser;
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
    hideDropdown() {
      this.isVisible = false;
      this.focusedIndex = 0;
    },
    async handleLogin() {
      console.log(this.userLogin.username, this.userLogin.password);
      this.errors = [];
      if (this.userLogin.username && this.userLogin.password) {
        //makes request by dispatching an action
        try {
          await this.$store.dispatch("login", this.userLogin);
          this.hideModal("modalLogin");
        } catch (error) {
          this.message =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
          Swal.fire({
            title: "Erro!",
            text: this.message,
            buttonsStyling: false,
            confirmButtonClass: "btn btn-danger",
            icon: "error",
          });
        }
      } else {
        if (!this.userLogin.username) {
          this.errors.push("Username required.");
        }
        if (!this.userLogin.password) {
          this.errors.push("Password required.");
        }
      }
    },
    hideModal(id) {
      this.$root.$emit("bv::hide::modal", id);
    },
    async handleRegister() {
      this.message = "";
      // this.loading = true;
      // this.successful = false;
      this.errors = [];
      if (this.user.username && this.user.password) {
        //makes request by dispatching an action
        try {
          await this.$store.dispatch("register", this.user);
          this.hideModal("modalRegister");
          // console.log("REGISTER OK");
          // this.message = this.$store.getters.getMessage;
          // this.successful = true;
        } catch (error) {
          console.log(error);
          this.message =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
          Swal.fire({
            title: "Erro!",
            text: this.message,
            buttonsStyling: false,
            confirmButtonClass: "btn btn-danger",
            icon: "error",
          });
        }
      } else {
        if (!this.user.username) {
          this.errors.push("Username required.");
        }
        if (!this.user.password) {
          this.errors.push("Password required.");
        }
      }
    },
    getNextUserId() {
      if (this.users.length == 0) {
        return 1;
      } else {
        return this.users[this.users.length - 1].id + 1;
      }
    },
    async logout() {
      this.$router.push({ name: "Home" });
      this.$store.dispatch("logout");
    },
    focusItem() {
      this.$refs.dropdown.children[this.focusedIndex].children[0].focus();
    },
  },
  computed: {
    getUser() {
      return this.$store.getters.getLoggedUser;
    },
  },
};
</script>

<style scoped>
/deep/ .my-class {
  background-color: #0b132b;
}
.dropdownMenu {
  background-color: #1c2541;
}
.dropdownBtn {
  background-color: transparent;
  border: none;
}
.dropdownBtn:focus {
  background-color: #1c2541 !important;
  box-shadow: none !important;
}
.dropdownBtn:active {
  outline: none;
}
.dropdownItem {
  color: #6fffe9;
}
.dropdownBtn:hover {
  background-color: transparent;
}
.profileDrop {
  color: #6fffe9;
}
.profileDrop:hover {
  text-decoration: none !important;
  color: black;
}
.userManagementDrop {
  color: #6fffe9;
}
.userManagementDrop:hover {
  text-decoration: none !important;
  color: black;
}
.activityManagementDrop {
  color: #6fffe9;
}
.activityManagementDrop:hover {
  text-decoration: none !important;
  color: black;
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
  border: 0;
  width: 264px;
  height: 30px;
  padding-left: 10px;
}
input[type="password"] {
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  border: 0;
  width: 264px;
  height: 30px;
  padding-left: 10px;
}
input[type="date"] {
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  border: 0;
  width: 264px;
  height: 30px;
  padding-left: 10px;
}
input[type="url"] {
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  border: 0;
  width: 264px;
  height: 30px;
  padding-left: 10px;
}
#txtRegisterType {
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  border: 0;
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
