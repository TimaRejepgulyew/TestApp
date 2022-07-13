<template>
  <div>
    <div>
      <!-- As a link -->
      <b-navbar variant="faded" type="light">
        <b-navbar-brand class="link link--default" to="/">Home</b-navbar-brand>
        <b-navbar-brand class="link link--albums" to="/albums">Albums</b-navbar-brand>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
