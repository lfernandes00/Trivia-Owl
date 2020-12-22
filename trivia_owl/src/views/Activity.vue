<template>
  <div id="activity">
    <router-link :to="{ name: 'ActivityClassification' }"
      >Classificação</router-link
    ><br /><br />
    <router-link :to="{ name: 'ActivitySolve' }">Inscrever</router-link>
  </div>
</template>

<script>
export default {
  name: "Activity"
};
</script>

<style></style>
