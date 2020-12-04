<template>
  <div :class="classes">
    <slot name="avatar"></slot>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    full: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return this.full
        ? 'w-full max-w-xl overflow-hidden rounded-lg shadow-lg sm:flex mx-auto'
        : 'card flex flex-col items-center p-10 shadow-md rounded transition duration-100 ease-in-out hover:shadow-lg'
    },
  },
}
</script>
<style>
.card {
  color: #333;
  height: 100%;
}
</style>
