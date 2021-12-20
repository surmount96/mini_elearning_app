/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from "vue";
import 'remixicon/fonts/remixicon.css'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css"
import router from "./router/index";
import store from "./store/index";
import fullCalendar from 'vue-fullcalendar'
import VModal from 'vue-js-modal'
import VueSweetalert2 from 'vue-sweetalert2';
 
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
 
Vue.use(VueSweetalert2);

Vue.use(ElementUI);
Vue.use(VModal);


import 'vue-js-modal/dist/styles.css'

Vue.component('full-calendar', fullCalendar)

Vue.component('register', require('./components/steps/Register.vue').default);
Vue.component('layout', require('./views/protected/layout/StudentLayout.vue').default);
Vue.component('login-layout', require('./views/protected/layout/LoginLayout.vue').default);
Vue.component('tutor-layout', require('./views/protected/layout/TutorLayout.vue').default);
Vue.component('admin-layout', require('./views/protected/layout/AdminLayout.vue').default);
Vue.component('AppNavbar', require('./components/ui/Navbar.vue').default);



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router,
    store,
    data(){
        return {
            mobileNav:false,
        }
    },
    methods:{
        showMobileNav(){
            this.mobileNav = !this.mobileNav;
        },
    }
});
