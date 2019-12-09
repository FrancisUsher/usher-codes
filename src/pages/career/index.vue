<template>
    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>
</template>
<script>
export default {
    name: 'career',
    metaInfo: {
        title: "Francis Usher's career page.",
        description: 'Software Engineering Résumé in web and PDF formats.',
        htmlAttrs: {
            lang: 'en',
            amp: true,
        },
    },
    // watch: {
    //     $route(to, from) {
    //         const toDepth = to.path.split('/').length;
    //         const fromDepth = from.path.split('/').length;
    //         this.transitionName =
    //             toDepth < fromDepth ? 'slide-left' : 'slide-left';
    //     },
    // },
};
</script>

<style lang="scss" scoped>
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: all 2.3s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
