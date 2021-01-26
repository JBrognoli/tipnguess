const updateChoosePlayers = (state, payload) => {
  state.choosePlayers = payload
}

const updateWordsCard = (state, payload) => {
  state.wordsCard = payload
}

const updateWinnerDuo = (state, payload) => {
  state.winnerDuo = payload
}

// GAME

const updateGameDuos = (state, payload) => {
  state.gameDuos = payload
}

const addGameDuos = (state, payload) => {
  state.gameDuos.push(payload)
}

const removeGameDuos = (state, payload) => {
  state.gameDuos.splice(payload, 1)
}

const givePositions = (state) => {
  const duos = state.gameDuos
  state.firstPosition = []
  state.secondPosition = []
  state.thirdPosition = []
  state.fourthPosition = []
  state.fifthPosition = []
  duos.forEach((el) => {
    el.gamePosition === 6 ? (state.winnerDuo = { open: true, winners: el }) : ''
    el.gamePosition === 1 && state.firstPosition.push(el)
    el.gamePosition === 2 && state.secondPosition.push(el)
    el.gamePosition === 3 && state.thirdPosition.push(el)
    el.gamePosition === 4 && state.fourthPosition.push(el)
    el.gamePosition === 5 && state.fifthPosition.push(el)
  })
}

const clearGame = (state) => {
  state.gameDuos = []
  state.firstPosition = []
  state.secondPosition = []
  state.thirdPosition = []
  state.fourthPosition = []
  state.fifthPosition = []
  state.sixthPosition = []
}

const successRound = (state) => {
  state.gameDuos[state.gameIndex].gamePosition++
}

const setNextDuo = (state) => {
  state.gameIndex < state.gameDuos.length - 1
    ? state.gameIndex++
    : (state.gameIndex = 0)
}

export {
  updateChoosePlayers,
  addGameDuos,
  removeGameDuos,
  updateWordsCard,
  updateGameDuos,
  givePositions,
  clearGame,
  successRound,
  setNextDuo,
  updateWinnerDuo,
}
