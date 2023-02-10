<template>
    <div class="card">
        <div class="card-label">
            <h2>Your card</h2>
            <h3>{{ rank }}</h3>
        </div>
        <span>1244 **** **** ****</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            rank: '',
            user: this.$auth0.user,
        }
    },
    mounted() {
        // if (this.user.app_metadata.roles.indexOf('User')) {
        //     this.rank = "Standard";
        //     alert('youre user');
        // }
        (user, context, callback) => {
            user.app_metadata = user.app_metadata || {};
            if (user.app_metadata.roles.indexOf('writer')) {
                // code to be executed
                this.rank = "Standard";
                alert('youre user');
            }
        }
    },
}
</script>