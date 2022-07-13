<template>
  <div>
    <div>
      <!-- As a link -->
      <b-navbar variant="faded" type="light">
        <b-navbar-brand to="/">Home</b-navbar-brand>
        <b-navbar-brand to="/albums">Albums</b-navbar-brand>
      </b-navbar>
    </div>
    <Content></Content>
  </div>
</template>

<script>
import Content from "@/components/photoGalleryModule/layout/index.vue"

export default {
  components: {
    Content
  },
  name: 'Albums'
}
</script>
