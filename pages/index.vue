<template>
  <div class="grid custom-grid gap-5">
    <template v-for="(character, indx) of characters">
      <nuxt-link :key="character.id" :to="`/character/${character.id}`">
        <Card
          v-observe-visibility="
            indx === characters.length - 1 ? loadData : false
          "
          :char="character"
        >
          <template v-slot:avatar>
            <img
              :src="character.image"
              :alt="character.name"
              class="h-32 w-32 rounded-full"
            />
          </template>
          <h4 class="text-2xl text-center font-semibold">
            {{ character.name }}
          </h4>
        </Card>
      </nuxt-link>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Card from '~/components/Card'

export default {
  name: 'HomePage',
  components: {
    Card,
  },
  data: () => ({
    page: 1,
  }),
  computed: mapState({
    characters: (state) => state.characters,
  }),
  methods: {
    loadData(isVisible) {
      if (isVisible) {
        this.page += 1
        this.$store.dispatch('fetchData', this.page)
      }
    },
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.custom-grid {
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
}
</style>
