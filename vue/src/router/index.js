import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/Home.vue";
import Recipe from "@/views/Recipe.vue";
import Discover from "@/views/Discover.vue";
import Calorie_friendly from "@/views/Calorie_friendly.vue";

const routes=[
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: Recipe},
    {path: '/discover', name: 'Discover', component: Discover},
    {path: '/calorie_friendly', name: 'Calorie_friendly', component: Calorie_friendly}
]
const router=createRouter({
    history: createWebHistory(),
    routes
})
export default router
