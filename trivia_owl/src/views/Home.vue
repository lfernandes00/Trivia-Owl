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
      <div>
       <b-table :items="items"></b-table>
      </div>
    </b-col>
    <b-col>
      <div>
<b-table :items="item"></b-table>
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
      items: [
          { age: 40, first_name: 'João', last_name: 'Pedro' },
          { age: 21, first_name: 'Maria', last_name: 'Joaquina' },
          { age: 89, first_name: 'José', last_name: 'Silva' }
        ],
      item: [
          { age: 40, first_name: 'João', last_name: 'Pedro' },
          { age: 21, first_name: 'Maria', last_name: 'Joaquina' },
          { age: 89, first_name: 'José', last_name: 'Silva' }
        ]
    }
  }
};
</script>
