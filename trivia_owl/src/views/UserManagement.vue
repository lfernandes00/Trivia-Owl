<template>
  <div id="UserManagement">
    <b-container fluid>
        <table class="table table-borderless mt-5">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col">Nome</th>
              <th scope="col">Curso</th>
            </tr>
          </thead>
          <tbody :key="user.id" v-for="(user,index) in users">
            <tr>
              <td>{{index + 1}}</td>
              <td><b-avatar :src="user.photo"></b-avatar></td>
              <td>{{user.name}}</td>
              <td>{{user.course}}</td>
              <td><b-button pill id="removeBtn">Eliminar</b-button></td>
            </tr>
          </tbody>
        </table>
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
</style>
