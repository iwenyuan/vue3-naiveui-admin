<template>
  <svg>
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
interface SvgIconProps {
  icon: string
  prefix?: string
  color?: string
}

const props = withDefaults(defineProps<SvgIconProps>(), {
  prefix: 'icon',
  color: 'currentColor'
})

const symbolId = computed(() => `#${props.prefix}-${props.icon}`)
</script>
