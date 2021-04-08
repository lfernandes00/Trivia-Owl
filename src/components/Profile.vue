<template>
  <div id="Profile">
    <b-container fluid>
      <b-row class="mt-5">
        <b-col cols="4"
          ><b-avatar :src="getUser.photo" size="200px"></b-avatar
        ></b-col>
        <b-col cols="6" class="mt-5">
          <h6>Nível</h6>
          <b-progress height="2.5rem" value="75" class="mb-2"></b-progress>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="1"></b-col>
        <b-col cols="3" class="mt-5 ml-3">
          <div style="text-align: start">
            <b class="mr-4">Nome: </b> <strong>{{ getUser.name }}</strong>
            <br /><br />
            <b class="mr-4">Idade: </b>
            <strong>{{ getUser.birthDate }}</strong> <br /><br />
            <b class="mr-4">Curso: </b> <strong>{{ getUser.course }}</strong>
            <br /><br />
            <b class="mr-4">Tipo: </b> <strong>{{ getUser.type }}</strong
            ><br />
          </div>
        </b-col>
        <b-col cols="6" class="mt-5" style="padding: 0px; width: 500px">
          <h2 style="color: white">Histórico</h2>
          <div v-if="getUser.historic.length == 0" style="color: white">
            Não participou em atividades
          </div>
          <div v-else>
            <table class="table table-borderless mt-5">
              <thead>
                <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">Curso</th>
                  <th scope="col">Pontos</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody :key="activity.id" v-for="activity in getUser.historic">
                <tr>
                  <td>{{ activity.name }}</td>
                  <td>{{ activity.course }}</td>
                  <td>{{ activity.points }}</td>
                  <td>
                    <router-link
                      :to="{
                        name: 'Activity',
                        params: { activityId: activity.id },
                      }"
                    >
                      <b-button pill variant="danger">Ir</b-button>
                    </router-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="1"></b-col>
        <b-col
          cols="3"
          class="mt-5 ml-3"
          style="display: flex; items-align: start"
        >
          <router-link :to="{ name: 'CreateTeam' }">
            <b-button
              pill
              id="teamBtn"
              class="mr-3"
              style="background-color: #70ffb4; color: #0b132b"
              :disabled="disabled"
              >Criar Equipa</b-button
            >
          </router-link>

          <router-link :to="{ name: 'EditProfile' }"
            ><b-button
              pill
              id="editBtn"
              style="background-color: #70ffb4; color: #0b132b"
              >Editar</b-button
            ></router-link
          >
        </b-col>
        <b-col cols="3" class="mt-5">
          <router-link class="h1" :to="{ name: 'Classification' }"
            ><b-icon
              style="color: #70ffb4; font-size: 60px"
              icon="people-fill"
            ></b-icon
          ></router-link>
        </b-col>
        <b-col cols="3" class="mt-5">
          <router-link class="h1" :to="{ name: 'Trophies' }"
            ><b-icon
              style="color: #70ffb4; font-size: 60px"
              icon="trophy-fill"
            ></b-icon
          ></router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      loggedUser: "",
      disabled: false,
    };
  },
  created() {
    this.users = this.$store.getters.getUsers;
    this.loggedUser = this.$store.getters.getLoggedUser;

    if (this.loggedUser.team == 0) {
      this.disabled = false;
    } else {
      this.disabled = true;
    }
  },
  computed: {
    getUser() {
      return this.$store.getters.getLoggedUser;
    },
  },
};
</script>

<style scoped>
th {
  color: #ff7070;
}

td {
  color: white;
}

h6 {
  color: #70ffb4;
}
b {
  color: #ff7070;
}
strong {
  color: #93dbcb;
}

b-button pill {
  background-color: #70ffb4;
}
p {
  color: #00b89c;
}

#historyTable {
  color: white;
}

#teamBtn {
  width: 100px;
  height: 50px;
  font-size: 13px;
}

#editBtn {
  width: 100px;
  height: 50px;
}
</style>
