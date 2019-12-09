<template>
    <transition name="fill-page" @before-leave="expandFromCenter">
        <v-card v-if="show" class="job-card-container">
            <v-card-title class="headline">{{ title }}</v-card-title>
            <v-card-subtitle class="font-italic">
                {{ location }}
                <span class="float-right">{{ duration }}</span>
            </v-card-subtitle>
            <v-card-text class="content">
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
                        <!-- :to="{ path: name }" -->
                        <v-btn @click="expandToFill" text
                            >Details coming soon</v-btn
                        >
                    </v-row>
                </v-list-item>
            </v-card-actions>
        </v-card>
    </transition>
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
        name: {
            type: String,
            required: true,
        },
    },
    methods: {
        expandToFill() {
            this.show = false;
        },
        expandFromCenter(el) {
            const bounds = this.calculatePosition(el);
            const temp = document.createElement('div');
            temp.style.position = 'absolute';
            temp.style.top = `${bounds.top}px`;
            temp.style.left = `${bounds.left}px`;
            temp.style.height = `${bounds.height}px`;
            //temp.style.height = '100vh';
            temp.style.width = `${bounds.width}px`;
            temp.style.background = 'red';
            temp.className = 'temp-expander';
            var observer = new MutationObserver(function() {
                if (document.contains(temp)) {
                    setTimeout(function() {
                        temp.style.top = '0px';
                        temp.style.height = '100vh';
                    }, 10);

                    observer.disconnect();
                }
            });

            observer.observe(document.body, {
                attributes: false,
                childList: true,
                characterData: false,
                subtree: false,
            });

            document.body.appendChild(temp);
            //temp.style.top = '0px';
            //temp.style.left = '0px';
            // temp.style.maxHeight = '100vh';
        },
        calculatePosition(element) {
            var root = document.documentElement;
            var body = document.body;
            var rect = element.getBoundingClientRect();

            var scrollTop =
                window.pageYOffset || root.scrollTop || body.scrollTop || 0;
            var scrollLeft =
                window.pageXOffset || root.scrollLeft || body.scrollLeft || 0;

            var clientTop = root.clientTop || body.clientTop || 0;
            var clientLeft = root.clientLeft || body.clientLeft || 0;

            return {
                top: Math.round(rect.top + scrollTop - clientTop),
                left: Math.round(rect.left + scrollLeft - clientLeft),
                height: rect.height,
                width: rect.width,
            };
        },
    },
    data() {
        return { show: true };
    },
};
</script>
<style lang="scss">
.temp-expander {
    transition-property: top, height;
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

// .job-card-container {
//     height: 500px;
// }
// // // Enter animation for fullscreen card, fade-in
// // .fill-page-enter-active {
// //     transition: all 0.3s ease;
// // }
// // .fill-page-enter {
// //     transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
// // }
// .fill-page-leave-active {
//     position: static;
//     transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
// }
// // .fill-page-leave
// // /* .slide-fade-leave-active below version 2.1.8 */ {

// // }
// .fill-page-leave-to
// /* .slide-fade-leave-active below version 2.1.8 */ {
//     transform: scaleY(3);
//     * {
//         opacity: 0;
//     }
//     height: 1000px;
// }
</style>
