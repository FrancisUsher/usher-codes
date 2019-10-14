<template>
    <v-card>
        <v-list-item two-line>
            <v-list-item-content>
                <v-list-item-title class="headline">{{
                    title
                }}</v-list-item-title>
                <v-list-item-subtitle class="font-italic">
                    {{ location }}
                    <span class="float-right">{{ duration }}</span>
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <!-- <v-card-title class="headline"></v-card-title> -->
        <!-- <v-card-subtitle></v-card-subtitle> -->
        <v-card-text>
            <ul>
                <li
                    v-for="(headline, i) in headlines"
                    :key="i"
                    v-html="headline"
                ></li>
            </ul>
        </v-card-text>

        <v-card-actions>
            <v-list-item class="grow">
                <v-row align="center" justify="end">
                    <v-btn disabled text>Details coming soon</v-btn>
                </v-row>
            </v-list-item>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: 'job-card',
    props: {
        title: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        duration: {
            type: String,
            required: true,
        },
        headlines: {
            type: Array,
            required: true,
        },
    },
};
</script>
