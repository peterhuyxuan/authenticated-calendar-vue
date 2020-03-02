import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyAKSvEA5GOLCkZrZPRq9Voc-lIllNLJZj4",
  authDomain: "calendar-vue-57bc2.firebaseapp.com",
  databaseURL: "https://calendar-vue-57bc2.firebaseio.com",
  projectId: "calendar-vue-57bc2",
  storageBucket: "calendar-vue-57bc2.appspot.com",
  messagingSenderId: "665124957245",
  appId: "1:665124957245:web:a9bf42751d513227298e54"
});

export const db = firebase.firestore();

let app;
firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      vuetify,
      router,
      render: h => h(App)
    }).$mount("#app");
  }
  console.log(user);
});
