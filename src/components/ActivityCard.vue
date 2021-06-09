<template>
  <div id="activityCard" class="">
    <b-col cols="4">
      <router-link
      rel="preload"
        :to="{
          name: 'Activity',
          params: {
            activityId: activity.id,
           
          }
        }"
      >
        <b-card
          :img-src="activity.photo"
          img-alt="activity.name"
          img-top
          img-width="300px"
          img-height="250px"
          tag="article"
          style=" width: 300px; height: 250px; border-radius: 10%"
          class="ml-3 mb-2 mr-1 mt-3"
        >
        </b-card>
      </router-link>
    </b-col>
  </div>
</template>

<script>
export default {
  name: "ActivityCard",
  props: {
    activity: Object
  }
};
</script>

<style scoped>
img {
  border-radius: 10%;
}
</style>
