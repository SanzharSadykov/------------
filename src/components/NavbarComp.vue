<template>
    <div class="bg-black w-full">
        <div class="container mx-auto">  
            <div class="flex items-center justify-between pt-5 pb-3">
                <router-link to="/"><img src="../assets/logo.png" alt=""></router-link>
                <router-link class="text-white flex items-center" to="/favourites">
                    <i class="fa-regular fa-heart"></i>
                    <p class="ml-2">Избранное {{ objectsCount }} </p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: mapGetters(['objectsCount'])
}
</script>