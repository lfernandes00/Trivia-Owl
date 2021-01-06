<template>
  <div id="activitySolve">
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

        <b-col>
          <div style="text-align: start" class="mt-3">
            <h1 style="color: #FF7070">{{ $route.params.activityName }}</h1>
            <br />

            <h3></h3>
          </div>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <div class="ml-5">
          <b-form id="activityForm" @submit.prevent="submit">
            <b-form-group id="firstQuestion">
              <h2 style="color: #FF7070">Pergunta 1</h2>
              <br />
              <label id="enunciatedQ1" for="question1">{{
                questions.question1.enunciated
              }}</label
              ><br /><br />
              <b-form-radio size="lg" value="Q1A1" v-model="answers.A1">{{
                questions.question1.firstOption
              }}</b-form-radio
              ><br />
              <b-form-radio size="lg" value="Q1A2" v-model="answers.A1">{{
                questions.question1.secondOption
              }}</b-form-radio
              ><br />
              <b-form-radio size="lg" value="Q1A3" v-model="answers.A1">{{
                questions.question1.thirdOption
              }}</b-form-radio
              ><br />
              <b-form-radio size="lg" value="Q1A4" v-model="answers.A1">{{
                questions.question1.fourthOption
              }}</b-form-radio>
            </b-form-group>

            <b-form-group id="secondQuestion">
              <h2 style="color: #FF7070">Pergunta 2</h2>
              <br />
              <label id="enunciatedQ2" for="question2">{{
                questions.question2.enunciated
              }}</label
              ><br /><br />
              <b-form-radio size="lg" value="Q2A1" v-model="answers.A2">{{
                questions.question2.firstOption
              }}</b-form-radio
              ><br />
              <b-form-radio size="lg" value="Q2A2" v-model="answers.A2">{{
                questions.question2.secondOption
              }}</b-form-radio
              ><br />
              <b-form-radio size="lg" value="Q2A3" v-model="answers.A2">{{
                questions.question2.thirdOption
              }}</b-form-radio
              ><br />
              <b-form-radio size="lg" value="Q2A4" v-model="answers.A2">{{
                questions.question2.fourthOption
              }}</b-form-radio>
            </b-form-group>

            <b-form-group id="thirdQuestion">
              <h2 style="color: #FF7070">Pergunta 3</h2>
              <br />
              <label id="enunciatedQ3" for="question3">{{
                questions.question3.enunciated
              }}</label
              ><br /><br />
              <b-form-radio size="lg" value="Q3A1" v-model="answers.A3">{{
                questions.question3.firstOption
              }}</b-form-radio
              ><br />
              <b-form-radio size="lg" value="Q3A2" v-model="answers.A3">{{
                questions.question3.secondOption
              }}</b-form-radio
              ><br />
              <b-form-radio size="lg" value="Q3A3" v-model="answers.A3">{{
                questions.question3.thirdOption
              }}</b-form-radio
              ><br />
              <b-form-radio size="lg" value="Q3A4" v-model="answers.A3">{{
                questions.question3.fourthOption
              }}</b-form-radio>
            </b-form-group>

            <b-form-group id="fourthQuestion">
              <h2 style="color: #FF7070">Pergunta 4</h2>
              <br />
              <label id="enunciatedQ4" for="question4">{{
                questions.question4.enunciated
              }}</label
              ><br /><br />
              <b-form-radio size="lg" value="Q4A1" v-model="answers.A4">{{
                questions.question4.firstOption
              }}</b-form-radio
              ><br />
              <b-form-radio size="lg" value="Q4A2" v-model="answers.A4">{{
                questions.question4.secondOption
              }}</b-form-radio
              ><br />
              <b-form-radio size="lg" value="Q4A3" v-model="answers.A4">{{
                questions.question4.thirdOption
              }}</b-form-radio
              ><br />
              <b-form-radio size="lg" value="Q4A4" v-model="answers.A4">{{
                questions.question4.fourthOption
              }}</b-form-radio>
            </b-form-group>

            <b-form-group id="fifthQuestion">
              <h2 style="color: #FF7070">Pergunta 5</h2>
              <br />
              <label id="enunciatedQ5" for="question5">{{
                questions.question5.enunciated
              }}</label
              ><br /><br />
              <b-form-radio size="lg" value="Q5A1" v-model="answers.A5">{{
                questions.question5.firstOption
              }}</b-form-radio
              ><br />
              <b-form-radio size="lg" value="Q5A2" v-model="answers.A5">{{
                questions.question5.secondOption
              }}</b-form-radio
              ><br />
              <b-form-radio size="lg" value="Q5A3" v-model="answers.A5">{{
                questions.question5.thirdOption
              }}</b-form-radio
              ><br />
              <b-form-radio size="lg" value="Q5A4" v-model="answers.A5">{{
                questions.question5.fourthOption
              }}</b-form-radio>
            </b-form-group>

            <b-button pill id="submitBtn" type="submit">Submeter</b-button>
          </b-form>
        </div>
      </b-row>

      <b-row>
        <b-col> </b-col>
      </b-row>
    </b-container>

    <br /><br />
  </div>
</template>

