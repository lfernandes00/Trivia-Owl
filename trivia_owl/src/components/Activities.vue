<template>
  <div id="activities" class="">
    <b-container fluid>
      <div id="btnDiv" class="mr-4">
        <router-link :to="{ name: 'AddActivity' }"><b-button  pill id="addBtn" class="btn btn-primary mt-4">+</b-button></router-link>
      </div>
  
      <br>
      <b-card-group>
        <router-link :to="{ name: 'Activity' }">
          <b-card
          img-src="https://picsum.photos/300/300/?image=41"
          img-alt="nome"
          img-top
          img-width="300px"
          img-height="300px"
          tag="article"
          style=" width: 330px; height: 300px; border-radius: 10%"
          class="ml-4 mb-2 mr-3 mt-3"
        >
        </b-card>
        </router-link>

        
        <router-link :to="{ name: 'Activity' }">
          <b-card
          img-src="https://picsum.photos/300/300/?image=41"
          img-alt="nome"
          img-top
          img-width="300px"
          img-height="300px"
          tag="article"
          style=" width: 330px; height: 300px; border-radius: 10%"
          class="ml-4 mb-2 mr-3 mt-3"
        >
        </b-card>
        </router-link>
        

        <router-link :to="{ name: 'Activity' }">
          <b-card
          img-src="https://picsum.photos/300/300/?image=41"
          img-alt="nome"
          img-top
          img-width="300px"
          img-height="300px"
          tag="article"
          style=" width: 330px; height: 300px; border-radius: 10%"
          class="ml-4 mb-2 mr-3 mt-3"
        >
        </b-card>
        </router-link>

        <router-link :to="{ name: 'Activity' }">
          <b-card
          img-src="https://picsum.photos/300/300/?image=41"
          img-alt="nome"
          img-top
          img-width="300px"
          img-height="300px"
          tag="article"
          style=" width: 330px; height: 300px; border-radius: 10%"
          class="ml-4 mb-2 mr-3 mt-3"
        >
        </b-card>
        </router-link> 

        <router-link :to="{ name: 'Activity' }">
          <b-card
          img-src="https://picsum.photos/300/300/?image=41"
          img-alt="nome"
          img-top
          img-width="300px"
          img-height="300px"
          border-radius='12%'
          tag="article"
          style=" width: 330px; height: 300px; border-radius: 10%"
          class="ml-4 mb-2 mr-3 mt-3"
        >
        </b-card>
        </router-link> 
        </b-card-group>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Activities"
};
</script>

<style>
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
