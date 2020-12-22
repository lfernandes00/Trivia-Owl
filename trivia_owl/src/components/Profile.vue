<template>
  <div id="Profile">
    <!-- <router-link :to="{ name: 'Trophies'}">Troféus</router-link><br><br>
      <router-link :to="{ name: 'EditProfile'}">Editar perfil</router-link><br><br>
      <router-link :to="{ name: 'AddTeam'}">Criar Equipa</router-link> -->

    <b-container fluid>
      <b-row class="mt-5">
        <b-col cols="4"
          ><b-avatar icon="people-fill" size="200px"></b-avatar
        ></b-col>
        <b-col cols="6" class="mt-5">
          <h6>Nível</h6>
          <b-progress
            height="2.5rem"
            value="75"
            :style="{ 'background-color': '#01A688' }"
            class="mb-2"
          ></b-progress>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="1"></b-col>
        <b-col cols="3" class="mt-5 ml-3">
          <div style="text-align: start">
            <b class="mr-4">Nome: </b> <strong>João Félix</strong> <br /><br />
            <b class="mr-4">Idade: </b> <strong>21</strong> <br /><br />
            <b class="mr-4">Curso: </b> <strong>TSIW</strong> <br /><br />
            <b class="mr-3">Equipa: </b> <strong>TSIW_4ever</strong><br />
          </div>
        </b-col>
        <b-col cols="6" class="mt-5" style="padding: 0px; width: 500px">
          <b-table id="activitiesTable" :items="history" :fields="fields">
            <template #cell(actions)="row">
              <b-button
                pill
                size="md"
                @click="row.item"
                class="mr-1 btn btn-danger"
                >Ir</b-button
              >
            </template>
          </b-table>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="1"></b-col>
        <b-col
          cols="3"
          class="mt-5 ml-3"
          style="display: flex; items-align: start;"
        >
          <b-button
            pill
            class="mr-3"
            style="background-color: #70FFB4; color: #0B132B"
            >Criar Equipa</b-button
          >
          <b-button pill style="background-color: #70FFB4; color: #0B132B"
            >Editar</b-button
          >
        </b-col>
        <b-col cols="3" class="mt-5">
          <p>1º</p>
        </b-col>
        <b-col cols="3" class="mt-5">
          <p>10</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      fields: ["nome", "curso", "pontos", "actions"],
      history: [
        { nome: "Atividade 1", curso: "TSIW", pontos: 35 },
        { nome: "Atividade 2", curso: "Multimédia", pontos: 50 }
      ]
    };
  }
};
</script>

<style>
h6 {
  color: #70ffb4;
}
b {
  color: #ff7070;
}
strong {
  color: #93dbcb;
}

b-button pill {
  background-color: #70ffb4;
}
p {
  color: #00b89c;
}
</style>
