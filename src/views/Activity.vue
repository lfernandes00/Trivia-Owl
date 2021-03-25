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
          <h4 id="desc" class="mt-3 ml-5 mr-5">{{getActivity.desc}}</h4>
        </div>
      </b-row>
<br><br><br><br><br><br><br><br>
      <b-row>
        <b-col cols="3">
          <b-button
            size="lg"
            class="mb-2"
            style="background-color:#70FFB4; color: #0B132B; "
            @click='likeActivity()'>
            <b-icon icon="hand-thumbs-up"></b-icon> </b-button
          ><br />
          <b>Gostos: </b> <strong>{{getActivity.likes.length}}</strong>
        </b-col>
        <b-col cols="6"></b-col>
        <b-col cols="3"><br>
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
                activityCourse: $route.params.activityCourse,
                activityQuestion1: $route.params.activityQuestion1
              }
            }"
            ><b-button
              pill
              id="solveBtn"
              :disabled='disabled'
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
      activities: [],
      user: '',
      activityId: '',
      disabled: false
    };
  },
  created() {
    this.activities = this.$store.getters.getActivities;
    this.user = this.$store.getters.getLoggedUser;
    this.activityId = this.$route.params.activityId;

    for (let activity of this.user.historic) {
      if (activity.id === this.activityId) {
        this.disabled = true;
      } else {
        this.disabled = false;
      }
    }

  },
  methods: {
    likeActivity() {
      const like = {
        username: this.user.username,
        activityId: this.activityId
      }
      this.$store.dispatch('likeActivity', like)
    }
  }, 
  computed: {
    getActivity() {
      return this.$store.getters.getActivityById(this.$route.params.activityId)
    }
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

h4 {
  color: #93DBCB;
}

#solveBtn {
  background-color: #70FFB4;
  color: #0B132B;
  font-weight: bold;
}

#desc {
  text-align: left;
}
</style>
