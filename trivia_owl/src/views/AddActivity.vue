<template>
  <div id="AddActivity">
    <b-container fluid>
      <b-row>
        <b-col cols="6">
          <b-form @submit.prevent='addProposal'>
        <b-form-group id="input-group-1" label="Nome" label-for="input-1">
          <b-form-input id="input-1" v-model="activity.name" type="text" ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Curso" label-for="input-2">
          <b-form-input id="input-2" v-model="activity.course" type="text" ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Cadeira" label-for="input-3">
          <b-form-input id="input-3" v-model="activity.subject" type="text" ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="Pontos" label-for="input-4">
          <b-form-input id="input-4" v-model="activity.points" type="number" ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-5" label="Nível" label-for="input-5">
          <b-form-input id="input-5" v-model="activity.level" type="number" ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-6" label="Foto" label-for="input-6">
          <b-form-input id="input-6" v-model="activity.photo" type="url" ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-7" label="Tipo" label-for="input-7">
          <b-form-input id="input-7" v-model="activity.type" type="text" ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-8" label="Descrição" label-for="input-8">
          <b-form-input id="input-8" v-model="activity.desc" type="text" ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-9" label="Pergunta 1" label-for="input-9">
          <b-form-input id="input-9" v-model="activity.question1.enunciated" type="text" ></b-form-input>
          <b-form-input id="input-10" v-model="activity.question1.firstAnswer" type="text" ></b-form-input>
          <b-form-input id="input-11" v-model="activity.question1.secondAnswer" type="text" ></b-form-input>
          <b-form-input id="input-12" v-model="activity.question1.thirdAnswer" type="text" ></b-form-input>
          <b-form-input id="input-13" v-model="activity.question1.fourthAnswer" type="text" ></b-form-input>
          <b-form-input id="input-14" v-model="activity.question1.correctAnswer" type="text" ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-10" label="Pergunta 2" label-for="input-10">
          <b-form-input id="input-15" v-model="activity.question2.enunciated" type="text" ></b-form-input>
          <b-form-input id="input-16" v-model="activity.question2.firstAnswer" type="text" ></b-form-input>
          <b-form-input id="input-17" v-model="activity.question2.secondAnswer" type="text" ></b-form-input>
          <b-form-input id="input-18" v-model="activity.question2.thirdAnswer" type="text" ></b-form-input>
          <b-form-input id="input-19" v-model="activity.question2.fourthAnswer" type="text" ></b-form-input>
          <b-form-input id="input-20" v-model="activity.question2.correctAnswer" type="text" ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-11" label="Pergunta 3" label-for="input-11">
          <b-form-input id="input-21" v-model="activity.question3.enunciated" type="text" ></b-form-input>
          <b-form-input id="input-22" v-model="activity.question3.firstAnswer" type="text" ></b-form-input>
          <b-form-input id="input-23" v-model="activity.question3.secondAnswer" type="text" ></b-form-input>
          <b-form-input id="input-24" v-model="activity.question3.thirdAnswer" type="text" ></b-form-input>
          <b-form-input id="input-25" v-model="activity.question3.fourthAnswer" type="text" ></b-form-input>
          <b-form-input id="input-26" v-model="activity.question3.correctAnswer" type="text" ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-12" label="Pergunta 4" label-for="input-12">
          <b-form-input id="input-27" v-model="activity.question4.enunciated" type="text" ></b-form-input>
          <b-form-input id="input-28" v-model="activity.question4.firstAnswer" type="text" ></b-form-input>
          <b-form-input id="input-29" v-model="activity.question4.secondAnswer" type="text" ></b-form-input>
          <b-form-input id="input-30" v-model="activity.question4.thirdAnswer" type="text" ></b-form-input>
          <b-form-input id="input-31" v-model="activity.question4.fourthAnswer" type="text" ></b-form-input>
          <b-form-input id="input-32" v-model="activity.question4.correctAnswer" type="text" ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-13" label="Pergunta 5" label-for="input-13">
          <b-form-input id="input-33" v-model="activity.question5.enunciated" type="text" ></b-form-input>
          <b-form-input id="input-34" v-model="activity.question5.firstAnswer" type="text" ></b-form-input>
          <b-form-input id="input-35" v-model="activity.question5.secondAnswer" type="text" ></b-form-input>
          <b-form-input id="input-36" v-model="activity.question5.thirdAnswer" type="text" ></b-form-input>
          <b-form-input id="input-37" v-model="activity.question5.fourthAnswer" type="text" ></b-form-input>
          <b-form-input id="input-38" v-model="activity.question5.correctAnswer" type="text" ></b-form-input>
        </b-form-group>

        <b-button id="submitBtn" pill type="submit">Enviar</b-button>
      </b-form>
        </b-col>
        <b-col cols="6">
          <b-img
              id="activityImg"
              class=""
              :src="activity.photo"
              style="width: 330px; height: 300px;display:flex; justify-content: start"
            ></b-img>
        </b-col>
      </b-row>
      
    </b-container>
  </div>
