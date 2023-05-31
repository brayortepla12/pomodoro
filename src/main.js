import { createApp } from "vue"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStopwatch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from "./App.vue"

import "bootstrap/dist/css/bootstrap.css"
import "./assets/sass/style.scss"

library.add(faStopwatch)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

import "bootstrap/dist/js/bootstrap.js"
