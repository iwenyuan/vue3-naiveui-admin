<script setup lang="ts">
import { setting } from '@/setting'

const tabsView = { setting }

const scrollbarRef = ref()
const showWrap = ref(false)
const moveTo = (type: string) => {
  const width = type === 'left' ? -200 : 200
  scrollbarRef.value?.scrollBy({ left: width, behavior: 'smooth' })
}
</script>

<template>
  <section flex p-10 items-center>
    <n-button v-show="showWrap" mr-10 @click="moveTo('left')"> </n-button>

    <n-scrollbar ref="scrollbarRef" v-if="tabsView" :x-scrollable="true"></n-scrollbar>

    <n-button v-show="showWrap" ml-10 @click="moveTo('right')"></n-button>
  </section>
</template>

<style scoped></style>
