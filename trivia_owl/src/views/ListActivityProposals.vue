<template>
  <div id="listActivityProposals">
    <b-container fluid>
      <b-row>
        <h1>Propostas de Atividades</h1>
      </b-row>
    </b-container>

    <b-container>
      <table id="proposalTable" class="table table-borderless mt-5">
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
                <router-link :to="{name: 'ActivityProposal', params: {proposalId: proposal.id}} ">
                  <b-button pill class="mr-2" id="detailBtn">Ver</b-button>
                </router-link>
                
                <b-button pill class="ml-2" id="removeBtn" @click='removeProposal(proposal.id)'>Remover</b-button>
              </td>
            </tr>
          </tbody>
        </table>
    </b-container>
  </div>
</template>

<script>
export default {
name: 'ListActivityProposals',
data() {
  return {
    proposals: []
  }
},
created() {
  this.proposals = this.$store.getters.getProposals
},
methods: {
  removeProposal(id) {
    // Remover objeto com confirmação
    if (confirm('Deseja remover a proposta?')) {
      this.$store.dispatch('removeProposal', id)
    }
    
    this.proposals = this.$store.getters.getProposals
  }
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

#proposalTable {
  text-align: start;
}
</style>