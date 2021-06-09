<template>
  <div id="activityClassification">
    <b-container fluid>
      <b-row>
        <b-col cols="3" class="mt-5 ml-5">
          <img
            src="../assets/classificacao.webp" 
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
              <th scope="col" @click="sortScores">Pontuação (0-10)</th>
            </tr>
          </thead>
          <tbody :key="user.id" v-for="(user, index) in scores">
            <tr>
              <td>{{index + 1}}</td>
              <td><b-avatar img-alt="" :src="user.photo"></b-avatar></td>
              <td id="nameTd">{{user.name}}</td>
              <td>{{user.activityScore.score}}</td>
            </tr>
          </tbody>
      </table>
    </b-container>
  </div>
</template>

<script>
// Preenchimento da tabela com as informações dos utilizadores e a sua classificação em prova
export default {
  name: "ActivityClassification",
  data() {
    return {
      scores: {},
      flagSort: -1,
    };
  },
  created() {
    this.getActivityClassification()
  },
  methods: {
    sortScores() {
      // ordenar users pelos pontos (alterando entre ordenação crescente e decrescente)
      this.flagSort = this.flagSort * -1;
      this.scores.sort(this.compareScores);
    },
    compareScores(a, b) {
      if (a.activityScore.score > b.activityScore.score) return 1 * this.flagSort;
      if (a.activityScore.score < b.activityScore.score) return -1 * this.flagSort;
      if (a.activityScore.score === b.activityScore.score) return 0;
    },
    async getActivityClassification() {
      try {
        await this.$store.dispatch("getActivityClassification", this.$route.params.activityId);
        this.scores = this.$store.getters.getActivityClassification;
        this.scores.sort(this.compareScores)
      } catch (error) {
        // console.log(error);
        this.message =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    }
  },
};
</script>

<style scoped>
/* Estilização dos textos da tabela */
h1{color:#fff;font-weight:700}td{color:#fff}th{color:#ff7070}#nameTd{color:#70ffb4}#classificationTable{text-align:start}
</style>
