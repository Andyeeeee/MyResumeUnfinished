<template>
  <div id="MyProduct">
    <v-container>
      <h1>我的作品</h1>
      <!-- 未來作品變多製作內分頁，並使用components(
      專題、切版、API、套版
      |    |     |    |__workpress
      |    |     |_______NODE、SQL
      |    |_____________HTML、PHP
      |__________________Vue、Laravel
      ) -->
      <v-row>
        <v-col class="v-col-12 text-center">
          <v-btn class="MainProduct" />
          <div>專題</div>
        </v-col>
        <v-col class="v-col-12 v-col-sm-6 text-center" v-for="item in   items  " :key="item.to">
          <v-btn :title="item.title" :style="{ 'background-image': `url(${item.src})` }">
          </v-btn>
          <br>
          {{ item.text }}
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup>
import { computed } from 'vue'

const items = computed(() => {
  return [
    { to: '', src: 'src/assets/run.gif', text: 'RWD餐廳訪切', title: 'RWD餐廳訪切' },
    { to: '', src: 'src/assets/run.gif', text: '番茄鐘', title: '番茄鐘' },
    { to: '', src: 'src/assets/run.gif', text: '打蚊子', title: '打蚊子' },
    { to: '', src: 'src/assets/run.gif', text: '簡易line串接api', title: '簡易line串接api' }
  ]
})
</script>
