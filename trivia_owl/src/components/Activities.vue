<template>
  <div id="activities" class="mt-5">
    <b-container>
<b-card-group >
    <b-card
    img-src="https://picsum.photos/300/300/?image=41"
    img-alt="nome"
    img-top
    img-width="300px"
    img-height="200px"
    tag="article"
    style="max-width: 20rem; width: 300px; height: 200px"
    class="ml-4 mb-2 mr-4">
    <b-card-text><router-link :to="{ name: 'Activity'}">Atividade 1</router-link></b-card-text>
    </b-card>


    <b-card
    img-src="https://picsum.photos/300/300/?image=41"
    img-alt="nome"
    img-top
    img-width="300px"
    img-height="200px"
    tag="article"
    style="max-width: 20rem; width: 300px; height: 200px"
    class="ml-4 mb-2 mr-4">
    <b-card-text><router-link :to="{ name: 'Activity'}">Atividade 1</router-link></b-card-text>
    </b-card>


    <b-card
    img-src="https://picsum.photos/300/300/?image=41"
    img-alt="nome"
    img-top
    img-width="300px"
    img-height="200px"
    tag="article"
    style="max-width: 20rem; width: 300px; height: 200px"
    class="ml-4 mb-2 mr-4">
    <b-card-text><router-link :to="{ name: 'Activity'}">Atividade 1</router-link></b-card-text>
    </b-card>

    <b-card
    img-src="https://picsum.photos/300/300/?image=41"
    img-alt="nome"
    img-top
    img-width="300px"
    img-height="200px"
    tag="article"
    style="max-width: 20rem; width: 300px; height: 200px"
    class="ml-4 mb-2 mr-4">
    <b-card-text><router-link :to="{ name: 'Activity'}">Atividade 1</router-link></b-card-text>
    </b-card>
    </b-card-group><br><br>
  <router-link :to="{ name: 'AddActivity'}"><button id="addBtn" class="btn btn-primary">+</button></router-link>
    </b-container>
  
  </div>
</template>

<script>
export default {
name: 'Activities',
}
</script>

<style>
#addBtn {
  width: 100px;
  height: 90px;
  background-color: #FF7070;
  color: white;
}
</style>