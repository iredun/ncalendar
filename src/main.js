import { createApp } from 'vue'
import App from './App.vue'
import VueScreen from 'vue-screen'

createApp(App)
    .use(VueScreen, 'tailwind')
    .mount('#app')