<script>
export default {
  name: "ActivitySolve",
  data() {
    return {
      activities: [],
      id: "",
      loggedUser: '',
      Q1: "",
      Q2: "",
      Q3: "",
      Q4: "",
      Q5: "",
      answers: {
        A1: "",
        A2: "",
        A3: "",
        A4: "",
        A5: ""
      },
      questions: {
        question1: {
          enunciated: "",
          firstOption: "",
          secondOption: "",
          thirdOption: "",
          fourthOption: "",
          correctOption: ""
        },
        question2: {
          enunciated: "",
          firstOption: "",
          secondOption: "",
          thirdOption: "",
          fourthOption: "",
          correctOption: ""
        },
        question3: {
          enunciated: "",
          firstOption: "",
          secondOption: "",
          thirdOption: "",
          fourthOption: "",
          correctOption: ""
        },
        question4: {
          enunciated: "",
          firstOption: "",
          secondOption: "",
          thirdOption: "",
          fourthOption: "",
          correctOption: ""
        },
        question5: {
          enunciated: "",
          firstOption: "",
          secondOption: "",
          thirdOption: "",
          fourthOption: "",
          correctOption: ""
        }
      }
    };
  },
  created() {
    this.activities = this.$store.getters.getActivities;
    this.id = this.$route.params.activityId;
    this.loggedUser = this.$store.getters.getLoggedUser;

    const activity = this.activities.find(activity => activity.id === this.id);

    // pergunta 1
    this.Q1 = activity.question1;

    const Question1 = this.Q1.split(";");

    this.questions.question1.enunciated = Question1[0];
    this.questions.question1.firstOption = Question1[1];
    this.questions.question1.secondOption = Question1[2];
    this.questions.question1.thirdOption = Question1[3];
    this.questions.question1.fourthOption = Question1[4];
    this.questions.question1.correctOption = Question1[5];

    // pergunta 2
    this.Q2 = activity.question2;

    const Question2 = this.Q2.split(";");

    this.questions.question2.enunciated = Question2[0];
    this.questions.question2.firstOption = Question2[1];
    this.questions.question2.secondOption = Question2[2];
    this.questions.question2.thirdOption = Question2[3];
    this.questions.question2.fourthOption = Question2[4];
    this.questions.question2.correctOption = Question2[5];

    // pergunta 3
    this.Q3 = activity.question3;

    const Question3 = this.Q3.split(";");

    this.questions.question3.enunciated = Question3[0];
    this.questions.question3.firstOption = Question3[1];
    this.questions.question3.secondOption = Question3[2];
    this.questions.question3.thirdOption = Question3[3];
    this.questions.question3.fourthOption = Question3[4];
    this.questions.question3.correctOption = Question3[5];

    // pergunta 4
    this.Q4 = activity.question4;

    const Question4 = this.Q4.split(";");

    this.questions.question4.enunciated = Question4[0];
    this.questions.question4.firstOption = Question4[1];
    this.questions.question4.secondOption = Question4[2];
    this.questions.question4.thirdOption = Question4[3];
    this.questions.question4.fourthOption = Question4[4];
    this.questions.question4.correctOption = Question4[5];

    // pergunta 5
    this.Q5 = activity.question5;

    const Question5 = this.Q5.split(";");

    this.questions.question5.enunciated = Question5[0];
    this.questions.question5.firstOption = Question5[1];
    this.questions.question5.secondOption = Question5[2];
    this.questions.question5.thirdOption = Question5[3];
    this.questions.question5.fourthOption = Question5[4];
    this.questions.question5.correctOption = Question5[5];
  },
  methods: {
    submit() {
      let score = 0;
      if (this.answers.A1 === this.questions.question1.correctOption) {
        score += 2;
      }
      if (this.answers.A2 === this.questions.question2.correctOption) {
        score += 2;
      }
      if (this.answers.A3 === this.questions.question3.correctOption) {
        score += 2;
      }
      if (this.answers.A4 === this.questions.question4.correctOption) {
        score += 2;
      }
      if (this.answers.A5 === this.questions.question5.correctOption) {
        score += 2;
      }
      alert(`O seu resultado final é ${score}`);
    }
  }
};
</script>

<style scoped>
img {
  border-radius: 10%;
}

#firstQuestion {
  color: white;
  text-align: left;
}

#firstQuestion #enunciatedQ1 {
  color: #70ffb4;
  font-size: 25px;
}

#secondQuestion {
  color: white;
  text-align: left;
}

#secondQuestion #enunciatedQ2 {
  color: #70ffb4;
  font-size: 25px;
}

#thirdQuestion {
  color: white;
  text-align: left;
}

#thirdQuestion #enunciatedQ3 {
  color: #70ffb4;
  font-size: 25px;
}

#fourthQuestion {
  color: white;
  text-align: left;
}

#fourthQuestion #enunciatedQ4 {
  color: #70ffb4;
  font-size: 25px;
}

#fifthQuestion {
  color: white;
  text-align: left;
}

#fifthQuestion #enunciatedQ5 {
  color: #70ffb4;
  font-size: 25px;
}

#submitBtn {
  height: 50px;
  background-color: #70ffb4;
  color: #0b132b;
  float: right;
  font-weight: bold;
}
</style>
