<template>
  <div id="activitySolve">
    <b-container fluid>
      <b-row class="mt-5">
        <b-col cols="3">
          <div>
            <b-img class="ml-4" :src="$route.params.activityPhoto" style="width: 330px; height: 300px;display:flex; justify-content: start"></b-img>
          </div>
        </b-col>

        <b-col>
          <div style="text-align: start" class="mt-3">
            <h1 style="color: #FF7070">{{$route.params.activityName}}</h1><br>
            
            <h3></h3>
          </div>
        </b-col>
      </b-row>
<br>
      <b-row>
        <div class="ml-5">
          
          <b-from id="frm">
            <b-form-group id="firstQuestion">
              <h2 style="color: #FF7070">Pergunta 1</h2><br>
              <label id="enunciated" for="question1">{{questions.question1.enunciated}}</label><br><br>
              <b-form-radio size="lg" value="Q1A1" v-model="A1">{{questions.question1.firstOption}}</b-form-radio><br>
              <b-form-radio size="lg" value="Q1A2" v-model="A1">{{questions.question1.secondOption}}</b-form-radio><br>
              <b-form-radio size="lg" value="Q1A3" v-model="A1">{{questions.question1.thirdOption}}</b-form-radio><br>
              <b-form-radio size="lg" value="Q1A4" v-model="A1">{{questions.question1.fourthOption}}</b-form-radio>
            </b-form-group>
            
          </b-from>
        </div>
      </b-row>

      <b-row>
        <b-col>
          
        </b-col>
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
      id: '',
      Q1: '',
      A1: '',
      questions: {
        question1: {
          enunciated: '',
          firstOption: '',
          secondOption: '',
          thirdOption: '',
          fourthOption: ''
        }
      },
    }
  },
  created() {
    this.activities = this.$store.getters.getActivities
    this.id = this.$route.params.activityId

    const activity1 = this.activities.find(activity => activity.id === this.id)

    this.Q1 = activity1.question1;
    
    const question1 = this.Q1.split(';')

    this.questions.question1.enunciated = question1[0];
    this.questions.question1.firstOption = question1[1];
    this.questions.question1.secondOption = question1[2];
    this.questions.question1.thirdOption = question1[3];
    this.questions.question1.fourthOption = question1[4];
  }

};
</script>

<style scoped>
img {
  border-radius: 10%;
}

#firstQuestion{
  color: white;
  text-align: left;
}

#firstQuestion #enunciated {
  color: #70FFB4;
  font-size: 25px;
}
</style>
