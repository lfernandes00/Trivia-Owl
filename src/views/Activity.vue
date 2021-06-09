<template>
  <div id="activity">
    <b-container fluid>
      <b-row class="mt-5">
        <b-col cols="3">
          <div>
            <b-img
              class="ml-4"
              alt=""
              :src="activity.photo"
              style="width: 330px; height: 300px;display:flex; justify-content: start"
            ></b-img>
          </div>
        </b-col>
        <!-- Informações sobre a atividade aberta -->
        <b-col>
          <div style="text-align: start" class="mt-3">
            <b class="mr-4">Nome: </b>
            <strong>{{ activity.name }}</strong> <br /><br />
            <b class="mr-4">Curso: </b>
            <strong>{{ activity.course }}</strong> <br /><br />
            <b class="mr-2">Cadeira: </b>
            <strong>{{ activity.subject }}</strong> <br /><br />
            <b class="mr-3">Pontos: </b>
            <strong>{{ activity.points }}</strong
            ><br /><br />
            <b class="mr-4">Tipo: </b>
            <strong>{{ activity.type }}</strong
            ><br />
          </div>
        </b-col>
      </b-row>

      <b-row>
        <div>
          <h4 id="desc" class="mt-3 ml-5 mr-5">{{activity.desc}}</h4>
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
          <b>Gostos: </b> <strong>{{activity.Likes.length}}</strong>
        </b-col>
        <b-col cols="6"></b-col>
        <b-col cols="3"><br>
          <!-- Botões que ao serem clicados enviam os utilizadores para a página de classificação ou para as diferentes questões da atividade -->
          <router-link class="mr-3" rel="preconnect" :to="{ name: 'ActivityClassification' , params: {activityId: $route.params.activityId}}"
            ><b-button
              pill
              style="background-color: #70FFB4; color: #0B132B; font-weight: bold;"
              >Classificação</b-button
            ></router-link
          >
          <router-link
            rel="preconnect"
            :to="{
              name: 'ActivitySolve',
              params: {
                activityId: $route.params.activityId,
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

class Like {
  constructor(activityId, userId) {
    this.activityId = activityId;
    this.userId = userId
  }
}

export default {
  name: "Activity",
  data() {
    return {
      user: '',
      activity: '',
      disabled: false
    };
  },
  created() {
    this.getActivity()
    this.user = this.$store.getters.getLoggedUser;

    
    console.log(this.activity.Scores)
    console.log(this.user.id)

  },
  methods: {
    likeActivity() {
      const newLike = new Like(this.activity.id, this.user.id)

      let place = 0;

      if (this.activity.Likes.length == 0) {
        this.$store.dispatch('addLike', newLike)
        this.getActivity()
      }

      for (const like of this.activity.Likes) {
        if (like.id === this.user.id) {
          place = 1;
          break;
        }
      }

      if (place == 1) {
        this.$store.dispatch('removeLike', newLike)
        this.getActivity()
      }
      if (place == 0) {
        this.$store.dispatch('addLike', newLike)
        this.getActivity()
      }
             
    },
    async getActivity() {
      try {
        await this.$store.dispatch("getOneActivity", this.$route.params.activityId);
        this.activity = this.$store.getters.getActivityById;
        this.enable();
      } catch (error) {
        // console.log(error);
        this.message =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    },
    enable() {
      for (let score of this.activity.Scores) {
        
        if (score.id === this.user.id) {
          // console.log(score.id , this.user.id, 'igual');
          this.disabled = true;
          break;
        } else {
          // console.log(score.id , this.user.id, 'diferente');
          this.disabled = false;
        }
      }
    }
  }, 
  mounted() {
    
  }
};
</script>

<style scoped>
/* Estilização das bordas da imagem da atividade */
img{border-radius:10%}b{color:#ff7070}strong{color:#fff}h4{color:#93dbcb}#solveBtn{background-color:#70ffb4;color:#0b132b;font-weight:700}#desc{text-align:left}
</style>
