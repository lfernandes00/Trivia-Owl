<template>
  <div id="editActivity">
    <b-container fluid>
      <b-row>
        <b-col cols="6">
          <b-form @submit.prevent='editActivity'>
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

        <b-form-group id="input-group-6" label="Foto" label-for="input-6">
          <b-form-input id="input-6" v-model="activity.photo" type="url" ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-7" label="Pergunta 1" label-for="input-7">
          <b-form-input id="input-8" v-model="activity.question1.enunciated" type="text" ></b-form-input>
          <b-form-input id="input-9" v-model="activity.question1.firstAnswer" type="text" ></b-form-input>
          <b-form-input id="input-10" v-model="activity.question1.secondAnswer" type="text" ></b-form-input>
          <b-form-input id="input-11" v-model="activity.question1.thirdAnswer" type="text" ></b-form-input>
          <b-form-input id="input-12" v-model="activity.question1.fourthAnswer" type="text" ></b-form-input>
          <b-form-input id="input-13" v-model="activity.question1.correctAnswer" type="text" ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-8" label="Pergunta 2" label-for="input-8">
          <b-form-input id="input-8" v-model="activity.question2.enunciated" type="text" ></b-form-input>
          <b-form-input id="input-9" v-model="activity.question2.firstAnswer" type="text" ></b-form-input>
          <b-form-input id="input-10" v-model="activity.question2.secondAnswer" type="text" ></b-form-input>
          <b-form-input id="input-11" v-model="activity.question2.thirdAnswer" type="text" ></b-form-input>
          <b-form-input id="input-12" v-model="activity.question2.fourthAnswer" type="text" ></b-form-input>
          <b-form-input id="input-13" v-model="activity.question2.correctAnswer" type="text" ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-9" label="Pergunta 3" label-for="input-9">
          <b-form-input id="input-8" v-model="activity.question3.enunciated" type="text" ></b-form-input>
          <b-form-input id="input-9" v-model="activity.question3.firstAnswer" type="text" ></b-form-input>
          <b-form-input id="input-10" v-model="activity.question3.secondAnswer" type="text" ></b-form-input>
          <b-form-input id="input-11" v-model="activity.question3.thirdAnswer" type="text" ></b-form-input>
          <b-form-input id="input-12" v-model="activity.question3.fourthAnswer" type="text" ></b-form-input>
          <b-form-input id="input-13" v-model="activity.question3.correctAnswer" type="text" ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-10" label="Pergunta 4" label-for="input-10">
          <b-form-input id="input-8" v-model="activity.question4.enunciated" type="text" ></b-form-input>
          <b-form-input id="input-9" v-model="activity.question4.firstAnswer" type="text" ></b-form-input>
          <b-form-input id="input-10" v-model="activity.question4.secondAnswer" type="text" ></b-form-input>
          <b-form-input id="input-11" v-model="activity.question4.thirdAnswer" type="text" ></b-form-input>
          <b-form-input id="input-12" v-model="activity.question4.fourthAnswer" type="text" ></b-form-input>
          <b-form-input id="input-13" v-model="activity.question4.correctAnswer" type="text" ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-11" label="Pergunta 5" label-for="input-11">
          <b-form-input id="input-8" v-model="activity.question5.enunciated" type="text" ></b-form-input>
          <b-form-input id="input-9" v-model="activity.question5.firstAnswer" type="text" ></b-form-input>
          <b-form-input id="input-10" v-model="activity.question5.secondAnswer" type="text" ></b-form-input>
          <b-form-input id="input-11" v-model="activity.question5.thirdAnswer" type="text" ></b-form-input>
          <b-form-input id="input-12" v-model="activity.question5.fourthAnswer" type="text" ></b-form-input>
          <b-form-input id="input-13" v-model="activity.question5.correctAnswer" type="text" ></b-form-input>
        </b-form-group>

        <b-button id="submitBtn" pill type="submit">Alterar</b-button>
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
  name: "EditActivity",
  data() {
    return {
      activity: {
        id: '',
        name: '',
        course: '',
        subject: '',
        points: '',
        level: '',
        type: '',
        photo: '',
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
        }
      },
      select: {
        question: ''
      },
      activities: []
    }
  },
  created() {
    this.activities = this.$store.getters.getActivities;
    this.activity.id = this.$route.params.activityId;

    const currentActivity = this.activities.find(activity => activity.id === this.activity.id)

    this.activity.name = currentActivity.name;
    this.activity.course = currentActivity.course;
    this.activity.subject = currentActivity.subject;
    this.activity.points = currentActivity.points;
    this.activity.level = currentActivity.level;
    this.activity.photo = currentActivity.photo;

    const info1 = currentActivity.question1.split(';')
    const info2 = currentActivity.question2.split(';')
    const info3 = currentActivity.question3.split(';')
    const info4 = currentActivity.question4.split(';')
    const info5 = currentActivity.question5.split(';')

      this.activity.question1.enunciated = info1[0];
      this.activity.question1.firstAnswer = info1[1];
      this.activity.question1.secondAnswer = info1[2];
      this.activity.question1.thirdAnswer = info1[3];
      this.activity.question1.fourthAnswer = info1[4];
      this.activity.question1.correctAnswer = info1[5];

      this.activity.question2.enunciated = info2[0];
      this.activity.question2.firstAnswer = info2[1];
      this.activity.question2.secondAnswer = info2[2];
      this.activity.question2.thirdAnswer = info2[3];
      this.activity.question2.fourthAnswer = info2[4];
      this.activity.question2.correctAnswer = info2[5];

      this.activity.question3.enunciated = info3[0];
      this.activity.question3.firstAnswer = info3[1];
      this.activity.question3.secondAnswer = info3[2];
      this.activity.question3.thirdAnswer = info3[3];
      this.activity.question3.fourthAnswer = info3[4];
      this.activity.question3.correctAnswer = info3[5];

      this.activity.question4.enunciated = info4[0];
      this.activity.question4.firstAnswer = info4[1];
      this.activity.question4.secondAnswer = info4[2];
      this.activity.question4.thirdAnswer = info4[3];
      this.activity.question4.fourthAnswer = info4[4];
      this.activity.question4.correctAnswer = info4[5];

      this.activity.question5.enunciated = info5[0];
      this.activity.question5.firstAnswer = info5[1];
      this.activity.question5.secondAnswer = info5[2];
      this.activity.question5.thirdAnswer = info5[3];
      this.activity.question5.fourthAnswer = info5[4];
      this.activity.question5.correctAnswer = info5[5];
    },
    methods: {
      editActivity() {
        let question1 = this.activity.question1.enunciated + ';' + this.activity.question1.firstAnswer + ';' + this.activity.question1.secondAnswer + ';' + this.activity.question1.thirdAnswer + ';' + this.activity.question1.fourthAnswer + ';' + this.activity.question1.correctAnswer
        let question2 = this.activity.question2.enunciated + ';' + this.activity.question2.firstAnswer + ';' + this.activity.question2.secondAnswer + ';' + this.activity.question2.thirdAnswer + ';' + this.activity.question2.fourthAnswer + ';' + this.activity.question2.correctAnswer
        let question3 = this.activity.question3.enunciated + ';' + this.activity.question3.firstAnswer + ';' + this.activity.question3.secondAnswer + ';' + this.activity.question3.thirdAnswer + ';' + this.activity.question3.fourthAnswer + ';' + this.activity.question3.correctAnswer
        let question4 = this.activity.question4.enunciated + ';' + this.activity.question4.firstAnswer + ';' + this.activity.question4.secondAnswer + ';' + this.activity.question4.thirdAnswer + ';' + this.activity.question4.fourthAnswer + ';' + this.activity.question4.correctAnswer
        let question5 = this.activity.question5.enunciated + ';' + this.activity.question5.firstAnswer + ';' + this.activity.question5.secondAnswer + ';' + this.activity.question5.thirdAnswer + ';' + this.activity.question5.fourthAnswer + ';' + this.activity.question5.correctAnswer

        this.$store.dispatch("editActivity", {
          id: this.activity.id,
          name: this.activity.name,
          course: this.activity.course,
          subject: this.activity.subject,
          points: this.activity.points,
          level: this.activity.level,
          type: 'Quizz',
          photo: this.activity.photo,
          question1: question1,
          question2: question2,
          question3: question3,
          question4: question4,
          question5: question5
        });
      }
    }
};
</script>

<style scoped>
#activityImg{border-radius:10%}
</style>
