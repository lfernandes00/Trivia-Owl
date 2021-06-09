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
          <tbody :key="user.id" v-for="(user, index) in users">
            <tr>
              <td>{{ index + 1 }}</td>
              <td><b-avatar alt="" :src="user.photo"></b-avatar></td>
              <td>{{ user.name }}</td>
              <td>{{ user.course }}</td>
              <td>
                <b-button pill id="removeBtn" @click="removeUser(user.id)"
                  >Eliminar</b-button
                >
              </td>
            </tr>
          </tbody>
        </table>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
export default {
  name: "UserManagement",
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    removeUser(id) {
      // Remover objeto com confirmação
      Swal.fire({
        title: "Deseja remover o utilizador?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch("removeUser", id);
          this.getUsers();
        }
      });

      
      
    },
    async getUsers() {
      try {
        await this.$store.dispatch("getAllUsersForAdmin");
        this.users = this.$store.getters.getUsers;
      } catch (error) {
        this.message =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    },
  },
  computed: {},
};
</script>

<style scoped>
th {
  color: #ff7070;
}
td {
  color: #fff;
}
#removeBtn {
  background-color: #ff7070;
  color: #0b132b;
}
#usersTable {
  text-align: start;
}
</style>
