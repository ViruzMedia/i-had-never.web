<template>
  <div>
    <v-container fluid full-width grid-list-sm>
      <h2>Willkommen zurück {{username}}!</h2>
      <p>Was möchtest du heute machen?</p>
      <!--<v-layout row wrap>
        <v-flex d-flex xs12 sm7>
          <v-layout row wrap>
            <v-flex d-flex>
              <v-card color="indigo lighten-2" dark tile flat>
                <v-card-title>
                  <i class="material-icons">cloud</i>
                  <h4 style="padding-left: 5px;">Server-Status</h4>
                </v-card-title>
                <v-card-text>{{ api_status }}</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs12 sm3>
          <v-card color="red lighten-2" dark tile flat>
            <v-card-title>
              <i class="material-icons">question_answer</i>
              <h4 style="padding-left: 5px;">Total Questions</h4>
            </v-card-title>
            <v-card-text>{{ total_quest }}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>-->
    </v-container>
    <v-container fluid full-width>
      <v-card color="grey darken-2" dark tile flat style="border-radius: 3px;">
        <v-card-title>
          <i class="material-icons">question_answer</i>
          <h4 style="padding-left: 5px;">Neue Frage hinzufügen</h4>
          <p>{{lorem}}</p>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-select
              v-model="select_prae"
              :items="items"
              :rules="[v => !!v || 'Präfix is required']"
              label="Präfix"
              required
            ></v-select>
            <v-text-field v-model="question" :rules="questRules" label="Frage" required></v-text-field>
            <v-select
              v-model="select_cat"
              :items="categorys"
              :rules="[v => !!v || 'Category is required']"
              label="Category"
              required
            ></v-select>
            <h4>Frage:</h4>
            <p>{{select_prae}} {{question}}.</p>
            <h4>Category:</h4>
            <p>{{select_cat}}</p>
            <v-btn :disabled="!valid" color="success" @click="test_notification">Frage einreichen</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
    <v-container fluid full-width grid-list-sm>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm7>
          <v-layout row wrap>
            <v-flex d-flex>
              <v-card color="light-green darken-2" dark tile flat style="border-radius: 3px;">
                <v-card-title style="padding-bottom: 0px!important;">
                  <i class="material-icons">fiber_new</i>
                  <h3 style="padding-left: 5px;">Die neuste Frage im System:</h3>
                </v-card-title>
                <v-card-text>
                  <h4>Frage:</h4>
                  {{ newest_question }}
                  <br>
                  <h4>Author:</h4>
                  {{newest_question_author}}
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs12 sm5>
          <v-card color="blue-grey darken-2" dark tile flat style="border-radius: 3px;">
            <v-card-title style="padding-bottom: 0px!important;">
              <i class="material-icons">today</i>
              <h3 style="padding-left: 5px;">Der Witz des Tages:</h3>
            </v-card-title>
            <v-card-text>
              <p>{{humor_of_the_day}}</p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      site_name: this.$route.name,
      api_status: "get from api_main_route",
      total_quest: "0",
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
      valid: null,
      question: "",
      questRules: [v => !!v || "Name is required"],
      select_prae: null,
      select_cat: null,
      items: ["Ich habe noch nie", "Ich bin noch nie"],
      categorys: ["Spaß", "Verspielt", "Sexuell", "Intim", "Versaut", "Joker"],
      newest_question: "{{newest_question}}",
      newest_question_author: "{{newest_question_author}}",
      username: "{{username}}",
      humor_of_the_day: "{{humor_of_the_day}}"
    };
  },
  methods: {
    async test_notification() {
      this.$notify({
        group: "notify",
        title: "Important message",
        text: "Hello user! This is a notification!"
      });
    }
  }
};
</script>
