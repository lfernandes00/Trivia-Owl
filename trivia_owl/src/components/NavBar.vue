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
              <em><b-avatar icon="people-fill"></b-avatar></em>
            </template>
            <b-dropdown-item href="#"
              ><router-link :to="{ name: 'Profile' }"
                >Perfil</router-link
              ></b-dropdown-item
            >
            <b-dropdown-item href="#">Entrar</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <dialog id='dlgLogin'>
            <input type="text" id="txtSubmit">
        </dialog>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {

    }
  },
  methods: {
    openLogin() {
            // Exibir a janela 
            document.querySelector('#dlgLogin').showModal()

        },
  }
};
</script>

<style>
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
