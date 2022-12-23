<template>
    <section>
        <h1>{{experience.name}}</h1>
        <div style="display: flex; justify-content: left; gap: 1rem;">
            <img :src="`/images/${experience.image}`" :alt="experience.name">
            <div v-if="experience.ingredients" class="ingredients">
                <p
                    v-for="(line,lineNumber) of experience.ingredients.split('\n')"
                    v-bind:key="lineNumber"
                style="padding: 0; margin: 0;">
                    {{ line }}<br/>
                </p>
            </div>
        </div>
        <p
            v-for="(line,lineNumber) of experience.description.split('\n')"
            v-bind:key="lineNumber" >
          {{ line }}<br/>
        </p>
    </section>
</template>
<script>
import sourceData from '@/data.json'
export default {
    props:{
        id: {type: Number, required: true,},
        experienceSlug: {type: String, required: true,}
    },
    computed:{
        destination(){
            return sourceData.destinations.find(
                destination => destination.id === this.id
            )
        },
        experience(){
            return this.destination.experiences.find(
                experience=> experience.slug === this.experienceSlug
            )
        }
    }
}
</script>
<style>
.ingredients {
    max-height: 350px;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.2rem 1rem;
    flex-wrap: wrap;
}
</style>
