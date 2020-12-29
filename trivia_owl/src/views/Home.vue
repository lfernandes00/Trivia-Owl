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
          style="text-shadow: 1px 1px 2px #333"
        >
          <!-- Text slides with image -->
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=52">
            <h1>TÍTULO DA NOTÍCIA</h1>
          </b-carousel-slide>

          <!-- Slides with custom text -->
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
          </b-carousel-slide>

          <!-- Slides with image only -->
          <b-carousel-slide
            img-src="https://picsum.photos/1024/480/?image=58"
          ></b-carousel-slide>
        </b-carousel>
      </div>
      <b-row class="mt-5">
        <b-col>
          <h4 id="title">Utilizadores</h4>
          <div>
            <b-table
              id="userTable"
              class="text-left"
              :items="users"
              :fields="fields1"
              :borderless="borderless"
            ></b-table>
          </div>
        </b-col>
        <b-col>
          <h4>Atividades</h4>
          <div>
            <b-table
              id="activitiesTable"
              class="text-left"
              :items="activities"
              :fields="fields2"
              :borderless="borderless"
            ></b-table>
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
      fields1: [
        {
          key: "nome",
          tdClass: () => {
            return "text-info";
          }
        },
        {
          key: "pontos"
        },
        {
          key: "nível"
        }
      ],
      users: [
        { nome: "João Félix", pontos: 5000, nível: 10 },
        { nome: "Paula Santos", pontos: 4500, nível: 9 },
        { nome: "Raquel Soares", pontos: 4120, nível: 7 }
      ],
      fields2: [
        {
          key: "p"
        },
        {
          key: "nome",
          tdClass: () => {
            return "text-info";
          }
        },
        {
          key: "curso"
        },
        {
          key: "gostos"
        }
      ],
      activities: [
        { p: 1, nome: "Atividade 1", curso: "TSIW", gostos: 10 },
        { p: 2, nome: "Atividade 2", curso: "Fotografia", gostos: 6 },
        { p: 3, nome: "Atividade 3", curso: "Multimédia", gostos: 2 }
      ],
      borderless: true
    };
  }
};
</script>

<style scoped>
h4, .h4 {
  color: #ff7070;
}

#userTable {
  color: white;
}

 th {
  color: #ff7070;
}

#activitiesTable {
  color: white;
}
</style>
