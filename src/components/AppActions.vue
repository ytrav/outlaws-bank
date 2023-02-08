<script>
export default {
    name: 'Actions',
    data() {
        return {
            actions: [
                {
                    label: 'Add card',
                    icon: 'credit-card-plus-outline',
                    path: '/',
                },
                {
                    label: 'Transfer',
                    icon: 'bank',
                    path: '/',
                },
                {
                    label: 'Settings',
                    icon: 'cog',
                    path: '/settings',
                },
            ],
        }
    },
}
</script>

<template>
    <div class="actions">
        <router-link :to="action.path" class="action" v-for="action in actions" :key="action">
            <div class="icon-container">
                <mdicon :name="action.icon" size="30" />
            </div>
            <span>{{ action.label }}</span>
        </router-link>

    </div>
</template>