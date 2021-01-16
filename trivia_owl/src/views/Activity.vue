<template>
  <div id="activity">
    <b-container fluid>
      <b-row class="mt-5">
        <b-col cols="3">
          <div>
            <b-img
              class="ml-4"
              :src="$route.params.activityPhoto"
              style="width: 330px; height: 300px;display:flex; justify-content: start"
            ></b-img>
          </div>
        </b-col>
        <!-- Informações sobre a atividade aberta -->
        <b-col>
          <div style="text-align: start" class="mt-3">
            <b class="mr-4">Nome: </b>
            <strong>{{ $route.params.activityName }}</strong> <br /><br />
            <b class="mr-4">Curso: </b>
            <strong>{{ $route.params.activityCourse }}</strong> <br /><br />
            <b class="mr-2">Cadeira: </b>
            <strong>{{ $route.params.activitySubject }}</strong> <br /><br />
            <b class="mr-3">Pontos: </b>
            <strong>{{ $route.params.activityPoints }}</strong
            ><br /><br />
            <b class="mr-4">Nível: </b>
            <strong>{{ $route.params.activityLevel }}</strong
            ><br /><br />
            <b class="mr-4">Tipo: </b>
            <strong>{{ $route.params.activityType }}</strong
            ><br />
          </div>
        </b-col>
      </b-row>

      <b-row>
        <div>
          <h1><br /><br /><br /><br /><br /></h1>
        </div>
      </b-row>

      <b-row>
        <b-col cols="3">
          <b-button
            size="lg"
            class="mb-2"
            style="background-color:#70FFB4; color: #0B132B; "
          >
            <b-icon icon="hand-thumbs-up"></b-icon> </b-button
          ><br />
          <b>Gostos: </b> <strong>{{ $route.params.activityLikes }}</strong>
        </b-col>
        <b-col cols="6"></b-col>
        <b-col cols="3">
          <!-- Botões que ao serem clicados enviam os utilizadores para a página de classificação ou para as diferentes questões da atividade -->
          <router-link class="mr-3" :to="{ name: 'ActivityClassification' , params: {activityId: $route.params.activityId}}"
            ><b-button
              pill
              style="background-color: #70FFB4; color: #0B132B; font-weight: bold;"
              >Classificação</b-button
            ></router-link
          >
          <router-link
            :to="{
              name: 'ActivitySolve',
              params: {
                activityId: $route.params.activityId,
                activityPhoto: $route.params.activityPhoto,
                activityName: $route.params.activityName,
                activityQuestion1: $route.params.activityQuestion1
              }
            }"
            ><b-button
              pill
              style="background-color: #70FFB4; color: #0B132B; font-weight: bold;"
              >Resolver</b-button
            ></router-link
          >
        </b-col>
      </b-row>
    </b-container>

    <br /><br />
  </div>
</template>

<script>
export default {
  name: "Activity",
  data() {
    return {
      activities: []
    };
  },
  created() {
    this.activities = this.$store.getters.getActivities;
  },
  methods: {
    // giveLike(id) {
    //   this.activities.map(
    //             activity => {
    //                 if (activity.id === id) {
    //                     activity.likes += 1;
    //                 }
    //             }
    //         )
    // }
  }
};
</script>

<style scoped>
/* Estilização das bordas da imagem da atividade */
img {
  border-radius: 10%;
}
/* Estilização dos diferentes textos da informação */
b {
  color: #ff7070;
}

strong {
  color: white;
}
</style>
