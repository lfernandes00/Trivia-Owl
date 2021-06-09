<template>
  <div id="team">

    <b-container fluid>
      <b-row class="mt-5">
        <b-col cols="4"
          ><b-avatar :src="getTeam.photo" img-alt="" size="200px"></b-avatar
        ></b-col>
        <b-col cols="6" class="mt-5">
          <h6>Nível</h6>
          <b-progress
            height="2.5rem"
            value="75"
            class="mb-2"
          ></b-progress>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="1"></b-col>
        <b-col cols="3" class="mt-5 ml-3">
          <div style="text-align: start">
            <b class="mr-4">Nome: </b> <strong>{{ getTeam.name }}</strong>
            <br /><br />
            <b class="mr-4">Membros: </b>
            <strong>{{ getTeam.members.length }}</strong> <br /><br />
            <b class="mr-4">Criador: </b> <strong>{{ getTeam.creater }}</strong>
            <br /><br>
            <b class="mr-4">Pontos: </b> <strong>{{ getTeam.points  }}</strong>
          </div>
        </b-col>
        <b-col cols="6" class="mt-5" style="padding: 0px; width: 500px">
          <h2 style="color:white;">Membros</h2>
            <table class="table table-borderless mt-5">
        <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Curso</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody :key="user.id" v-for="user in getTeam.members">
            <tr>
              <td>{{user.name}}</td>
              <td>{{user.course}}</td>  
              <td><b-button pill variant="danger" :style="{visibility: show}">Eliminar</b-button></td>
            </tr>
          </tbody>
      </table>
          
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="1"></b-col>
        <b-col
          cols="3"
          class="mt-5 ml-3"
          style="display: flex; items-align: start;"
        >
          <router-link :to='{name: "TeamClassification"}'><b-button
            pill
            id="classificationBtn"
            class="mr-3"
            style="background-color: #70FFB4; color: #0B132B"
            >Classificação</b-button></router-link>
          <router-link :to='{name: "EditTeam"}'><b-button pill id="editBtn" :disabled='disabled' style="background-color: #70FFB4; color: #0B132B">Editar</b-button></router-link>
          
        </b-col>
        <b-col cols="3" class="mt-5">
          <router-link class="h1" rel="preload" :to='{name: "TeamClassification"}'><b-icon style="color: #70FFB4; font-size: 60px;" icon="people-fill"></b-icon></router-link>
        </b-col>
        <b-col cols="3" class="mt-5">
          <router-link class="h1" rel="preload" :to='{name: "Trophies"}'><b-icon style="color: #70FFB4; font-size: 60px;" icon="trophy-fill"></b-icon></router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Team",
  data() {
    return {
      show: 'visible',
      loggedUser: '',
      disabled: false
    };
  },
  created() {
    this.users = this.$store.getters.getUsers;
    this.loggedUser = this.$store.getters.getLoggedUser;

    if (this.loggedUser.username == this.getTeam.creater) {
      this.show = 'visible';
      this.disabled = false;
    } else {
      this.show = 'hidden';
      this.disabled = true;
    }

  },
  computed: {
    getTeam() {
      return this.$store.getters.getTeamById(this.$route.params.teamId);
    }
  }
};
</script>

<style scoped>
th{color:#ff7070}td{color:#fff}h6{color:#70ffb4}b{color:#ff7070}strong{color:#93dbcb}b-button pill{background-color:#70ffb4}p{color:#00b89c}#historyTable{color:#fff}#classificationBtn{width:110px;height:50px;font-size:13px}#editBtn{width:110px;height:50px}
</style>
