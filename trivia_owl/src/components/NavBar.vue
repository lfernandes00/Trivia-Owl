<template>
  <div id="navbar">
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'Activities' }">Actividades</router-link> |
    <router-link :to="{ name: 'Classification' }">Classificação</router-link> |
    <router-link :to="{ name: 'Interaction' }">Interação</router-link> |
    <div>
      <b-dropdown id="dropdown" text="Dropdown" class="m-md-2">
        <b-dropdown-item><router-link :to="{ name: 'Profile' }">Perfil</router-link></b-dropdown-item>
        <b-dropdown-item>Notificações(modal)</b-dropdown-item>
        <b-dropdown-item><router-link :to="{ name: 'UserManagement' }">Gerir Utilizadores</router-link></b-dropdown-item>
        <b-dropdown-item><router-link :to="{ name: 'ActivityManagement' }">Gerir Atividades</router-link></b-dropdown-item>
        <b-dropdown-item><router-link :to="{ name: 'Team' }">Equipa</router-link></b-dropdown-item>
        <b-dropdown-item>Login (modal)</b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
</style>