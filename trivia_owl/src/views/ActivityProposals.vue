<template>
  <div id="activityProposals">
    <b-container fluid>
      <b-row>
        <h1>Propostas de Atividades</h1>
      </b-row>
    </b-container>

    <b-container>
      <table class="table table-borderless mt-5">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col">Nome</th>
              <th scope="col">Pontos</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody :key="proposal.id" v-for="(proposal,index) in proposals">
            <tr>
              <td>{{index + 1}}</td>
              <td><b-avatar :src="proposal.photo"></b-avatar></td>
              <td id="nameTd">{{proposal.name}}</td>
              <td>{{proposal.points}}</td>
              <td>
                <b-button pill class="mr-2" id="detailBtn">Ver</b-button>
                <b-button pill class="ml-2" id="removeBtn">Remover</b-button>
              </td>
            </tr>
          </tbody>
        </table>
    </b-container>
  </div>
</template>

<script>
export default {
name: 'ActivityProposals',
data() {
  return {
    proposals: []
  }
},
created() {
  this.proposals = this.$store.getters.getProposals
}
}
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

#nameTd {
  color: #70FFB4;
}

#detailBtn {
  background-color: #70FFB4;
  color: #0B132B;
  width: 100px;
}

#removeBtn {
  background-color: #FF7070;
  color:  #0B132B;
  width: 100px;
}
</style>