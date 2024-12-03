<script setup lang="ts">
import { useTagsStore } from '@/stores/tags'
import { useFullscreen } from '@vueuse/core'
import { calcHeight } from '@/utils/help'

// 内容全屏
const contentRef = ref<HTMLElement | null>(null)

// 需要keepalive缓存的组件
const tagStore = useTagsStore()
const keepAliveNames = computed(() => {
  return tagStore.tags.filter((item) => item.keepAlive).map((item) => item.name) as string[]
})

// 全屏参数
const { isFullscreen, toggle } = useFullscreen(contentRef)

watch(isFullscreen, () => {
  if (!isFullscreen.value) tagStore.setFullContent(isFullscreen.value)
})

watch(
  () => tagStore.fullContent,
  () => {
    if (tagStore.fullContent) toggle()
  }
)
</script>

<template>
  <n-layout-content ref="contentRef" :style="`height: ${calcHeight}`">
    <n-back-top :visibility-height="100" bottom="120"></n-back-top>
    <main :style="`min-height: ${calcHeight('main')}`">
      <router-view v-slot="{ Component, route }">
        <Transition>
          <KeepAlive :include="keepAliveNames">
            <component
              v-if="tagStore.refreshLoading"
              :is="Component"
              :key="route.fullPath"
            ></component>
          </KeepAlive>
        </Transition>
      </router-view>
    </main>
  </n-layout-content>
</template>

<style scoped></style>
