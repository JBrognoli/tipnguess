<template>
  <v-container>
    <v-divider class="white" />
    <v-row justify="center" align="center">
      <h1 class="white--text font-weight-light">TIP N' GUESS</h1>
    </v-row>
    <v-divider class="white" />
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
