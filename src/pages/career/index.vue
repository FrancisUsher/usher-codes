<template>
    <div>
        <h1 class="display-2">Career</h1>
        <h2>I'm a web software engineer.</h2>
        <v-container>
            <v-row dense v-for="(job, i) in jobs" :key="i">
                <v-col cols="12">
                    <job-card
                        :title="job.title"
                        :location="job.location"
                        :duration="job.duration"
                        :headlines="job.headlines"
                    ></job-card>
                </v-col>
            </v-row>
        </v-container>

        <v-btn disabled>PDF Résumé coming soon</v-btn>
    </div>
</template>
<script>
import jobCard from './components/job-card';
export default {
    name: 'career',
    components: { jobCard },
    data() {
        return {
            jobs: [
                {
                    title: 'Front-end engineer',
                    location: 'Nexon OC, Irvine, CA',
                    duration: '2018/01 - Present',
                    headlines: [
                        'Building a web gaming platform with <strong>Vue.js</strong>.',
                        `Introduced <strong>test-driven</strong> front-end
                                    development with Cypress.`,
                        `Unified code style by integrating <strong>ESlint</strong> and
                                    <strong>Prettier</strong>.`,
                    ],
                },
                {
                    title: 'Software engineer',
                    location: 'Nexon America, El Segundo, CA',
                    duration: '2016/08 - 2017/12',
                    headlines: [
                        `Built a web front &amp; back-end for gamer accounts site
                            Scala Play framework and vanilla JS.`,
                        `Integrated Twitch, Facebook, and other
                                    third-party auth providers into Nexon Login.`,
                        `Used Rollup and Uglify to write an
                                    IE8-compatible Nexon auth library in under
                                    4kb.`,
                    ],
                },
                {
                    title: 'Web developer',
                    location: 'Nexon Europe, Berlin, Germany',
                    duration: '2015/03 - 2016/08',
                    headlines: [
                        `Built lean, responsive, static pages with
                                    Pug, Underscore, Bootstrap, and LESS.`,
                        `Maintained a legacy enterprise C# ASP.net
                                    2.0 web portal and platform system.`,
                        `Patched vulnerabilities in new &amp; old
                                    systems by applying modern security
                                    best-practices.`,
                    ],
                },
            ],
        };
    },
};
</script>
