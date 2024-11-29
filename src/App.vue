<script setup lang="ts">
import { zhCN, dateZhCN } from 'naive-ui'
import { setting } from './setting'
</script>

<template>
  <n-config-provider
    wh-full
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme-overrides="setting.naiveThemeOverrides"
  >
    <n-message-provider>
      <router-view />
    </n-message-provider>
  </n-config-provider>
</template>

<style scoped></style>
