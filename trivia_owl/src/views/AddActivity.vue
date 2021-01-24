<template>
  <div id="AddActivity">
    <b-container fluid>
      <b-row>
        <b-col cols="6">
          <b-form @submit.prevent='addProposal' class="mt-4 ml-4">
        <b-form-group id="input-group-1" label="Nome" label-for="input-1">
          <b-form-input id="input-1" v-model="activity.name" type="text" ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Curso" label-for="input-2">
          <b-form-input id="input-2" v-model="activity.course" type="text" ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Cadeira" label-for="input-3">
          <b-form-input id="input-3" v-model="activity.subject" type="text" ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="Pontos" label-for="input-4">
          <b-form-input id="input-4" v-model="activity.points" type="number" ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-5" label="Nível" label-for="input-5">
          <b-form-input id="input-5" v-model="activity.level" type="number" ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-6" label="Foto" label-for="input-6">
          <b-form-input id="input-6" v-model="activity.photo" type="url" ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-7" label="Tipo" label-for="input-7">
          <b-form-input id="input-7" v-model="activity.type" type="text" ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-8" label="Descrição" label-for="input-8">
          <b-form-input id="input-8" v-model="activity.desc" type="text" ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-9" label="Pergunta 1" label-for="input-9">
          <b-form-input class="mt-1 mb-1" id="input-9" v-model="activity.question1.enunciated" type="text" ></b-form-input>
          <b-form-input class="mt-1 mb-1" id="input-10" v-model="activity.question1.firstAnswer" type="text" ></b-form-input>
          <b-form-input class="mt-1 mb-1" id="input-11" v-model="activity.question1.secondAnswer" type="text" ></b-form-input>
          <b-form-input class="mt-1 mb-1" id="input-12" v-model="activity.question1.thirdAnswer" type="text" ></b-form-input>
          <b-form-input class="mt-1 mb-1" id="input-13" v-model="activity.question1.fourthAnswer" type="text" ></b-form-input>
            <b-form-select class="mt-1 mb-1" v-model="activity.question1.correctAnswer" :options="correctAnswer"></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-10" label="Pergunta 2" label-for="input-10">
          <b-form-input class="mt-1 mb-1" id="input-15" v-model="activity.question2.enunciated" type="text" ></b-form-input>
          <b-form-input class="mt-1 mb-1" id="input-16" v-model="activity.question2.firstAnswer" type="text" ></b-form-input>
          <b-form-input class="mt-1 mb-1" id="input-17" v-model="activity.question2.secondAnswer" type="text" ></b-form-input>
          <b-form-input class="mt-1 mb-1" id="input-18" v-model="activity.question2.thirdAnswer" type="text" ></b-form-input>
          <b-form-input class="mt-1 mb-1" id="input-19" v-model="activity.question2.fourthAnswer" type="text" ></b-form-input>
          <b-form-select class="mt-1 mb-1" v-model="activity.question2.correctAnswer" :options="correctAnswer"></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-11" label="Pergunta 3" label-for="input-11">
          <b-form-input class="mt-1 mb-1" id="input-21" v-model="activity.question3.enunciated" type="text" ></b-form-input>
          <b-form-input class="mt-1 mb-1" id="input-22" v-model="activity.question3.firstAnswer" type="text" ></b-form-input>
          <b-form-input class="mt-1 mb-1" id="input-23" v-model="activity.question3.secondAnswer" type="text" ></b-form-input>
          <b-form-input class="mt-1 mb-1" id="input-24" v-model="activity.question3.thirdAnswer" type="text" ></b-form-input>
          <b-form-input class="mt-1 mb-1" id="input-25" v-model="activity.question3.fourthAnswer" type="text" ></b-form-input>
          <b-form-select class="mt-1 mb-1" v-model="activity.question3.correctAnswer" :options="correctAnswer"></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-12" label="Pergunta 4" label-for="input-12">
          <b-form-input class="mt-1 mb-1" id="input-27" v-model="activity.question4.enunciated" type="text" ></b-form-input>
          <b-form-input class="mt-1 mb-1" id="input-28" v-model="activity.question4.firstAnswer" type="text" ></b-form-input>
          <b-form-input class="mt-1 mb-1" id="input-29" v-model="activity.question4.secondAnswer" type="text" ></b-form-input>
          <b-form-input class="mt-1 mb-1" id="input-30" v-model="activity.question4.thirdAnswer" type="text" ></b-form-input>
          <b-form-input class="mt-1 mb-1" id="input-31" v-model="activity.question4.fourthAnswer" type="text" ></b-form-input>
          <b-form-select class="mt-1 mb-1" v-model="activity.question4.correctAnswer" :options="correctAnswer"></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-13" label="Pergunta 5" label-for="input-13">
          <b-form-input class="mt-1 mb-1" id="input-33" v-model="activity.question5.enunciated" type="text" ></b-form-input>
          <b-form-input class="mt-1 mb-1" id="input-34" v-model="activity.question5.firstAnswer" type="text" ></b-form-input>
          <b-form-input class="mt-1 mb-1" id="input-35" v-model="activity.question5.secondAnswer" type="text" ></b-form-input>
          <b-form-input class="mt-1 mb-1" id="input-36" v-model="activity.question5.thirdAnswer" type="text" ></b-form-input>
          <b-form-input class="mt-1 mb-1" id="input-37" v-model="activity.question5.fourthAnswer" type="text" ></b-form-input>
          <b-form-select class="mt-1 mb-1" v-model="activity.question5.correctAnswer" :options="correctAnswer"></b-form-select>
        </b-form-group>

        <b-button id="submitBtn" pill type="submit">Enviar</b-button>
      </b-form>
        </b-col>
        <b-col cols="6">
          <b-img
              id="activityImg"
              class="mt-4 mr-4"
              :src="activity.photo"
              style="width: 330px; height: 300px;display:flex; justify-content: start"
            ></b-img>
        </b-col>
      </b-row>
      
    </b-container>
  </div>
