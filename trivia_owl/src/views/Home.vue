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
        <!-- Criação de 2 tabelas, ambas borderless, uma para os utilizadores e outra para as atividades -->
        <b-col>
          <h4 id="title">Utilizadores</h4>
          <div v-if="getAllUsers.length >= 3">
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
              <td id="nameTd">{{getAllUsers[0].name}}</td>
              <td>{{getAllUsers[0].points}}</td>
              <td>{{getAllUsers[0].level}}</td>
            </tr>

            <tr>
              <td>2</td>
              <td id="nameTd">{{users[1].name}}</td>
              <td>{{getAllUsers[1].points}}</td>
              <td>{{getAllUsers[1].level}}</td>
            </tr>

            <tr>
              <td>3</td>
              <td id="nameTd">{{getAllUsers[2].name}}</td>
              <td>{{getAllUsers[2].points}}</td>
              <td>{{getAllUsers[2].level}}</td>
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
          <tbody :key='user.id' v-for="(user, index) in getAllUsers">
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
              <router-link id="firstActivity" :to="{name: 'Activity', params: {
                activityId: activities[0].id,
                activityName: activities[0].name,
                activityCourse: activities[0].course,
                activitySubject: activities[0].subject,
                activityPoints: activities[0].points,
                activityLevel: activities[0].level,
                activityType: activities[0].type,
                activityPhoto: activities[0].photo,
                activityLikes: activities[0].likes.length,
                activityQuestion1: activities[0].question1
                }}"><td id="nameTd">{{activities[0].name}}</td></router-link>
              <td>{{activities[0].course}}</td>
              <td>{{activities[0].likes.length}}</td>
            </tr>

            <tr>
              <td>2</td>
              <router-link id="secondActivity" :to="{name: 'Activity', params: {
                activityId: activities[1].id,
                activityName: activities[1].name,
                activityCourse: activities[1].course,
                activitySubject: activities[1].subject,
                activityPoints: activities[1].points,
                activityLevel: activities[1].level,
                activityType: activities[1].type,
                activityPhoto: activities[1].photo,
                activityLikes: activities[1].likes.length,
                activityQuestion1: activities[1].question1
                }}"><td id="nameTd">{{activities[1].name}}</td></router-link>
              <td>{{activities[1].course}}</td>
              <td>{{activities[1].likes.length}}</td>
            </tr>

            <tr>
              <td>3</td>
              <router-link id="thirdActivity" :to="{name: 'Activity', params: {
                activityId: activities[2].id,
                activityName: activities[2].name,
                activityCourse: activities[2].course,
                activitySubject: activities[2].subject,
                activityPoints: activities[2].points,
                activityLevel: activities[2].level,
                activityType: activities[2].type,
                activityPhoto: activities[2].photo,
                activityLikes: activities[2].likes.length,
                activityQuestion1: activities[2].question1
                }}"><td id="nameTd">{{activities[2].name}}</td></router-link>
              <td>{{activities[2].course}}</td>
              <td>{{activities[2].likes.length}}</td>
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
// Preenchimento das duas tabelas com os três melhores estudantes e com as 3 atividades favoritas
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
    this.activities = this.$store.getters.getActivities;
    this.users = this.$store.getters.getUsers;

    this.activities.sort(this.compareActivities)
    this.getAllUsers.sort(this.compareUsers)
  },
  methods: {
    compareActivities(a, b) {
            if (a.likes.length > b.likes.length) return 1 * -1
            if (a.likes.length < b.likes.length) return -1 * -1
            if (a.likes.length === b.likes.length) return 0
    },
    compareUsers(a, b) {
            if (a.points > b.points) return 1 * -1
            if (a.points < b.points) return -1 * -1
            if (a.points === b.points) return 0
        }
  },
  computed: {
    getAllUsers() {
      const allNames = [];
      const allUsers = [];

      for (let user of this.users) {
        if (allNames.indexOf(user.username) == -1 && user.type == 'estudante')
          allUsers.push({
            id: user.id,
            photo: user.photo,
            name: user.name,
            points: user.points,
            doneActivities: user.doneActivities,
            level: user.level
          });
      }
      return allUsers;
    }
  }
};
</script>

<style scoped>
/* Estilização da tabela */
h4,
.h4 {
  color: #ff7070;
}

#userTable {
  color: white;
}

th {
  color: #ff7070;
}

td {
  color: white;
}

#nameTd {
  color: #6FFFE9;
}

#firstActivity {
  text-decoration: none;
}

#secondActivity {
  text-decoration: none;
}

#thirdActivity {
  text-decoration: none;
}

#activitiesTable {
  color: white;
}

#activitiesTable {
  text-align: start;
}

#usersTable {
  text-align: start;
}


</style>
