<template>
  <section class="character">
    <div class="mb-4 h-12 flex">
      <nuxt-link
        to="/"
        class="h-10 px-5 py-2 text-md text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
        >К списку персонажей</nuxt-link
      >
    </div>
    <Card full>
      <template v-slot:avatar>
        <img
          :src="character.image"
          :alt="character.name"
          class="w-full h-64 sm:w-64 object-cover"
        />
      </template>
      <div class="flex-1 px-6 py-4 flex-shrink-0">
        <h4 class="mb-3 text-xl font-semibold tracking-tight text-gray-800">
          Имя: {{ character.name }}
        </h4>
        <div class="leading-normal text-gray-700">
          Статус: {{ character.status }}
        </div>
        <div class="leading-normal text-gray-700">
          Пол: {{ character.gender }}
        </div>
        <div class="leading-normal text-gray-700">
          Локация: {{ character.location.name }}
        </div>
      </div>
    </Card>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'CharacterInfo',
  components: {
    Card,
  },
  async fetch() {
    const charId = parseInt(this.$route.params.id, 10)
    const character = this.$store.state.characters.find(
      (char) => char.id === charId
    )

    if (character) {
      this.character = character
    } else {
      const { data } = await this.$axios.get(
        `https://rickandmortyapi.com/api/character/${charId}`
      )

      this.character = data
      this.$store.commit('addCharacters', [data])
    }
  },
  data() {
    return {
      character: null,
    }
  },
  head() {
    return {
      title: 'Персонаж ' + this.character?.name,
    }
  },
}
</script>
