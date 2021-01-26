<template>
  <v-card class="fill-height">
    <v-toolbar dark color="primary">
      <v-toolbar-title>
        Próximo:
        {{ gameDuos[gameIndex].player1 }} e {{ gameDuos[gameIndex].player2 }}
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn dark icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item @click="handleAbandon">
              <v-list-item-title>Abandonar partida</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
    <v-card flat height="13vh" class="d-flex justify-center align-center">
      <v-row no-gutters align="center">
        <v-col cols="3">
          <v-subheader class="justify-center font-weight-normal ">
            5.000
          </v-subheader>
        </v-col>
        <v-col cols="1">
          <v-icon color="primary">mdi-arrow-right-bold</v-icon>
        </v-col>
        <v-col cols="8" align="center">
          <v-avatar
            v-for="(duo, index) in firstPosition"
            :key="index"
            :color="duo.color"
            size="36"
            class="mr-2"
          >
            <span class="white--text text-uppercase">
              {{ duo.player1[0] }}{{ duo.player2[0] }}
            </span>
          </v-avatar>
        </v-col>
      </v-row>
    </v-card>
    <v-divider />
    <v-card flat height="13vh" class="d-flex justify-center align-center">
      <v-row no-gutters align="center">
        <v-col cols="3">
          <v-subheader class="justify-center font-weight-normal">
            10.000
          </v-subheader>
        </v-col>
        <v-col cols="1">
          <v-icon color="primary">mdi-arrow-right-bold</v-icon>
        </v-col>
        <v-col cols="8" justify="center" align="center">
          <v-avatar
            v-for="(duo, index) in secondPosition"
            :key="index"
            :color="duo.color"
            size="36"
            class="mr-2"
          >
            <span class="white--text text-uppercase">
              {{ duo.player1[0] }}{{ duo.player2[0] }}
            </span>
          </v-avatar>
        </v-col>
      </v-row>
    </v-card>
    <v-divider />
    <v-card flat height="13vh" class="d-flex justify-center align-center">
      <v-row no-gutters align="center">
        <v-col cols="3">
          <v-subheader class="justify-center font-weight-normal">
            25.000
          </v-subheader>
        </v-col>
        <v-col cols="1">
          <v-icon color="primary">mdi-arrow-right-bold</v-icon>
        </v-col>
        <v-col cols="8" justify="center" align="center">
          <v-avatar
            v-for="(duo, index) in thirdPosition"
            :key="index"
            :color="duo.color"
            size="36"
            class="mr-2"
          >
            <span class="white--text text-uppercase">
              {{ duo.player1[0] }}{{ duo.player2[0] }}
            </span>
          </v-avatar>
        </v-col>
      </v-row>
    </v-card>
    <v-divider />
    <v-card flat height="13vh" class="d-flex justify-center align-center">
      <v-row no-gutters align="center">
        <v-col cols="3">
          <v-subheader class="justify-center font-weight-normal">
            50.000
          </v-subheader>
        </v-col>
        <v-col cols="1">
          <v-icon color="primary">mdi-arrow-right-bold</v-icon>
        </v-col>
        <v-col cols="8" justify="center" align="center">
          <v-avatar
            v-for="(duo, index) in fourthPosition"
            :key="index"
            :color="duo.color"
            size="36"
            class="mr-2"
          >
            <span class="white--text text-uppercase">
              {{ duo.player1[0] }}{{ duo.player2[0] }}
            </span>
          </v-avatar>
        </v-col>
      </v-row>
    </v-card>
    <v-divider />
    <v-card flat height="13vh" class="d-flex justify-center align-center">
      <v-row no-gutters align="center">
        <v-col cols="3">
          <v-subheader class="justify-center font-weight-normal">
            100.000
          </v-subheader>
        </v-col>
        <v-col cols="1">
          <v-icon color="primary">mdi-arrow-right-bold</v-icon>
        </v-col>
        <v-col cols="8" justify="center" align="center">
          <v-avatar
            v-for="(duo, index) in fifthPosition"
            :key="index"
            :color="duo.color"
            size="36"
            class="mr-2"
          >
            <span class="white--text text-uppercase">
              {{ duo.player1[0] }}{{ duo.player2[0] }}
            </span>
          </v-avatar>
        </v-col>
      </v-row>
    </v-card>
    <v-divider />
    <v-card flat height="13vh" class="d-flex justify-center align-center">
      <v-row no-gutters align="center">
        <v-col cols="3">
          <v-subheader class="justify-center font-weight-normal">
            1.000.000
          </v-subheader>
        </v-col>
        <v-col cols="1">
          <v-icon color="primary">mdi-arrow-right-bold</v-icon>
        </v-col>
        <v-col cols="8" justify="center" align="center">
          <v-avatar
            v-for="(duo, index) in sixthPosition"
            :key="index"
            :color="duo.color"
            size="36"
            class="mr-2"
          >
            <span class="white--text text-uppercase">
              {{ duo.player1[0] }}{{ duo.player2[0] }}
            </span>
          </v-avatar>
        </v-col>
      </v-row>
    </v-card>
    <v-bottom-navigation app>
      <v-btn block color="primary" @click="playRound">
        <span class="white--text text-uppercase">Começar rodada</span>
      </v-btn>
    </v-bottom-navigation>
    <WinnerDuo />
    <WordsCard />
  </v-card>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Game',
  components: {
    WordsCard: () => import('../components/WordsCard'),
    WinnerDuo: () => import('../components/WinnerDuo'),
  },
  data: () => ({
    duosAmount: 0,
  }),
  computed: {
    ...mapState('user', [
      'gameDuos',
      'firstPosition',
      'secondPosition',
      'thirdPosition',
      'fourthPosition',
      'fifthPosition',
      'sixthPosition',
      'gameIndex',
    ]),
    activePlayers() {
      return this.$store.state.user.gameDuos[this.gameIndex]
    },
  },
  created() {
    this.duosAmount = this.gameDuos.length - 1
  },
  methods: {
    ...mapMutations('user', ['updateWordsCard', 'clearGame']),
    playRound() {
      this.updateWordsCard(open)
    },
    handleFinishGame() {},
    handleAbandon() {
      this.clearGame()
      this.$router.push('/').catch((err) => {})
    },
  },
}
</script>
