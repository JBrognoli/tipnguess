<template>
  <v-dialog
    v-model="wordsCard"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card class="d-flex flex-column">
      <v-toolbar
        dark
        color="primary"
        class="flex-grow-0 justify-center align-center"
      >
        <v-toolbar-title>
          Palavras-chave
        </v-toolbar-title>
        <v-spacer />
      </v-toolbar>
      <v-container
        class="d-flex flex-column justify-space-between flex-grow-1 flex-shrink-0 ma-0 pa-0"
      >
        <v-row
          class="flex-shrink-1 flex-grow-0"
          no-gutters
          justify="center"
          align="center"
        >
          <v-subheader
            class="font-weight-normal title primary--text text-uppercase justify-center align-center "
          >
            Timer: 90s
          </v-subheader>
        </v-row>
        <v-row
          class="flex-shrink-0 flex-grow-1 pb-10"
          no-gutters
          justify="center"
          align="center"
        >
          <v-divider />
          <v-col
            v-for="(word, index) in words"
            :key="index"
            cols="12"
            justify="center"
            align="center"
          >
            <!-- <span class="text-uppercase font-weight-bold">{{ word }}</span> -->
            <v-alert
              color="primary"
              dark
              outlined
              dense
              class="font-weight-bold mx-2"
            >
              {{ word }}
            </v-alert>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-footer fixed padless>
      <v-row no-gutters justify="center" align="center">
        <v-col cols="6" class="pa-0">
          <v-btn
            large
            class="button"
            tile
            block
            color="error"
            @click="handleFailure"
          >
            <v-icon left>mdi-close</v-icon>
            Failed
          </v-btn>
        </v-col>
        <v-col cols="6" class="pa-0 ">
          <v-btn
            large
            tile
            class="success"
            block
            color="primary"
            @click="handleSuccess"
          >
            <v-icon left>mdi-check</v-icon> Success
          </v-btn>
        </v-col>
      </v-row>
    </v-footer>
  </v-dialog>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'WordsCard',
  data: () => ({
    words: [
      'Abacaxi',
      'Subir',
      'Voar',
      'Lâmpada',
      'Tomada',
      'Cruzeiro',
      'Futebol',
      'Homem',
      'Falhar',
      'Testar',
    ],
  }),
  computed: {
    ...mapState('user', ['wordsCard']),
  },
  methods: {
    ...mapMutations('user', [
      'updateWordsCard',
      'successRound',
      'setNextDuo',
      'givePositions',
    ]),
    async handleClose() {
      await this.setNextDuo()
      await this.givePositions()
      this.updateWordsCard(false)
    },
    handleFailure() {
      this.handleClose()
    },
    async handleSuccess() {
      await this.successRound()
      this.handleClose()
    },
  },
}
</script>
