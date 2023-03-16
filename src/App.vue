<script setup lang="ts">
import './styles/index.css';
import ChannelNav from './components/ChannelNav.vue';
import ArticleList from './components/ArticleList.vue';
import { onMounted, ref } from 'vue';
const channelId = ref(0);
</script>

<template>
  <ChannelNav :channelId="channelId" @change-channel="channelId = $event" />
  <ArticleList :channelId="channelId" />
</template>
