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
          ><br />*
          <h1>CLASSIFICAÇÃO</h1>
        </b-col>
      </b-row>
    </b-container>

    <b-container>
      <b-row class="mt-5">
        <b-table
          id="activitiesTable"
          class="text-left"
          :items="history"
          :fields="fields"
          :borderless="borderless"
        ></b-table>
      </b-row>
    </b-container>
  </div>
</template>

<script>
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
          key: "nome",
          tdClass: () => {
            return "text-info";
          }
        },
        {
          key: "pontos"
        },
        {
          key: "atividades_realizadas"
        }
      ],
      history: [
        {
          l: 1,
          f: "img",
          nome: "João Félix",
          pontos: 5000,
          atividades_realizadas: 15
        },
        {
          l: 2,
          f: "img",
          nome: "Paula Santos",
          pontos: 4500,
          atividades_realizadas: 10
        },
        {
          l: 3,
          f: "img",
          nome: "Raquel Soares",
          pontos: 4120,
          atividades_realizadas: 11
        },
        {
          l: 4,
          f: "img",
          nome: "Ricardo Sousa",
          pontos: 3700,
          atividades_realizadas: 7
        },
        {
          l: 5,
          f: "img",
          nome: "Rui Pinto",
          pontos: 3200,
          atividades_realizadas: 9
        }
      ],
      borderless: true
    };
  }
};
</script>

<style scoped>
h1 {
  color: white;
  font-weight: bold;
}
</style>
