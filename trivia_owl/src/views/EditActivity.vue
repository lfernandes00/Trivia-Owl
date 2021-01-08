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
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: ''
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
  }
};
</script>

<style scoped>
#activityImg {
  border-radius: 10%;
}
</style>
