<template>
  <a v-if="type === 'twitch'"
    class="bg-gradient-to-r from-purple-500 to-purple-700 p-2 size-12 md:size-16 flex items-center justify-center rounded-full hover:scale-110 transition-transform hover:bg-white"
    href="https://twitch.tv/" target="_blank" aria-label="Twitch" title="Ir a Twitch de midudev">
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 48 48">
      <path fill="#8343c8"
        d="M41.754,27.958l-8.455,9.699C33.109,37.875,32.834,38,32.545,38H26.37	c-0.239,0-0.47,0.085-0.651,0.241l-6.438,5.519C19.1,43.915,18.869,44,18.63,44H17c-0.552,0-1-0.448-1-1v-4c0-0.552-0.448-1-1-1H7	c-0.552,0-1-0.448-1-1V15.943c0-0.156,0.036-0.309,0.106-0.448l3.981-7.943C10.257,7.214,10.603,7,10.981,7H41c0.552,0,1,0.448,1,1	v19.301C42,27.543,41.913,27.776,41.754,27.958z">
      </path>
      <path fill="#fafafa"
        d="M39,26.369c-1.667,1.877-3.333,3.754-5,5.631c-2.333,0-4.667,0-7,0c-2.333,2-4.667,4-7,6c0-2,0-4,0-6	c-2.667-0.008-5.333-0.016-8-0.024C12,24.65,12,17.325,12,10c9,0,18,0,27,0C39,15.456,39,20.912,39,26.369z">
      </path>
      <rect width="3" height="10" x="21" y="16" fill="#8343c8"></rect>
      <rect width="3" height="10" x="30" y="16" fill="#8343c8"></rect>
    </svg>
  </a>
  <a v-if="type === 'instagram'"
    class="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 p-2 size-12 md:size-16 flex items-center justify-center rounded-full hover:scale-110 transition-transform hover:bg-white"
    href="https://instagram.com" target="_blank" aria-label="Instagram" title="Ir a Instagram">
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 48 48">
      <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#f09433;stop-opacity:1" />
        <stop offset="25%" style="stop-color:#e6683c;stop-opacity:1" />
        <stop offset="50%" style="stop-color:#dc2743;stop-opacity:1" />
        <stop offset="75%" style="stop-color:#cc2366;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#bc1888;stop-opacity:1" />
      </linearGradient>
      <path fill="url(#instagram-gradient)"
        d="M34 4H14C8.477 4 4 8.477 4 14v20c0 5.523 4.477 10 10 10h20c5.523 0 10-4.477 10-10V14c0-5.523-4.477-10-10-10z">
      </path>
      <path fill="#fff"
        d="M24 15a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 14a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm8-14.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z">
      </path>
    </svg>
  </a>
  <a v-if="type === 'youtube'"
    class="bg-gradient-to-r from-red-600 to-red-800 p-2 size-12 md:size-16 flex items-center justify-center rounded-full hover:scale-110 transition-transform hover:bg-white"
    href="https://youtube.com" target="_blank" aria-label="YouTube" title="Ir a YouTube">
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 48 48">
      <path fill="#FF0000"
        d="M44 14.5c0-3.5-2.8-6.5-6.3-6.5H10.3C6.8 8 4 11 4 14.5v19c0 3.5 2.8 6.5 6.3 6.5h27.4c3.5 0 6.3-3 6.3-6.5v-19z">
      </path>
      <path fill="#fff" d="M20 17l10 7-10 7V17z"></path>
    </svg>
  </a>
  <a v-if="type === 'linkedin'"
    class="bg-gradient-to-r from-blue-500 to-blue-700 p-2 size-12 md:size-16 flex items-center justify-center rounded-full hover:scale-110 transition-transform hover:bg-white"
    href="https://linkedin.com" target="_blank" aria-label="LinkedIn" title="Ir a LinkedIn">
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 48 48">
      <path fill="#0077B5" d="M41 4H7C5.3 4 4 5.3 4 7v34c0 1.7 1.3 3 3 3h34c1.7 0 3-1.3 3-3V7c0-1.7-1.3-3-3-3z">
      </path>
      <path fill="#fff"
        d="M14 19h6v19h-6V19zm3-9a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm9 9h6v2.7c1.3-2 4.3-2.7 6-2.7 4.3 0 6 2.7 6 7v12h-6v-10c0-2-1-3-3-3s-3 1-3 3v10h-6V19z">
      </path>
    </svg>
  </a>
  <a v-if="type === 'github'"
    class="bg-gradient-to-r from-gray-700 to-gray-900 p-2 size-12 md:size-16 flex items-center justify-center rounded-full hover:scale-110 transition-transform hover:bg-white"
    href="https://github.com" target="_blank" aria-label="GitHub" title="Ir a GitHub">
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 48 48">
      <path fill="#181717"
        d="M24 4C12.95 4 4 12.95 4 24c0 8.84 5.73 16.33 13.68 18.97 1 .18 1.32-.43 1.32-.96v-3.36c-5.57 1.2-6.75-2.68-6.75-2.68-.91-2.3-2.22-2.91-2.22-2.91-1.81-1.24.14-1.22.14-1.22 2 .14 3.06 2.05 3.06 2.05 1.78 3.05 4.67 2.17 5.81 1.66.18-1.29.7-2.17 1.27-2.67-4.45-.51-9.13-2.22-9.13-9.88 0-2.18.78-3.96 2.05-5.36-.2-.51-.89-2.56.2-5.33 0 0 1.68-.54 5.5 2.05a19.2 19.2 0 0 1 10 0c3.82-2.59 5.5-2.05 5.5-2.05 1.09 2.77.4 4.82.2 5.33 1.27 1.4 2.05 3.18 2.05 5.36 0 7.68-4.69 9.37-9.14 9.87.72.62 1.36 1.85 1.36 3.73v5.52c0 .53.32 1.14 1.33.95C38.27 40.33 44 32.84 44 24 44 12.95 35.05 4 24 4z">
      </path>
    </svg>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SocialMediaButtons',
  components: {},
  props: {
    type: {
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

<style scoped></style>