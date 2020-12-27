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
          <h1 style="color: white">CLASSIFICAÇÃO</h1>
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
  name: "ActivityClassification",
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
          key: "pontuação"
        }
      ],
      history: [
        {
          l: 1,
          f: "img",
          nome: "João Félix",
          pontuação: 10
        },
        {
          l: 2,
          f: "img",
          nome: "Paula Santos",
          pontuação: 9
        },
        {
          l: 3,
          f: "img",
          nome: "Raquel Soares",
          pontuação: 8.5
        },
        {
          l: 4,
          f: "img",
          nome: "Ricardo Sousa",
          pontuação: 7
        },
        {
          l: 5,
          f: "img",
          nome: "Rui Pinto",
          pontuação: 5
        }
      ],
      borderless: true
    };
  }
};
</script>

<style></style>
