const updateChoosePlayers = (state, payload) => {
  state.choosePlayers = payload
}

// GAME DUOS

const addGameDuos = (state, payload) => {
  console.log('payload', payload)
  state.gameDuos.push(payload)
}

const removeGameDuos = (state, payload) => {
  state.gameDuos.splice(payload, 1)
}

export { updateChoosePlayers, addGameDuos, removeGameDuos }
