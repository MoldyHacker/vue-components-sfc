import { createApp } from 'vue'
import App from './App.vue'

// Register bootstrap globally
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

import './sass/app.scss'

createApp(App).mount('#app')
