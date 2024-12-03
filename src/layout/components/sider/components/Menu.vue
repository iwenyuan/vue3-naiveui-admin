<script setup lang="ts">
import type { MenuInst } from 'naive-ui'
import { useMenuStore } from '@/stores/menu'
import { buildMenuOptions } from '@/utils/menu'
import { setting } from '@/setting'

const { accordion } = setting
const menuStore = useMenuStore()
const menuRef = ref<MenuInst | null>(null)

const menuOptions = computed(() => {
  return buildMenuOptions(menuStore.menu)
})
</script>

<template>
  <n-menu
    ref="menuRef"
    v-model="menuStore.activeMenuKey"
    :options="menuOptions"
    :accordion="accordion"
    label-field="title"
    key-field="path"
  />
</template>

<style scoped></style>
