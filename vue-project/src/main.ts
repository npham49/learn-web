import './assets/main.css'
import '@bcgov/bc-sans/css/BCSans.css';
import './assets/scss/style.scss';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap' // ←

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
