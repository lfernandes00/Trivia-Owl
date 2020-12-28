<template>
  <div id="activity">
    

    <b-container fluid>
      <b-row class="mt-5">
        <b-col cols="3">
          <div>
            <b-img class="ml-4" src="https://picsum.photos/300/300/?image=41" style="width: 330px; height: 300px;display:flex; justify-content: start"></b-img>
          </div>
        </b-col>

        <b-col>
          <div style="text-align: start" class="mt-3">
            <b class="mr-4">Nome: </b> <strong>Atividade 1</strong> <br /><br />
            <b class="mr-4">Curso: </b> <strong>TSIW</strong> <br /><br />
            <b class="mr-2">Cadeira: </b> <strong>PW1</strong> <br /><br />
            <b class="mr-3">Pontos:  </b> <strong>50</strong><br /><br />
            <b class="mr-4">Nível: </b> <strong>5</strong><br /><br />
            <b class="mr-4">Tipo: </b> <strong>Quiz</strong><br />
          </div>
        </b-col>
      </b-row>

      <b-row>
        <div>
          <h1>
<br><br><br><br><br>
          </h1>
        </div>
      </b-row>

      <b-row>
        <b-col cols="3">
          
        <b-button size="lg" class="mb-2" style="background-color:#70FFB4; color: #0B132B; ">
         <b-icon icon="hand-thumbs-up" ></b-icon>
        </b-button>
          <h6 style="color: #FF7070">Gostos: 10</h6>
        </b-col>
        <b-col cols="6"></b-col>
        <b-col cols="3">
          <router-link class="mr-3" :to="{ name: 'ActivityClassification' }"><b-button pill style="background-color: #70FFB4; color: #0B132B; font-weight: bold;">Classificação</b-button></router-link>
          <router-link :to="{ name: 'ActivitySolve' }"><b-button pill style="background-color: #70FFB4; color: #0B132B; font-weight: bold;">Resolver</b-button></router-link>
          
        </b-col>
      </b-row>
    </b-container>

    <br /><br />
    
  </div>
</template>

<script>
export default {
  name: "Activity"
};
</script>

<style>
</style>
