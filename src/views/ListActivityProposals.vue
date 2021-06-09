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
              <td><b-avatar alt="" :src="proposal.photo"></b-avatar></td>
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
import Swal from 'sweetalert2';
export default {
name: 'ListActivityProposals',
data() {
  return {
    proposals: []
  }
},
created() {
  this.getProposalsList();
},
methods: {
  removeProposal(id) {
    

    Swal.fire({
      title: 'Deseja remover a proposta?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim!'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(id);
      this.$store.dispatch('removeProposal', id)
      this.getProposalsList();
    }
  })
  },
  async getProposalsList() {
      try {
        await this.$store.dispatch("getAllProposals");
        this.proposals = this.$store.getters.getProposals;
      } catch (error) {
        this.message =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    }
}
}
</script>

<style scoped>
h1{color:#fff;font-weight:700}td{color:#fff}th{color:#ff7070}#nameTd{color:#70ffb4}#detailBtn{background-color:#70ffb4;color:#0b132b;width:100px}#removeBtn{background-color:#ff7070;color:#0b132b;width:100px}#proposalTable{text-align:start}
</style>