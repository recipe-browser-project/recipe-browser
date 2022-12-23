<template>
    <div>
<!--    <section class="destination">-->
    <section v-if="destination" class="home">
        <h1>{{destination.name}}</h1>
        <div class="destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.name" />
            <p>{{ destination.description }}</p>
        </div>
    </section>
    <section class="experiences">
        <h2><h2>Delicious meal recipes for {{destination.name}}</h2></h2>
        <div class="cards">
            <router-link
                v-for="experience in destination.experiences.slice(0, 3)"
                :key="experience.slug"
                :to="{name: 'experience.show', params:{experienceSlug: experience.slug}}"
            >
                <ExperienceCard
                    :experience="experience"
                />
            </router-link>
        </div>
        <router-view />
    </section>
    </div>
</template>
<script>
import sourceData from "@/data.json";
import ExperienceCard from "@/components/ExperienceCard.vue";
export default {
    components: { ExperienceCard },
    props: {
        id: { type: Number, required: true },
    },
    computed:{
        // destinationId(){
        //     return parseInt(this.$route.params.id)
        // },
        destination() {
            return sourceData.destinations.find(
                (destination) => destination.id === this.id
            );
        },
    },
};
</script>
