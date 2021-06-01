<template>
  <div id="teamClassification">
    <b-container fluid>
      <b-row>
        <b-col cols="3" class="mt-5 ml-5">
          <img
            src="../assets/classificacao.png"
            alt=""
            style="width: 100px; height: 100px"
          />
        </b-col>
        <b-col cols="6" class="mt-5" style="text-align: start"
          ><br />
          <h1>CLASSIFICAÇÃO</h1>
        </b-col>
      </b-row>
    </b-container>

    <b-container>
      <table id="classificationTable" class="table table-borderless mt-5">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col">Nome</th>
              <th scope="col" @click='sortUsers'>Pontos</th>
            </tr>
          </thead>
          <tbody :key="team.id" v-for="(team,index) in teams">
            <tr>
              <td>{{index + 1}}</td>
              <td><b-avatar :src="team.photo"></b-avatar></td>
              <td id="nameTd">{{team.name}}</td>
              <td>{{team.points}}</td>
            </tr>
          </tbody>
        </table>
    </b-container>
  </div>
</template>

<script>
// Preenchimento da tabela com as informações dos utilizadores (classificação, nome, pontos e número de atividades resolvidas)
export default {
  name: "TeamClassification",
  data() {
    return {
      teams: [],
      flagSort: -1,
    };
  },
  created() {
    this.teams = this.$store.getters.getTeams;
  },
  methods: {
        sortUsers() {
            // ordenar users pelos pontos (alterando entre ordenação crescente e decrescente)
            this.flagSort = this.flagSort * -1
            this.teams.sort(this.compareTeams)
        },
        compareUsers(a, b) {
            if (a.points > b.points) return 1 * this.flagSort
            if (a.points < b.points) return -1 * this.flagSort
            if (a.points === b.points) return 0
        }
    },

};
</script>

<style scoped>
/* Estilização da tabela */
h1{color:#fff;font-weight:700}td{color:#fff}th{color:#ff7070}#nameTd{color:#70ffb4}#classificationTable{text-align:start}
</style>

