<template>
  <div id="activityClassification">
    <b-container fluid>
      <b-row>
        <b-col cols="3" class="mt-5 ml-5">
          <img
            src="../assets/classificacao.png"
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
              <th scope="col">Pontuação (0-10)</th>
            </tr>
          </thead>
          <tbody :key="user.userId" v-for="(user, index) in getActivity.classification">
            <tr>
              <td>{{index + 1}}</td>
              <td><b-avatar :src="user.userPhoto"></b-avatar></td>
              <td id="nameTd">{{user.userName}}</td>
              <td>{{user.score}}</td>
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
      id: '',
      activity: {}
    };
  },
  created() {
    this.id = this.$route.params.activityId;
    this.activity = this.getActivity;
    console.log(this.getActivity.classification)
  },
  methods: {
    getUser(id) {
      return this.$store.getters.getUserById(id);
    }
  },
  computed: {
    getActivity() {
      return this.$store.getters.getActivityById(this.id)
    },
    

  }
};
</script>

<style scoped>
/* Estilização dos textos da tabela */
h1 {
  color: white;
  font-weight: bold;
}

 td {
  color: white;
}

 th {
  color: #ff7070;
}

#nameTd {
  color: #70FFB4;
}

#classificationTable {
  text-align: start;
}
</style>
