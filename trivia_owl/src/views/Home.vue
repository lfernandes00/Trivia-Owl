<template>
  <div id="home">
    <b-container>
      <div>
    <b-carousel
      id="carousel-1"
      class="mt-5"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

    </b-carousel>

    <p class="mt-4">
      Titulo da noticia
    </p>
  </div>
  <b-row>
    <b-col>
      <h4>Utilizadores</h4>
      <div>
        <b-table id="userTable" :items="users" :fields='fields1'></b-table>
      </div>
    </b-col>
    <b-col>
      <h4>Atividades</h4>
      <div>
        <b-table id="activitiesTable" :items="activities" :fields='fields2'></b-table>
      </div>
      
    </b-col>
  </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      fields1: ['nome', 'pontos', 'nível'],
      users: [
          { nome: 'João Félix', pontos: 5000, nível: 10},
          { nome: 'Paula Santos', pontos: 4500, nível: 9},
          { nome: 'Raquel Soares', pontos: 4120, nível: 7}
        ],
        fields2: ['nome', 'curso', 'gostos'],
      activities: [
          { nome: 'Atividade 1', curso: 'TSIW', gostos: 10 },
          { nome: 'Atividade 2', curso: 'Fotografia', gostos: 6 },
          { nome: 'Atividade 3', curso: 'Multimédia', gostos: 2 }
        ]
    }
  }
};
</script>

<style>
h4 {
  color: #FF7070;
}

#userTable {
  color: white;
}

table th {
  color:#FF7070;
}

#activitiesTable {
  color: white;
}
</style>