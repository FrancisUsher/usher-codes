<template>
    <v-bottom-navigation fixed grow>
        <v-btn text :to="{ name: 'home' }">
            <span>Home</span>
            <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn text :to="{ name: 'career' }">
            <span>Career</span>
            <v-icon>mdi-account-card-details</v-icon>
        </v-btn>
        <v-btn text :to="{ name: 'keyboards' }">
            <span>Keyboards</span>
            <v-icon>mdi-keyboard</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
export default {
    name: 'bottom-nav',
};
</script>
