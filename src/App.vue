<template>
  <v-app>
    <v-toolbar app>
      <!-- <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer> -->
      <div class="flex-grow-1"></div>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-content v-if="isLogginIn"
          ><span class="email black-text">{{ currentUser }}</span></v-content
        >
        <v-btn flat v-if="!isLogginIn">
          <router-link to="/login">Login</router-link>
        </v-btn>
        <v-btn flat v-if="!isLogginIn">
          <router-link to="/register">Register</router-link>
        </v-btn>
        <v-btn flat v-if="isLogginIn">
          <router-link to="/">Calendar</router-link>
        </v-btn>
        <v-btn v-on:click="logout" v-if="isLogginIn">
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import firebase from "firebase";
export default {
  name: "App",

  data() {
    return {
      isLogginIn: false,
      currentUser: false
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLogginIn = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.go({ path: this.$router.path });
        });
    }
  }
};
</script>

<style scoped>
.email {
  margin-top: 20px;
  display: inline-block;
  padding-right: 30px;
}
</style>
