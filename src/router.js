import Vue from 'vue'
import Router from 'vue-router'
import Pomodoro from './views/Pomodoro.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Pomodoro',
        component: Pomodoro
    }]
})