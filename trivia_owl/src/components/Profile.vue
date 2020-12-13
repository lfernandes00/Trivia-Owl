<template>
  <div id="Profile">
      <router-link :to="{ name: 'Trophies'}">Troféus</router-link><br><br>
      <router-link :to="{ name: 'EditProfile'}">Editar perfil</router-link><br><br>
      <router-link :to="{ name: 'AddTeam'}">Criar Equipa</router-link>
  </div>
</template>

<script>
export default {
name: 'Profile',
}
</script>

<style>

</style>