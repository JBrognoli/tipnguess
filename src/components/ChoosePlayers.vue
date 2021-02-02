<template>
  <v-row justify="center">
    <v-dialog
      v-model="choosePlayers"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
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
              <v-select
                v-model="color"
                :items="colors"
                label="Cor"
                item-value="value"
                item-text="label"
                :menu-props="{ offsetY: true }"
                required
                prepend-icon="mdi-format-color-fill"
              ></v-select>
              <v-btn block :disabled="!isValid" color="primary" @click="addDuo">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-alert v-else outlined type="info">
            A partida está cheia! 4/4
          </v-alert>
          <v-row>
            <v-col
              v-for="(duo, index) in gameDuos"
              :key="index"
              cols="12"
              class="ma-0 pa-0"
            >
              <v-subheader>
                <span class="primary--text font-weight-medium"
                  >Dupla {{ index + 1 }}: {{ duo.player1 }} e
                  {{ duo.player2 }}</span
                >
                <v-spacer />
                <v-avatar :color="duo.color" size="18"></v-avatar>
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
    player1: 'Batata',
    player2: '',
    color: '',
    colors: [
      { value: 'red', label: 'Vermelho' },
      { value: 'yellow', label: 'Amarelo' },
      { value: 'orange', label: 'Laranja' },
      { value: 'black', label: 'Preto' },
    ],
  }),
  computed: {
    ...mapState('user', ['choosePlayers', 'gameDuos']),
    isValid() {
      if (this.player1 !== '' && this.player2 !== '' && !this.fullGame)
        return true
      return false
    },
    fullGame() {
      if (this.gameDuos.length >= 4) return true
      return false
    },
  },
  methods: {
    ...mapMutations('user', [
      'updateChoosePlayers',
      'addGameDuos',
      'removeGameDuos',
      'updateGameDuos',
      'givePositions',
    ]),
    handleClose() {
      this.updateChoosePlayers(false)
    },
    async handleConfirm() {
      const whosPlaying = this.gameDuos
      const players = []
      whosPlaying.forEach((element, index) => {
        const duo = {
          player1: element.player1,
          player2: element.player2,
          color: element.color,
          duoIndex: index,
          gamePosition: 1,
        }
        players.push(duo)
      })
      await this.updateGameDuos(players)
      await this.givePositions()
      this.handleClose()
      this.$router.push('/game').catch((err) => {})
    },
    async addDuo() {
      const duo = {
        player1: this.player1,
        player2: this.player2,
        color: this.color,
      }
      await this.addGameDuos(duo)
      this.player1 = ''
      this.player2 = ''
      this.color = ''
    },
    removeDuo(index) {
      this.removeGameDuos(index)
    },
  },
}
</script>