</template>

<script>
export default {
  name: "AddActivity",
  data() {
    return {
      activity: {
        name: 'Quizz História',
        course: 'História',
        subject: 'História I',
        points: '40',
        level: '1',
        photo: 'https://i.pinimg.com/originals/99/de/be/99debef4e71848100fa80b3beba70f4b.jpg',
        type: 'Quizz',
        desc: 'Testa os teus conhecimentos sobre a história de Portugal!',
        question1: {
          enunciated: 'Quem foi o primeiro rei de Portugal?',
          firstAnswer: 'D. João II',
          secondAnswer: 'Tino de Rans',
          thirdAnswer: 'D. Afonso Henriques',
          fourthAnswer: 'D. Pedro I',
          corretcAnswer: 'Q1A3'
        },
        question2: {
          enunciated: 'Qual foi a primeira capital de Portugal',
          firstAnswer: 'Coimbra',
          secondAnswer: 'Guimarães',
          thirdAnswer: 'Lisboa',
          fourthAnswer: 'Porto',
          corretcAnswer: 'Q2A2'
        },
        question3: {
          enunciated: 'Em que ano foi a revolução de 25 de abril?',
          firstAnswer: '1980',
          secondAnswer: '1568',
          thirdAnswer: '2020',
          fourthAnswer: '1974',
          corretcAnswer: 'Q3A4'
        },
        question4: {
          enunciated: 'Quem foi o último rei de Portugal?',
          firstAnswer: 'D. Manuel II',
          secondAnswer: 'José Socrates',
          thirdAnswer: 'Fernando Santos',
          fourthAnswer: 'Cavaco Silva',
          corretcAnswer: 'Q4A1'
        },
        question5: {
          enunciated: 'Em que ano aconteceu a restauração da independência de Portugal',
          firstAnswer: '1999',
          secondAnswer: '1974',
          thirdAnswer: '1522',
          fourthAnswer: '1640',
          corretcAnswer: 'Q5A4'
        }
      },
      proposals: [],
      correctAnswer: [
            {value: 'Q1A1', text: 'Resposta 1'},
            {value: 'Q1A2', text: 'Resposta 2'},
            {value: 'Q1A3', text: 'Resposta 3'},
            {value: 'Q1A4', text: 'Resposta 4'}
          ]
    }
    
  },
  created() {
    this.proposals = this.$store.getters.getProposals;
  },
  methods: {
    addProposal() {
      let question1 = this.activity.question1.enunciated + ';' + this.activity.question1.firstAnswer + ';' + this.activity.question1.secondAnswer + ';' + this.activity.question1.thirdAnswer + ';' + this.activity.question1.fourthAnswer + ';' + this.activity.question1.correctAnswer
        let question2 = this.activity.question2.enunciated + ';' + this.activity.question2.firstAnswer + ';' + this.activity.question2.secondAnswer + ';' + this.activity.question2.thirdAnswer + ';' + this.activity.question2.fourthAnswer + ';' + this.activity.question2.correctAnswer
        let question3 = this.activity.question3.enunciated + ';' + this.activity.question3.firstAnswer + ';' + this.activity.question3.secondAnswer + ';' + this.activity.question3.thirdAnswer + ';' + this.activity.question3.fourthAnswer + ';' + this.activity.question3.correctAnswer
        let question4 = this.activity.question4.enunciated + ';' + this.activity.question4.firstAnswer + ';' + this.activity.question4.secondAnswer + ';' + this.activity.question4.thirdAnswer + ';' + this.activity.question4.fourthAnswer + ';' + this.activity.question4.correctAnswer
        let question5 = this.activity.question5.enunciated + ';' + this.activity.question5.firstAnswer + ';' + this.activity.question5.secondAnswer + ';' + this.activity.question5.thirdAnswer + ';' + this.activity.question5.fourthAnswer + ';' + this.activity.question5.correctAnswer

        this.$store.dispatch("addProposal", {
          id: this.getNextProposalId(),
          name: this.activity.name,
          course: this.activity.course,
          subject: this.activity.subject,
          points: this.activity.points,
          level: this.activity.level,
          type: this.activity.type,
          photo: this.activity.photo,
          desc: this.activity.desc,
          question1: question1,
          question2: question2,
          question3: question3,
          question4: question4,
          question5: question5
        });
        this.$router.push({name:'ListActivities'})
      },
      getNextProposalId() {
        if (this.proposals.length == 0) {
          return 1;
        } else {
          return this.proposals[this.proposals.length - 1].id + 1;
        }
      }
  }

  
};
</script>

<style scoped>
#activityImg {
  border-radius: 10%;
}

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

#input-group-8 {
  color: #6FFFE9;
  text-align: start;
}

#input-group-9 {
  color: #6FFFE9;
  text-align: start;
}

#input-group-10 {
  color: #6FFFE9;
  text-align: start;
}

#input-group-11{
  color: #6FFFE9;
  text-align: start;
}

#input-group-12 {
  color: #6FFFE9;
  text-align: start;
}

#input-group-13 {
  color: #6FFFE9;
  text-align: start;
}

#activityImg {
  float: right;
}

#submitBtn {
  float: right;
  width: 100px;
  height: 50px;
  background-color: #70FFB4;
  color: #0B132B;
}
</style>
