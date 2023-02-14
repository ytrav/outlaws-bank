<template>
    <div class="card">
        <div class="card-label">
            <h2>Your card</h2>
            <h3>{{ rank }}</h3>
        </div>
        <!-- <span>{{ accountId }}</span>
        <h3>{{ balance }}</h3> -->
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            rank: '',
            user: this.$auth0.user,
            accountId: '',
            balance: '',
            // accessToken: null,
        }
    },
    // methods: {
    //     async getAccessToken() {
    //         try {
    //             const response = await axios.post(
    //               'https://outlawsbank.eu.auth0.com/oauth/token',
    //               {
    //                 grant_type: 'client_credentials',
    //                 client_id: 'vaAJCyMkgjgENP6WlPpHSyqjiXRsqFFw',
    //                 client_secret: 'P_RpGs-OXNNRuDtbilhSS-80pqOYEfrVdfyav_uFx8l-ncO7x5ab7kKPLxrysu_w',
    //                 audience: 'https://outlawsbank.eu.auth0.com/api/v2/',
    //               }
    //             );

    //             this.accessToken = response.data.access_token;
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     },
    // },
    mounted() {
        // axios.get(`https://outlawsbank.eu.auth0.com/api/v2/users/${this.user.sub}`, {
        //     headers: {
        //         Authorization: `Bearer ${this.getAccessToken()}`
        //     }
        // }).then(response => {
        //     this.rank = response.data.app_metadata.rank;
        //     this.accountId = response.data.app_metadata.account_id;
        //     this.balance = response.data.app_metadata.balance;
        // });
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