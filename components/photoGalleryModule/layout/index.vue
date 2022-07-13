<template>
    <div>
        <b-container class="scrool" fluid>
            <b-row>
                <b-col cols="2">
                    <b-list-group v-if="!!users && users.length">
                        <b-list-group-item v-for="user in users" :key="user.id">
                            <strong>{{ user.name }}</strong>
                            <NavList @changeAlbum="setAlbum" :userId="user.id"></NavList>
                        </b-list-group-item>
                    </b-list-group>
                </b-col>
                <b-col>
                    <PhotoList v-if="albumId !== null" :albumId="albumId"></PhotoList>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import Users from "@/fetchData/users"
import NavList from "./navList.vue"
import PhotoList from "../photoList"
export default {
    components: {
        NavList,
        PhotoList
    },
    data() {
        return {
            albumId: null
        }
    },
    methods: {
        setAlbum(id) {
            this.albumId = id
        }
    },
    computed: {
        users() {
            return Users
        }
    }
}
</script>