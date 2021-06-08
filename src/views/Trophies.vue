<template>
  <div id="trophies">
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
          <h1>Troféus</h1>
        </b-col>
      </b-row>
    </b-container>

    <b-container>
      <table id="trophyTable" class="table table-borderless mt-5 ">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col">Descrição</th>
              <th scope="col">Pontos</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody :key="trophy.id" v-for="trophy in trophies">
            <tr>
              <td>{{trophy.id}}</td>
              <td><b-icon class="h1" icon="trophy-fill" style="color: #70FFB4; font-size: 25px;"></b-icon></td>
              <td id="descTd">{{trophy.desc}}</td>
              <td>{{trophy.points}}</td>
              <td :key="completed.id" v-for="completed in trophy.users">
                <p v-if='completed.id == user.id && trophy.users.length != 0'>Feito!</p>
                <p v-else></p>
              </td>
            </tr>
          </tbody>
        </table>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "trophies",
  data() {
    return {
      user: '',
      trophies: []
    }
  },
  created() {
    this.getTrohpies();
    this.getUser();
  },
  methods: {
    async getTrohpies() {
      try {
        await this.$store.dispatch("getAllTrophies");
        this.trophies = this.$store.getters.getTrophies;
      } catch (error) {
        this.message =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    },
    async getUser() {
      try {
        await this.$store.dispatch("getOneUser", this.$route.params.userId);
        this.user = this.$store.getters.getUserById;
      } catch (error) {
        // console.log(error);
        this.message =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    }
  }
};
</script>

<style scoped>
h1{color:#fff;font-weight:700}td{color:#fff}th{color:#ff7070}#descTd{color:#70ffb4}#trophyTable{text-align:start}
</style>
