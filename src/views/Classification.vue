<template>
  <div id="classification">
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
            <th scope="col" @click="sortUsers">Pontos</th>
            <th scope="col">Atividades Realizadas</th>
          </tr>
        </thead>
        <tbody :key="user.id" v-for="(user, index) in users">
          <tr>
            <td>{{ index + 1 }}</td>
            <td><b-avatar alt="" :src="user.photo"></b-avatar></td>
            <td id="nameTd">{{ user.name }}</td>
            <td>{{ user.points }}</td>
            <td>{{ user.doneActivities }}</td>
          </tr>
        </tbody>
      </table>
    </b-container>
  </div>
</template>

<script>
// Preenchimento da tabela com as informações dos utilizadores (classificação, nome, pontos e número de atividades resolvidas)
export default {
  name: "Classification",
  data() {
    return {
      users: [],
      flagSort: -1,
    };
  },
  created() {
    this.getUsers();
  },
  computed: {
  },
  methods: {
    sortUsers() {
      // ordenar users pelos pontos (alterando entre ordenação crescente e decrescente)
      this.flagSort = this.flagSort * -1;
      this.users.sort(this.compareUsers);
    },
    compareUsers(a, b) {
      if (a.points > b.points) return 1 * this.flagSort;
      if (a.points < b.points) return -1 * this.flagSort;
      if (a.points === b.points) return 0;
    },
    async getUsers() {
      try {
        await this.$store.dispatch("getAllUsers");
        this.users = this.$store.getters.getUsers;
        this.users.sort(this.compareUsers);
      } catch (error) {
        this.message =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    },
  },
};
</script>

<style scoped>
/* Estilização da tabela */
h1 {
  color: #fff;
  font-weight: 700;
}
td {
  color: #fff;
}
th {
  color: #ff7070;
}
#nameTd {
  color: #70ffb4;
}
#classificationTable {
  text-align: start;
}
</style>