</template>

<script>
export default {
  name: "AddActivity",
  data() {
    return {
      activity: {
        name: 'Atividade 5',
        course: 'TSIW',
        subject: 'PW1',
        points: '100',
        level: '1',
        photo: 'https://miro.medium.com/max/900/1*OrjCKmou1jT4It5so5gvOA.jpeg',
        type: 'Quizz',
        desc: '1',
        question1: {
          enunciated: 'enunciado1',
          firstAnswer: 'resposta1',
          secondAnswer: 'resposta2',
          thirdAnswer: 'resposta3',
          fourthAnswer: 'resposta4',
          correctAnswer: 'Q1A3'
        },
        question2: {
          enunciated: 'enunciado1',
          firstAnswer: 'resposta1',
          secondAnswer: 'resposta2',
          thirdAnswer: 'resposta3',
          fourthAnswer: 'resposta4',
          correctAnswer: 'Q2A3'
        },
        question3: {
          enunciated: 'enunciado1',
          firstAnswer: 'resposta1',
          secondAnswer: 'resposta2',
          thirdAnswer: 'resposta3',
          fourthAnswer: 'resposta4',
          correctAnswer: 'Q3A1'
        },
        question4: {
          enunciated: 'enunciado1',
          firstAnswer: 'resposta1',
          secondAnswer: 'resposta2',
          thirdAnswer: 'resposta3',
          fourthAnswer: 'resposta4',
          correctAnswer: 'Q4A4'
        },
        question5: {
          enunciated: 'enunciado1',
          firstAnswer: 'resposta1',
          secondAnswer: 'resposta2',
          thirdAnswer: 'resposta3',
          fourthAnswer: 'resposta4',
          correctAnswer: 'Q5A2'
        }
      },
      proposals: []
    }
    
  },
  created() {
    this.proposals = this.$store.getters.getProposals;
  },
  methods: {
    addProposal() {
      let question1 = this.activity.question1.enunciated + ';' + this.activity.question1.firstAnswer + ';' + this.activity.question1.secondAnswer + ';' + this.activity.question1.thirdAnswer + ';' + this.activity.question1.fourthAnswer + ';' + this.activity.question1.correctAnswer
        let question2 = this.activity.question2.enunciated + ';' + this.activity.question2.firstAnswer + ';' + this.activity.question2.secondAnswer + ';' + this.activity.question2.thirdAnswer + ';' + this.activity.question2.fourthAnswer + ';' + this.activity.question2.correctAnswer
        let question3 = this.activity.question3.enunciated + ';' + this.activity.question3.firstAnswer + ';' + this.activity.question3.secondAnswer + ';' + this.activity.question3.thirdAnswer + ';' + this.activity.question3.fourthAnswer + ';' + this.activity.question3.correctAnswer
        let question4 = this.activity.question4.enunciated + ';' + this.activity.question4.firstAnswer + ';' + this.activity.question4.secondAnswer + ';' + this.activity.question4.thirdAnswer + ';' + this.activity.question4.fourthAnswer + ';' + this.activity.question4.correctAnswer
        let question5 = this.activity.question5.enunciated + ';' + this.activity.question5.firstAnswer + ';' + this.activity.question5.secondAnswer + ';' + this.activity.question5.thirdAnswer + ';' + this.activity.question5.fourthAnswer + ';' + this.activity.question5.correctAnswer

        this.$store.dispatch("addProposal", {
          id: this.getNextId(),
          name: this.activity.name,
          course: this.activity.course,
          subject: this.activity.subject,
          points: this.activity.points,
          level: this.activity.level,
          type: this.activity.type,
          photo: this.activity.photo,
          desc: this.activity.desc,
          question1: question1,
          question2: question2,
          question3: question3,
          question4: question4,
          question5: question5
        });
      },
      getNextId() {
        if (this.proposals.length === 0) {
          return 1;
        } else {
          return this.proposals[this.proposals.length - 1].id + 1;
        }
      }
  }

  
};
</script>

<style scoped>
#activityImg {
  border-radius: 10%;
}
</style>
