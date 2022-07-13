<template>
    <b-list-group v-if="!!albums && albums.length">
        <b-list-group-item @click="$emit('changeAlbum', album.id)" v-for="album in albums" :key="album.id">
            {{ album.title }}
        </b-list-group-item>
    </b-list-group>

</template>

<script>

import Albums from "@/fetchData/albums"

export default {
    props: {
        userId: Number
    },
    computed: {
        albums() {
            return Albums.filter(({ userId }) => userId === this.userId)
        }
    }
}
</script>