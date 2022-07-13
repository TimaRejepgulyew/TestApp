<template>
    <div>
        <b-img :src="url" fluid :alt="title"></b-img>
        <b-row>
            <b-col>
                {{ title }}
            </b-col>
            <b-col cols="2">
                <FavoriteIndicator @click.native="toogleSetStar" :isFavorite="hasStar"></FavoriteIndicator>
            </b-col>

        </b-row>
    </div>
</template>

<script>
import FavoriteIndicator from "./favorite-indicator.vue"
export default {
    components: {
        FavoriteIndicator
    },
    props: {
        albumId: Number,
        id: Number,
        url: String,
        title: String,
    },
    computed: {
        hasStar() {
            return this.$store.getters["hasStar"](this.id)
        }
    },
    methods: {
        toogleSetStar() {
            this.$store.commit("TOOGLE_SET_STAR", this.id)
        }
    }

}


</script>