<template>
  <div id="ListActivities" class="">
    <b-container fluid>
      <div id="btnDiv" class="mr-4">
        <b-button
          pill
          id="sortBtn"
          @click="sortActivitiesByLikes"
          class="btn btn-primary mt-4 ml-4"
          >{{
            flagLikes == -1 ? "Maior popularidade" : "Menor popularidade"
          }}</b-button
        >
        <select id="sltActivityCourse" v-model="filter.course" class="mt-4">
          <option value="">Escolha um curso</option>
          <option
            v-for="activity in getAllCourses"
            :key="activity"
            :value="activity"
            >{{ activity }}</option
          >
        </select>
        <select id="sltActivitySubject" v-model="filter.subject" class="mt-4">
          <option value="">Escolha uma cadeira</option>
          <option
            v-for="activity in getAllSubjects"
            :key="activity"
            :value="activity"
            >{{ activity }}</option
          >
        </select>
        <router-link :to="{ name: 'AddActivity' }"
          ><b-button pill id="addBtn" class="btn btn-primary mt-4"
            >+</b-button
          ></router-link
        >
      </div>
      <br />
      <b-card-group>
        <ActivityCard
          v-for="activity in getFilteredActivities"
          :key="activity.id"
          :activity="activity"
        ></ActivityCard>
      </b-card-group>
    </b-container>
  </div>
</template>

<script>
import ActivityCard from "@/components/ActivityCard.vue";
export default {
  name: "ListActivities",
  components: {
    ActivityCard
  },
  data() {
    return {
      activities: [],
      filter: {
        course: "",
        subject: ""
      },
      flagLikes: -1
    };
  },
  created() {
    this.activities = this.$store.getters.getActivities;
  },
  methods: {
    sortActivitiesByLikes() {
      this.flagLikes = this.flagLikes * -1;
      this.activities = this.activities.sort(this.compareActivities);
    },
    compareActivities(a, b) {
      if (a.likes > b.likes) return 1 * this.flagLikes;
      if (a.likes < b.likes) return -1 * this.flagLikes;
      if (a.likes == b.likes) return 0;
    }
  },
  computed: {
    getAllCourses() {
      const activityCourses = [];

      for (let activity of this.activities) {
        if (activityCourses.indexOf(activity.course) == -1)
          activityCourses.push(activity.course);
      }
      return activityCourses;
    },
    getAllSubjects() {
      const activitySubjects = [];

      for (let activity of this.activities) {
        if (activitySubjects.indexOf(activity.subject) == -1)
          activitySubjects.push(activity.subject);
      }
      return activitySubjects;
    },
    getFilteredActivities() {
      return this.activities.filter(activities => {
        if (
          (this.filter.course == "" ||
            this.filter.course == activities.course) &&
          (this.filter.subject == "" ||
            this.filter.subject == activities.subject)
        )
          return activities;
      });
    }
  }
};
</script>

<style scoped>
#input-group-1{color:#6fffe9;text-align:start}#input-group-2{color:#6fffe9;text-align:start}#input-group-3{color:#6fffe9;text-align:start}#input-group-4{color:#6fffe9;text-align:start}#input-group-5{color:#6fffe9;text-align:start}#input-group-6{color:#6fffe9;text-align:start}#input-group-7{color:#6fffe9;text-align:start}#avatar{float:none}#submitBtn{background-color:#70ffb4;color:#0b132b;width:100px;height:50px;float:right}
</style>
