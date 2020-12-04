export const state = () => ({
  characters: [],
})

export const mutations = {
  addCharacters: (state, data) => {
    state.characters = state.characters.concat(data)
  },
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('fetchData')
  },

  async fetchData({ commit }, page = 1) {
    const { data } = await this.$axios.get(`character/?page=${page}`)
    commit('addCharacters', data.results)
  },
}
