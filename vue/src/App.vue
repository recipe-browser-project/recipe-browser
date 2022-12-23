<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
    <TheNavigation/>
    <div class="container">
        <router-view v-slot="{Component}">
            <transition name="fade" mode="out-in">
                <component :is="Component" :key="$route.path"></component>
            </transition>
        </router-view>
    </div>
</template>
<script>
import TheNavigation from '@/components/TheNavigation.vue'
export default{
    components: {TheNavigation}
}
</script>
<style lang="css">
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
<!--<style scoped>-->
<!--.logo {-->
<!--  height: 6em;-->
<!--  padding: 1.5em;-->
<!--  will-change: filter;-->
<!--}-->
<!--.logo:hover {-->
<!--  filter: drop-shadow(0 0 2em #646cffaa);-->
<!--}-->
<!--.logo.vue:hover {-->
<!--  filter: drop-shadow(0 0 2em #42b883aa);-->
<!--}-->
<!--</style>-->
