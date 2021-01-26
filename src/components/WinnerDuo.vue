<template>
  <div class="text-center">
    <v-dialog v-model="winnerDuo.open">
      <v-card class="winners">
        <v-toolbar class="white--text winnersBackground">
          <v-row justify="center">
            <span class="white--text title">Ganhadoress!!</span>
          </v-row>
        </v-toolbar>
        <v-card-text class="mt-4">
          <v-row justify="center" align="center">
            <span class="white--text title">
              {{ winnerDuo.winners.player1 }}
              <br />
              {{ winnerDuo.winners.player2 }}
            </span>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="white--text" text small @click="handleClose">
            OK!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>
.winners {
  background: linear-gradient(180deg, #ff8a00, #da1b60);
}

.winnersBackground {
  background: linear-gradient(0deg, #ff8a00, #da1b60);
}
</style>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'WinnerDuo',
  components: {},
  data: () => ({}),
  computed: {
    ...mapState('user', ['winnerDuo']),
  },
  methods: {
    ...mapMutations('user', ['updateWinnerDuo', 'clearGame']),
    async handleClose() {
      await this.updateWinnerDuo(false)
      this.$router.push('/').catch((e) => {})
      await this.clearGame()
    },
  },
}
</script>
