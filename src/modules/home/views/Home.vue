<template>
  <div class="bg-purple-500 text-white p-4">
    <h1>Helouuuuuuuuuuuu</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {},
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup() {
    const msgTesting = 'Hello Vite + Vue 3 + TypeScript!'

    return {
      msgTesting
    }
  }
})
</script>

<style scoped>
</style>
