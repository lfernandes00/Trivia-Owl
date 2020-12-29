<template>
  <div id="ListActivities" class="">
    <b-container fluid>
      <div id="btnDiv" class="mr-4">
        <router-link :to="{ name: 'AddActivity' }"><b-button  pill id="addBtn" class="btn btn-primary mt-4">+</b-button></router-link>
      </div>
      <br>
      <b-card-group>
        <ActivityCard
        v-for="activity in activities"
        :key='activity.id'
        :activity='activity'
        ></ActivityCard>
      </b-card-group>
    </b-container>
  </div>
</template>

<script>
import ActivityCard from "@/components/ActivityCard.vue";
export default {
name: 'ListActivities',
components: {
    ActivityCard,
},
data() {
    return {
        activities: []
    }
},
created() {
    this.activities = this.$store.getters.getActivities
}
}
</script>

<style scoped>
#addBtn {
  width: 100px;
  height: 50px;
  background-color: #ff7070;
}

#btnDiv {
  display: flex;
  justify-content: flex-end;
}

img {
  border-radius: 10%;
}
</style>