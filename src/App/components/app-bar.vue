<template>
    <v-app-bar app>
        <v-toolbar-title class="headline text-uppercase">
            <router-link :to="{ name: 'home' }" class="toolbar-title">
                <span class="font-weight-bold">USHER</span>
            </router-link>
            <span v-if="pageCuteName" class="font-weight-light"
                >.{{ pageCuteName }}</span
            >
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn :to="{ name: 'career' }" class="d-none d-sm-flex" text>
            <span>
                <span>Résumé</span>
            </span>
        </v-btn>
        <v-btn :to="{ name: 'keyboards' }" class="d-none d-sm-flex" text>
            <span>
                <span>Keyboards</span>
            </span>
        </v-btn>
        <v-btn
            href="https://github.com/FrancisUsher/usher-codes/tree/boring-material"
            target="_blank"
            rel="noreferrer"
            text
        >
            <div class="d-none d-sm-flex align-center">
                <span>Source</span>
                <v-icon>mdi-open-in-new</v-icon>
            </div>

            <v-icon class="d-flex d-sm-none">mdi-github-circle</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    name: 'app-bar',
    computed: {
        pageCuteName() {
            if (this.$route.name === 'keyboards') {
                return 'keebs';
            } else if (this.$route.name === 'career') {
                return 'works';
            }
            return 'codes';
        },
    },
};
</script>

<style lang="scss" scoped>
.toolbar-title {
    color: inherit;
    text-decoration: inherit;
}
</style>
