<template>
    <v-app>
        <app-bar></app-bar>
        <v-content>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-content>
        <bottom-nav class="d-sm-none"></bottom-nav>
    </v-app>
</template>

<script>
import appBar from './components/app-bar';
import bottomNav from './components/bottom-nav';
export default {
    name: 'App',
    components: { appBar, bottomNav },
    data: () => ({
        //
    }),
};
</script>
