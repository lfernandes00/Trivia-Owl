<template>
  <div id="trophies">
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
          <h1>Troféus</h1>
        </b-col>
      </b-row>
    </b-container>

    <b-container>
      <table class="table table-borderless mt-5">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col">Descrição</th>
              <th scope="col">Pontos</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody :key="trophy.id" v-for="trophy in getTrophies">
            <tr>
              <td>{{trophy.id}}</td>
              <td><b-icon icon="trophy-fill" style="color: #70FFB4; font-size: 25px;"></b-icon></td>
              <td id="descTd">{{trophy.desc}}</td>
              <td>{{trophy.points}}</td>
              <td :key="user" v-for="user in trophy.completed">
                <p v-if='user == loggedUser.username && trophy.completed.length != 0'>Feito!</p>
                <p v-else>Bloqueado!</p>
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
      loggedUser: ''
    }
  },
  created() {
    this.loggedUser = this.$store.getters.getLoggedUser;
  },
  computed: {
    getTrophies() {
      return this.$store.getters.getAllTrophies;
    }
  }
};
</script>

<style scoped>
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

#descTd {
  color: #70FFB4;
}
</style>
