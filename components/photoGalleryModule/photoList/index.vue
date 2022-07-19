<template>
    <b-container fluid class="p-4">
        <b-row v-if="!!photos && photos.length > 0">
            <b-col class="mb-4" cols="4" v-for="item in photos" :key="item.id">
                <Item :key="item.id" :id="item.id" :title="item.title" :url="item.url" :albumId="item.albumId">
                </Item>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>

import Item from "./item.vue"
import Photos from "@/fetchData/photos.json"
export default {
    components: { Item },
    props: {
        userId: Number,
        albumId: Number,
        title: String,
    },
    async created() {
        const { data } = await fetch()
        this.photos = data
    },
    data() {
        return {
            photos: []
        }
    },

    // computed: {
    //     photos() {
    //         return Photos.filter(({ albumId }) => albumId === this.albumId)
    //     }
    // }
}


</script>