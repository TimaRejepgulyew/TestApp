<template>
    <b-container fluid class="p-4">
        <b-row if="!!photos && photo.length > 0">
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
    computed: {
        photos() {
            console.log(this.albumId);
            return Photos.filter(({ albumId }) => albumId === this.albumId)
        }
    }
}


</script>