<script>
import AppCard from './../components/AppCard.vue';
import AppActions from './../components/AppActions.vue';

export default {
    name: 'Home',
    components: {
        AppCard,
        AppActions,
    },
    methods: {
        login() {
            this.$auth0.loginWithRedirect();
            console.log('login');
        },

        logout() {
            this.$auth0.logout({ logoutParams: { returnTo: window.location.origin } });
            console.log('logout');
        }
    },
}
</script>

<template>
    <AppCard />
    <AppActions />
    <button @click="login">login</button>
    <button @click="logout">logout</button>
</template>