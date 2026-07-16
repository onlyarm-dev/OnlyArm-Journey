<script setup lang="ts">
import { cn } from '@/lib/utils'

defineProps<{ class?: string }>()
</script>

<template>
  <span
    :class="
      cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold text-muted-foreground',
        $props.class,
      )
    "
  >
    <slot />
  </span>
</template>
