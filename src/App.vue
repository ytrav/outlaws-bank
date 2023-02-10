<script>
import { initThinBackend } from 'thin-backend';
import { ThinBackend } from 'thin-backend-vue';

initThinBackend({
  host: 'https://outlaws-bank.thinbackend.app',
})

import AppCard from './components/AppCard.vue';
import AppActions from './components/AppActions.vue';

export default {
  name: 'Outlaws Bank',
  components: {
    AppCard,
    AppActions,
  },
  
}
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
</style>
