<script setup lang="ts">
import { ArticleItem, ArticleResData } from '@/types/data';
import { ref, watch } from 'vue';
import request from '../utils/request';
const props = defineProps<{ channelId: number }>();
const articles = ref<ArticleItem[]>([]);
watch(
  () => props.channelId,
  async () => {
    const res = await request.get<any, ArticleResData>(`/articles`, {
      params: {
        channel_id: props.channelId,
        timestamp: Date.now(),
      },
    });
    articles.value = res.results;
  },
  { immediate: true }
);
</script>

<template>
  <div class="article-list">
    <div class="article-item" v-for="item in articles" :key="item.art_id">
      <p class="title">{{ item.title }}</p>
      <img
        v-for="(src, i) in item.cover.images"
        :key="i"
        class="img"
        :src="src"
        alt=""
      />
      <div class="info">
        <span>{{ item.aut_name }}</span>
        <span>{{ item.comm_count }}评论</span>
        <span>{{ item.pubdate }}</span>
      </div>
    </div>
  </div>
</template>
