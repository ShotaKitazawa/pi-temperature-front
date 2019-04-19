// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app
const config = {
  apiKey: 'AIzaSyBiQGYL7qOHrOg6CCa5qoACWCAuHYf00bM',
  authDomain: 'myproject-181012.firebaseapp.com',
  databaseURL: '',
  projectId: 'myproject-181012',
  storageBucket: '',
  messagingSenderId: ''
}
firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(user => {
  /* eslint-disable no-new */
  if (!app) {
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
