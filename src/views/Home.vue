<template>
  <div id="home">
    <b-container>
      <div>
        <!-- carousel com as suas diferentes características, tamanhos e intervalo de tempo entre imagens -->
        <b-carousel
          id="carousel-1"
          class="mt-5"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333"
        >
          <!-- Text slides with image -->
          <b-carousel-slide alt="" img-src="https://picsum.photos/1024/480/?image=52" rel="preload">
            <h1>TÍTULO DA NOTÍCIA</h1>
          </b-carousel-slide>

          <!-- Slides with custom text -->
          <b-carousel-slide alt="" img-src="https://picsum.photos/1024/480/?image=54" rel="preload">
          </b-carousel-slide>
        </b-carousel>
      </div>
      <b-row class="mt-5">
        <!-- Criação de 2 tabelas, ambas borderless, uma para os utilizadores e outra para as atividades -->
        <b-col>
          <h4 id="title">Utilizadores</h4>
          <div v-if="users.length >= 3">
          <table id="usersTable" class="table table-borderless">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Nome</th>
              <th scope="col">Pontos</th>
              <th scope="col">Nível</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td id="nameTd">{{users[0].name}}</td>
              <td>{{users[0].points}}</td>
              <td>{{users[0].level}}</td>
            </tr>

            <tr>
              <td>2</td>
              <td id="nameTd">{{users[1].name}}</td>
              <td>{{users[1].points}}</td>
              <td>{{users[1].level}}</td>
            </tr>

            <tr>
              <td>3</td>
              <td id="nameTd">{{users[2].name}}</td>
              <td>{{users[2].points}}</td>
              <td>{{users[2].level}}</td>
            </tr>
          </tbody>
          </table>
          </div>
          <div v-else>
            <table id="usersTable" class="table table-borderless">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Nome</th>
              <th scope="col">Pontos</th>
              <th scope="col">Nível</th>
            </tr>
          </thead>
          <tbody :key='user.id' v-for="(user, index) in users">
            <tr>
              <td>{{index + 1}}</td>
              <td id="nameTd">{{user.name}}</td>
              <td>{{user.points}}</td>
              <td>{{user.level}}</td>
            </tr>
          </tbody>
          </table>
          </div>
        </b-col>
        <b-col>
          <h4>Atividades</h4>
          <div>
            <table id="activitiesTable" class="table table-borderless">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Nome</th>
              <th scope="col">Curso</th>
              <th scope="col">Gostos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <router-link rel="preconnect" id="firstActivity" :to="{name: 'Activity', params: {
                activityId: activities[0].id
                }}"><td id="nameTd">{{activities[0].name}}</td></router-link>
              <td>{{activities[0].course}}</td>
              <td>{{activities[0].Likes.length}}</td>
            </tr>

            <tr>
              <td>2</td>
              <router-link rel="preconnect" id="secondActivity" :to="{name: 'Activity', params: {
                activityId: activities[1].id
                }}"><td id="nameTd">{{activities[1].name}}</td></router-link>
              <td>{{activities[1].course}}</td>
              <td>{{activities[1].Likes.length}}</td>
            </tr>

            <tr>
              <td>3</td>
              <router-link rel="preconnect" id="thirdActivity" :to="{name: 'Activity', params: {
                activityId: activities[2].id
                }}"><td id="nameTd">{{activities[2].name}}</td></router-link>
              <td>{{activities[2].course}}</td>
              <td>{{activities[2].Likes.length}}</td>
            </tr>
          </tbody>
        </table>
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
      users: [],
      activities: [],
      borderless: true,
    }
  },
  created() {
    this.getUsersList();
    this.getActivitiesList();
  },
  methods: {
    async getUsersList() {
      try {
        await this.$store.dispatch("getAllUsers");
        // console.log("AdminPage - GET USERS: " + this.$store.getters.getUsers.length);
        this.users = this.$store.getters.getUsers;
        this.users.sort(this.compareUsers)
      } catch (error) {
        this.message =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    },
    async getActivitiesList() {
      try {
        await this.$store.dispatch("getAllActivities");
        this.activities = this.$store.getters.getActivities;
        this.activities.sort(this.compareActivities)
      } catch (error) {
        this.message =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    },
    compareActivities(a, b) {
            if (a.Likes.length > b.Likes.length) return 1 * -1
            if (a.Likes.length < b.Likes.length) return -1 * -1
            if (a.Likes.length === b.Likes.length) return 0
    },
    compareUsers(a, b) {
            if (a.points > b.points) return 1 * -1
            if (a.points < b.points) return -1 * -1
            if (a.points === b.points) return 0
        }
  }
};
</script>

<style scoped>
/* Estilização da tabela */
.h4,h4{color:#ff7070}#userTable{color:#fff}th{color:#ff7070}td{color:#fff}#nameTd{color:#6fffe9}#firstActivity{text-decoration:none}#secondActivity{text-decoration:none}#thirdActivity{text-decoration:none}#activitiesTable{color:#fff}#activitiesTable{text-align:start}#usersTable{text-align:start}


</style>
