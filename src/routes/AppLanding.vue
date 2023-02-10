<template>
    <div></div>
</template>

<script>
export default {
    name: 'Landing',
    data() {
        return {
            user: this.$auth0.user,
        }
    },
    mounted() {
        if (this.user !== undefined) {
            this.$router.replace({ path: '/dashboard' })
        } else {
            this.$auth0.loginWithRedirect();
        }
    },
}

</script>