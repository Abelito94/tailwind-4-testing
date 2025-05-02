<template>
  <div
    class="flex flex-col h-screen w-screen bg-gradient-to-b from-black via-sky-950 to-gray-800 items-center">
    <div class="text-white flex flex-col items-center justify-center relative">
      <img src="@/assets/images/image.png" alt="gptanime"
        class="w-120 object-cover mask-b-from-45% mask-b-to-80% mask-l-from-80% mask-l-to-100% mask-r-from-80% mask-r-to-100%" />
      <span
        class="absolute hover:text-white hover:bg-sky-400 cursor-pointer text-sky-400 text-xl font-mono px-3 py-1 border rounded-full shadow-sm flex justify-center items-center bg-black/65 bottom-15">@Pequetutis</span>
    </div>
    <div class="flex items-center justify-center gap-4 text-cosita-rica">
      <social-media-buttons type="twitch" />
      <social-media-buttons type="instagram" />
      <social-media-buttons type="youtube" />
      <social-media-buttons type="linkedin" />
      <social-media-buttons type="github" />
    </div>
    <div class="grid grid-cols-3 grid-rows-2 gap-2 w-[50%] mt-4">
      <cursos-card type="react" />
      <cursos-card type="html" />
      <cursos-card type="css" />
      <cursos-card type="node" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SocialMediaButtons from '@/components/SocialMediaButtons.vue';
import CursosCard from '@/components/CursosCard.vue';

export default defineComponent({
  name: 'Home',
  components: {
    SocialMediaButtons,
    CursosCard,
  },
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup() {
    const msgTesting = 'Hello Vite + Vue 3 + TypeScript!';

    return {
      msgTesting,
    };
  },
});
</script>

<style scoped></style>
