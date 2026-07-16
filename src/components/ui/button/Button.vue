<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { computed, useAttrs } from 'vue'
import { cn } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

const props = withDefaults(
  defineProps<{
    variant?: 'default' | 'outline' | 'ghost'
    size?: 'default' | 'icon'
    as?: string
    class?: string
  }>(),
  { as: 'button', variant: 'default', size: 'default' },
)

const attrs = useAttrs()
const classes = computed(() =>
  cn(
    'inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    props.variant === 'default' && 'bg-primary text-primary-foreground shadow-sm hover:opacity-90',
    props.variant === 'outline' && 'border bg-card text-card-foreground hover:bg-secondary',
    props.variant === 'ghost' && 'text-foreground hover:bg-secondary',
    props.size === 'default' && 'h-11 px-5',
    props.size === 'icon' && 'size-10',
    props.class,
  ),
)
</script>

<template>
  <Primitive :as="props.as" v-bind="attrs" :class="classes">
    <slot />
  </Primitive>
</template>
