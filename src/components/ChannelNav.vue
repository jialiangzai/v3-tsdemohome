<script setup lang="ts">
import { ref, onMounted, defineProps, defineEmits } from 'vue';
import request from '../utils/request';
import { ChannelResData, ChannelItem } from '@/types/data';
let channelList = ref<ChannelItem[]>([]);
defineProps<{ channelId: number }>();
onMounted(async () => {
  const res = await request.get<any, ChannelResData>('/channels');
  // 给响应式数据赋值
  channelList.value = res.channels;
});
const emit = defineEmits<{
  (e: 'changeChannel', id: number): void;
}>();
</script>

<template>
  <div class="channel-nav">
    <nav class="list">
      <a
        class="item"
        :class="{ active: channelId === item.id }"
        href="javascript:;"
        v-for="(item, i) in channelList"
        :key="item.id"
        @click="emit('changeChannel', item.id)"
      >
        {{ item.name }}
      </a>
    </nav>
  </div>
</template>
