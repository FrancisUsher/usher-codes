<template>
    <v-bottom-navigation fixed grow>
        <v-btn text :to="{ name: 'home' }">
            <span>Home</span>
            <v-icon>{{ mdiHome }}</v-icon>
        </v-btn>
        <v-btn text :to="{ name: 'career' }">
            <span>Career</span>
            <v-icon>{{ mdiAccountCardDetails }}</v-icon>
        </v-btn>
        <v-btn text :to="{ name: 'keyboards' }">
            <span>Keyboards</span>
            <v-icon>{{ mdiKeyboard }}</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
import { mdiHome, mdiKeyboard, mdiAccountCardDetails } from '@mdi/js';
export default {
    name: 'bottom-nav',
    data() {
        return {
            mdiHome,
            mdiKeyboard,
            mdiAccountCardDetails,
        };
    },
};
</script>
