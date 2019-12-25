<template>
  <v-app>
    <v-img src="https://wallpaperaccess.com/full/89738.jpg" aspect-ratio="1">
      <v-content>
        <router-view />
      </v-content>
    </v-img>
    <v-footer></v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data: () => ({}),
}
</script>
