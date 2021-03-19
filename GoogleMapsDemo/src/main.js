import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import './main.css'

window.axios = require('axios');

createApp(App).use(store).use(router).use(VueGoogleMaps, {
    load: {
        key:'AIzaSyB1dmrwKYjC9tPAlcpiUZKlC7GowMjfKiY'
    },
}).mount('#app')
