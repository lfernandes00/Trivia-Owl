<template>
  <div id="UserManagement">
    <b-container fluid>
      <b-row class="ml-5">
         <table id="usersTable" class="table table-borderless mt-5 ml-5">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col">Nome</th>
              <th scope="col">Curso</th>
            </tr>
          </thead>
          <tbody :key="user.id" v-for="(user,index) in getAllUsers">
            <tr>
              <td>{{index + 1}}</td>
              <td><b-avatar :src="user.photo"></b-avatar></td>
              <td>{{user.name}}</td>
              <td>{{user.course}}</td>
              <td><b-button pill id="removeBtn" @click='removeUser(user.id)'>Eliminar</b-button></td>
            </tr>
          </tbody>
        </table>
      </b-row>
       
    </b-container>
  </div>
</template>

<script>
export default {
  name: "UserManagement",
  data() {
    return {
      users: [],
    }
  },
  created() {
    this.users = this.$store.getters.getUsers;
  },
  methods: {
    removeUser(id) {
            // Remover objeto com confirmação
            this.$store.dispatch("removeUser", id);
            this.users = this.$store.getters.getUsers;
    }
  },
  computed: {
    getAllUsers() {
      const allNames = [];
      const allUsers = [];

      for (let user of this.users) {
        if (allNames.indexOf(user.username) == -1 && user.type !== 'admin')
          allUsers.push({
            id: user.id,
            photo: user.photo,
            name: user.name,
            course: user.course,
            points: user.points,
            doneActivities: user.doneActivities
          });
      }
      return allUsers;
    }
  }
};
</script>

<style scoped>
th {
  color: #ff7070;
}

td {
 color: white
}

#removeBtn {
  background-color: #FF7070;
  color: #0B132B;
}

#usersTable {
  text-align: start;
}
</style>
