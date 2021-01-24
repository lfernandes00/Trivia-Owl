<template>
  <div id="editProfile">
    <b-container fluid>
      <b-row>
        <b-col cols="6">
          <b-form @submit.prevent='onSubmit' class="mt-4 ml-4">
        <b-form-group id="input-group-1" label="Username" label-for="input-1">
          <b-form-input id="input-1" v-model="user.username" type="text" ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Palavra chave" label-for="input-2">
          <b-form-input id="input-2" v-model="user.password" type="password" ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Nome" label-for="input-3">
          <b-form-input id="input-3" v-model="user.name" type="text" ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="Data de nascimento" label-for="input-4">
          <b-form-input id="input-4" v-model="user.birthDate" type="date" ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-6" label="Curso" label-for="input-6">
          <b-form-input id="input-6" v-model="user.course" type="text" ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-7" label="Foto" label-for="input-7">
          <b-form-input id="input-7" v-model="user.photo" type="url" ></b-form-input>
        </b-form-group>

        <b-button id="submitBtn" pill type="submit">Alterar</b-button>
      </b-form>
        </b-col>
        <b-col cols="6">
          <b-avatar class="mt-4 ml-2" id="avatar" :src="user.photo" size="200px"></b-avatar>
        </b-col>
      </b-row>
      
    </b-container>
  </div>
</template>

<script>
export default {
  name: "EditProfile",
  data() {
    return {
      userLogged: '',
      user: {
        id: '',
        username: '',
        password: '',
        name: '',
        birthDate: '',
        course: '',
        photo: '',
      }
    }
  },
  created() {
    this.userLogged = this.$store.getters.getLoggedUser

    this.user.id = this.userLogged.id;
    this.user.username = this.userLogged.username;
    this.user.password = this.userLogged.password;
    this.user.name = this.userLogged.name;
    this.user.birthDate = this.userLogged.birthDate;
    this.user.course = this.userLogged.course;
    this.user.photo = this.userLogged.photo;
  },
  methods: {
    onSubmit() {
      const newValue = {
        id: this.user.id,
        username: this.user.username,
        password: this.user.password,
        name: this.user.name,
        birthDate: this.user.birthDate,
        course: this.user.course,
        photo: this.user.photo
      }

      this.$store.dispatch('editUser', newValue);
      this.$router.push({name:'Profile'});
    }
  }
};
</script>

<style scoped>
#input-group-1 {
  color: #6FFFE9;
  text-align: start;
}

#input-group-2 {
  color: #6FFFE9;
  text-align: start;
}

#input-group-3 {
  color: #6FFFE9;
  text-align: start;
}

#input-group-4 {
  color: #6FFFE9;
  text-align: start;
}

#input-group-5 {
  color: #6FFFE9;
  text-align: start;
}

#input-group-6 {
  color: #6FFFE9;
  text-align: start;
}

#input-group-7 {
  color: #6FFFE9;
  text-align: start;
}

#avatar {
  float:none;
}

#submitBtn {
  background-color: #70FFB4;
  color: #0B132B;
  width: 100px;
  height: 50px;
  float: right;
}
</style>
