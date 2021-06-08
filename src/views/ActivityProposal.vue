<template>
  <div id="activityProposal">
    <b-container fluid>
      <b-row class="mt-5">
        <b-col cols="3">
          <div>
            <b-img
              class="ml-4"
              alt=""
              :src="photo"
              style="width: 330px; height: 300px;display:flex; justify-content: start"
            ></b-img>
          </div>
        </b-col>
        <!-- Informações sobre a atividade aberta -->
        <b-col>
          <div style="text-align: start" class="mt-3">
            <b class="mr-4">Nome: </b>
            <strong>{{ name }}</strong> <br /><br />
            <b class="mr-4">Curso: </b>
            <strong>{{ course }}</strong> <br /><br />
            <b class="mr-2">Cadeira: </b>
            <strong>{{ subject }}</strong> <br /><br />
            <b class="mr-3">Pontos: </b>
            <strong>{{ points }}</strong
            ><br /><br />
            <b class="mr-4">Nível: </b>
            <strong>{{ level }}</strong
            ><br /><br />
            <b class="mr-4">Tipo: </b>
            <strong>{{ type }}</strong
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
        <b-button pill id="aceptBtn" @click='aceptProposal()'>Aceitar</b-button>
      </b-row>
    </b-container>
  </div>
</template>

<script>



export default {
name: 'ActivityProposal',
data() {
    return {
        activities: [],
        proposals: [],
        name: '',
        course: '',
        subject: '',
        points: '',
        level: '',
        photo: '',
        type: '',
        desc: '',
        question1: {
          enunciated: '',
          firstAnswer: '',
          secondAnswer: '',
          thirdAnswer: '',
          fourthAnswer: '',
          correctAnswer: ''
        },
        question2: {
          enunciated: '',
          firstAnswer: '',
          secondAnswer: '',
          thirdAnswer: '',
          fourthAnswer: '',
          correctAnswer: ''
        },
        question3: {
          enunciated: '',
          firstAnswer: '',
          secondAnswer: '',
          thirdAnswer: '',
          fourthAnswer: '',
          correctAnswer: ''
        },
        question4: {
          enunciated: '',
          firstAnswer: '',
          secondAnswer: '',
          thirdAnswer: '',
          fourthAnswer: '',
          correctAnswer: ''
        },
        question5: {
          enunciated: '',
          firstAnswer: '',
          secondAnswer: '',
          thirdAnswer: '',
          fourthAnswer: '',
          correctAnswer: ''
        },
        Q1: '',
        Q2: '',
        Q3: '',
        Q4: '',
        Q5: ''
    }
},
created() {

    

},
methods: {
    aceptProposal() {
        try {
        this.$store.dispatch("aceptProposal", {
          id: this.$store.getters.getNextActivityId,
          name: this.name,
          course: this.course,
          subject: this.subject,
          points: this.points,
          level: this.level,
          photo: this.photo,
          type: this.type,
          desc: this.desc,
          question1: this.Q1,
          question2: this.Q2,
          question3: this.Q3,
          question4: this.Q4,
          question5: this.Q5,

        });
        console.log(this.$store.getters.getNextActivityId)
        this.$store.dispatch('removeProposal', this.id)
        this.$router.push({name:'ListActivityProposals'})
      } catch (error) {
        alert(error);
      }
    },
    
}
}
</script>

<style scoped>
img{border-radius:10%}b{color:#ff7070}#aceptBtn{background-color:#70ffb4;color:#0b132b;width:100px;float:right}strong{color:#fff}
</style>