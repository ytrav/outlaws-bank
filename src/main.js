import { createApp } from 'vue'
import { createStore } from 'vuex'
import { createRouter, createWebHistory } from 'vue-router'
import { createAuth0 } from '@auth0/auth0-vue'

import './app.scss'
import './scss/card.scss'
import './scss/actions.scss'

import App from './App.vue'
import AppLanding from './routes/AppLanding.vue'
import AppHome from './routes/AppHome.vue'
import AppSettings from './routes/AppSettings.vue'

import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

const store = createStore({
    state() {
        return {
            settings: [
                {
                    label: 'Setting 1',
                    desc: 'Description of the setting',
                    icon: null,
                },
                {
                    label: 'Setting 1',
                    desc: 'Description of the setting',
                    icon: null,
                },
                {
                    label: 'Setting 1',
                    desc: 'Description of the setting',
                    icon: null,
                },
                {
                    label: 'Setting 1',
                    desc: 'Description of the setting',
                    icon: null,
                },
                {
                    label: 'Setting 1',
                    desc: 'Description of the setting',
                    icon: null,
                },
                {
                    label: 'Setting 1',
                    desc: 'Description of the setting',
                    icon: null,
                },
            ]
        }
    }
})

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: AppLanding },
        { path: '/dashboard', component: AppHome },
        { path: '/settings', component: AppSettings },
    ]
})




createApp(App)
    .use(router)
    .use(store)
    .use(
        createAuth0({
            domain: "dev-mr866tdux1g1lfxn.us.auth0.com",
            clientId: "iav9tn8UqEt33sET2YHbJknw2MV30Ekb",
            authorizationParams: {
                redirect_uri: window.location.origin
            }
        })
    )
    .use(mdiVue, {
        icons: mdijs
    })
    .mount('#app')
