<template>
  <v-row fill-height fluid>
    <v-col cols="12">
      <BaseButton @click="handlePlay">Jogar</BaseButton>
    </v-col>
    <v-col cols="12">
      <BaseButton>Regras</BaseButton>
    </v-col>
    <v-col cols="12">
      <BaseButton>Sobre</BaseButton>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'MainMenu',
  components: {
    BaseButton: () => import('@/components/BaseButton'),
  },
  data: () => ({}),
  methods: {
    ...mapMutations('user', ['updateChoosePlayers']),
    handlePlay() {
      this.updateChoosePlayers(true)
    },
    handleRules() {},
    handleAbout() {},
  },
}
</script>
