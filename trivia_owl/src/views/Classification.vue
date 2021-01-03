<template>
  <div id="classification">
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
      <b-row class="mt-5">
        <b-table
          id="activitiesTable"
          class="text-left"
          :items="getAllUsers"
          :fields="fields"
          :borderless="borderless"
        >
        <template #cell(f)="data">
        <b-avatar :src="data.f"></b-avatar>
      </template>
        </b-table>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// Preenchimento da tabela com as informações dos utilizadores (classificação, nome, pontos e número de atividades resolvidas)
export default {
  name: "Classification",
  data() {
    return {
      fields: [
        {
          key: "l"
        },
        {
          key: "f"
        },
        {
          key: "nome"
        },
        {
          key: "pontos",
          sortable: true
        },
        {
          key: "atividades_realizadas"
        }
      ],
      users: [],
      // caractrística que retira aas bordas à tabela
      borderless: true
    }
    
  },
  created() {
      this.users = this.$store.getters.getUsers
    },
  computed: {
      getAllUsers() {
    const allNames = []
    const allUsers = []

    for (let user of this.users) {
      if (allNames.indexOf(user.username) == -1)
        allUsers.push({l: user.id, f: user.photo, nome: user.name, pontos: user.points, atividades_realizadas: user.doneActivities});
    }
    return allUsers;
    },
    }
};
</script>

<style scoped>
/* Estilização da tabela */
h1 {
  color: white;
  font-weight: bold;
}

#activitiesTable {
  color: white;
}
</style>
