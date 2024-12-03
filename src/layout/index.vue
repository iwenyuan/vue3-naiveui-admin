<template>
  <n-layout has-sider>
    <Sider />
    <n-layout h-full>
      <Header />
      <TabsView />
      <Content />
      <Footer />
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import Sider from './components/sider/index.vue'
import Header from './components/Header.vue'
import TabsView from './components/tagsView/index.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped></style>
