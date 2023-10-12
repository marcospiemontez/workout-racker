import { createApp } from 'vue'
import { pinia } from '@/store/index';
import './style.css'
import App from './App.vue'
import router from '@/router/router';

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app')
