import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareasAutosize from 'vue-textarea-autosize';
import firebase from  'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareasAutosize);

Vue.config.productionTip = false

firebase.initializeApp ({
  apiKey: "AIzaSyAPkmDX3HlObdhG9p5f0fEdjzavhxl-zA8",
  authDomain: "vue-calendar-a4cd9.firebaseapp.com",
  databaseURL: "https://vue-calendar-a4cd9.firebaseio.com",
  projectId: "vue-calendar-a4cd9",
  storageBucket: "vue-calendar-a4cd9.appspot.com",
  messagingSenderId: "13589473348",
  appId: "1:13589473348:web:7a13fde40a50f396fa3411"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
