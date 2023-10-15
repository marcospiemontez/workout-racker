import { createApp } from 'vue'
import { pinia } from '@/store/index';
import './style.css'
import App from './App.vue'
import router from '@/router/router';
import i18n from './locales/i18n';

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(i18n);
app.mount('#app')
