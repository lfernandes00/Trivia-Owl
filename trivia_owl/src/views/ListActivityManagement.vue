<!-- <router-link :to="{ name: 'EditActivity' }">Atividade 1</router-link> -->
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
        <router-link :to="{ name: 'ListActivityProposals' }"
          ><b-button pill id="addBtn" class="btn btn-primary mt-4"
            >+</b-button
          ></router-link
        >
      </div>
      <br />
      <b-card-group>
        <ActivityManagementCard
          v-for="activity in getFilteredActivities"
          :key="activity.id"
          :activity="activity"
        ></ActivityManagementCard>
      </b-card-group>
    </b-container>
  </div>
</template>

<script>
import ActivityManagementCard from "@/components/ActivityManagementCard.vue";
export default {
  name: "ListActivities",
  components: {
    ActivityManagementCard
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
#addBtn {
  width: 100px;
  height: 50px;
  background-color: #ff7070;
}

#sortBtn {
  height: 50px;
  background-color: #70ffb4;
  color: #0b132b;
}

#btnDiv {
  display: flex;
  justify-content: space-between;
}

img {
  border-radius: 10%;
}

select {
  background-color: #70ffb4;
  height: 50px;
  border-radius: 7%;
  color: #0b132b;
}
</style>

