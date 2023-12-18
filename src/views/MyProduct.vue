<template>
  <div class="MyProduct">
    <v-container>
      <h1>我的作品</h1>
      <v-row>
        <v-col class="v-col-12 v-col-sm-6 v-col-md-4" v-for="item in items" :key="item.href">
          <v-btn :style="{ 'background-image': `url(${item.image})` }" :href="item.href" target="_blank"
            :title="item.title" :icon="item.icon" style="width: 100%;height: 250px;">
          </v-btn>
          <br>
          {{ item.text }}
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup>
import { computed } from 'vue';

const items = computed(() => {
  return [
    { href: 'https://www.google.com', image: 'src/assets/aa.png', title: '專題1', text: '專題1' },
    { href: 'https://www.google.com', image: 'src/assets/aa.png', title: '專題1', text: '專題1' },
    { href: 'https://www.google.com', image: 'src/assets/aa.png', title: '專題1', text: '專題1' },
    { href: 'https://www.google.com', image: 'src/assets/aa.png', title: '專題1', text: '專題1' },
    { href: 'https://www.google.com', image: 'src/assets/aa.png', title: '專題1', text: '專題1' }
  ]
})
</script>