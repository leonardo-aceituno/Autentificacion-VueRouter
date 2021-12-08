/* eslint-disable no-unused-vars */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// Import Element ↓↓↓
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en";

// Import Firebase ↓↓↓
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP-T5jGiGusq4AVpOwj5aRQ9wyjsVmSlI",
  authDomain: "direct-hope-258414.firebaseapp.com",
  projectId: "direct-hope-258414",
  storageBucket: "direct-hope-258414.appspot.com",
  messagingSenderId: "315198290856",
  appId: "1:315198290856:web:eff17dbe22a8ee948c3b9d",
  measurementId: "G-YVTNF76C75",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(ElementUI, { locale });

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
