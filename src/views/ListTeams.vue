<template>
  <div id="listTeams">
    <b-container fluid>
      <b-row>
        <h1>Equipas</h1>
      </b-row>
    </b-container>

    <b-container>
      <table id="teamsTable" class="table table-borderless mt-5">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col">Nome</th>
              <th scope="col">Membros</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody :key="team.id" v-for="(team,index) in teams">
            <tr>
              <td>{{index + 1}}</td>
              <td><b-avatar alt="" :src="team.photo"></b-avatar></td>
              <td id="nameTd">{{team.name}}</td>
              <td>{{team.members.length}}</td>
              <td>
                <router-link :to="{name: 'Team', params: {teamId: team.id}} ">
                  <b-button pill class="mr-2" id="detailBtn">Ver</b-button>
                </router-link>
                
                <b-button pill class="ml-2" id="removeBtn" :style="{visibility: show}" @click='removeTeam(team.id)'>Remover</b-button>
              </td>
            </tr>
          </tbody>
        </table>
    </b-container>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
export default {
name: 'ListTeams',
data() {
  return {
    teams: [],
    loggedUser: '',
    show: 'visible'
  }
},
created() {
  this.teams = this.$store.getters.getTeams
  this.loggedUser = this.$store.getters.getLoggedUser;

  if (this.loggedUser.type == 'admin') {
    this.show = 'visible';
  } else {
    this.show = 'hidden';
  }
},
methods: {
  removeTeam(id) {
    

    Swal.fire({
      title: 'Deseja remover a equipa?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim!'
    }).then((result) => {
      if (result.isConfirmed) {
      this.$store.dispatch('removeTeam', id)
      this.teams = this.$store.getters.getTeams
      }
    })
  }
}
}
</script>

<style scoped>
h1{color:#fff;font-weight:700;margin:auto;margin-top:50px}td{color:#fff}th{color:#ff7070}#nameTd{color:#70ffb4}#detailBtn{background-color:#70ffb4;color:#0b132b;width:100px}#removeBtn{background-color:#ff7070;color:#0b132b;width:100px}#teamsTable{text-align:start}
</style>