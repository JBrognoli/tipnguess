<template>
  <v-row justify="center">
    <v-dialog v-model="choosePlayers" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="handleClose">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Participantes</v-toolbar-title>

          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark icon @click="handleConfirm">
              <v-icon>mdi-check</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-container>
          <v-row v-if="!fullGame" justify="center" align="center">
            <v-col cols="12" justify="center" align="center">
              <h3 class="primary--text">Adicionar dupla:</h3>

              <v-text-field
                v-model="player1"
                label="Jogador 1"
                required
                prepend-icon="mdi-account"
              ></v-text-field>
              <v-text-field
                v-model="player2"
                label="Jogador 2"
                required
                prepend-icon="mdi-account-outline"
              ></v-text-field>
              <v-btn block :disabled="!isValid" color="primary" @click="addDuo">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-alert v-else outlined type="info"> A partida está cheia! 4/4 </v-alert>
          <v-row>
            <v-col v-for="(duo, index) in gameDuos" :key="index" cols="12" class="ma-0 pa-0">
              <v-subheader>
                <span class="primary--text font-weight-medium"
                  >Dupla {{ index + 1 }}: {{ duo.player1 }} e {{ duo.player2 }}</span
                >
                <v-spacer />
                <v-btn icon @click="removeDuo(index)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-subheader>
              <v-divider />
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'ChoosePlayers',
  data: () => ({
    valid: false,
    fodase: { player: 'tryout', player2: 'tinder' },
    player1: '',
    player2: '',
  }),
  computed: {
    ...mapState('user', ['choosePlayers', 'gameDuos']),
    isValid() {
      if (this.player1 !== '' && this.player2 !== '' && !this.fullGame) return true
      return false
    },
    fullGame() {
      if (this.gameDuos.length >= 4) return true
      return false
    },
  },
  methods: {
    ...mapMutations('user', ['updateChoosePlayers', 'addGameDuos', 'removeGameDuos']),
    handleClose() {
      this.updateChoosePlayers(false)
    },
    handleConfirm() {
      const whosPlaying = this.gameDuos
      console.log('whosPLaying?', whosPlaying)
    },
    async addDuo() {
      const duo = {
        player1: this.player1,
        player2: this.player2,
      }
      await this.addGameDuos(duo)
      this.player1 = ''
      this.player2 = ''
    },
    removeDuo(index) {
      this.removeGameDuos(index)
    },
  },
}
</script>
