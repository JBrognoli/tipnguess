<template>
  <v-container class=" align-start" fill-height fluid>
    <v-row>
      <v-col cols="12" justify="center" align="center">
        <v-divider class="title mb-4" />
        <h1 class="title--text font-weight-light">TIP N' GUESS</h1>
        <v-divider class="title mt-4" />
      </v-col>
    </v-row>
    <MainMenu />
    <ChoosePlayers />
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  components: {
    MainMenu: () => import('@/components/MainMenu.vue'),
    ChoosePlayers: () => import('@/components/ChoosePlayers.vue'),
  },
}
</script>
