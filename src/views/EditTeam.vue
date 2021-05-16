<template>
  <div id="editTeam">
    <b-container fluid>
      <b-row>
        <b-col cols="6">
          <b-form @submit.prevent="onSubmit" class="mt-4 ml-4">
            <b-form-group id="input-group-1" label="Nome" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="team.name"
                type="text"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Foto" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="team.photo"
                type="url"
              ></b-form-input>
            </b-form-group>

            <b-button id="submitBtn" pill type="submit">Alterar</b-button>
          </b-form>
        </b-col>
        <b-col cols="6">
          <b-avatar
            class="mt-4 ml-2"
            id="avatar"
            :src="team.photo"
            size="200px"
          ></b-avatar>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "EditTeam",
  data() {
    return {
      userLogged: '',
      team: {
          id: '',
          name: '',
          photo: ''
      }
    }
  },
  created() {
    this.userLogged = this.$store.getters.getLoggedUser

    this.team.id = this.$route.params.teamId;
  },
  methods: {
    onSubmit() {
      const newValue = {
        id: this.team.id,
        name: this.team.name,
        photo: this.team.photo
      }

      this.$store.dispatch('editTeam', newValue);
      this.$router.push({name:'ListTeams'});
    },
    
  }
};
</script>

<style scoped>
#input-group-1 {
  color: #6fffe9;
  text-align: start;
}

#input-group-2 {
  color: #6fffe9;
  text-align: start;
}

#input-group-3 {
  color: #6fffe9;
  text-align: start;
}

#input-group-4 {
  color: #6fffe9;
  text-align: start;
}

#input-group-5 {
  color: #6fffe9;
  text-align: start;
}

#input-group-6 {
  color: #6fffe9;
  text-align: start;
}

#input-group-7 {
  color: #6fffe9;
  text-align: start;
}

#avatar {
  float: none;
}

#submitBtn {
  background-color: #70ffb4;
  color: #0b132b;
  width: 100px;
  height: 50px;
  float: right;
}
</style>
