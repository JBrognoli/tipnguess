<template>
  <v-app>
    <v-img
      v-if="this.$route.name === 'home'"
      src="https://wallpaperaccess.com/full/89738.jpg"
      aspect-ratio="1"
    >
      <v-content>
        <router-view />
      </v-content>
    </v-img>
    <v-content v-else>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data: () => ({}),
  created() {},
  methods: {},
}
</script>

<style></style>
