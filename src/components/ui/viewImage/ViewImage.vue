<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { ChevronLeft, ChevronRight, X } from '@lucide/vue'

const props = defineProps<{
  images: string[]
  /** index ของรูปที่เปิดเป็นรูปแรก */
  start?: number
}>()

const emit = defineEmits<{ close: [] }>()

const index = ref(props.start ?? 0)

function step(dir: number) {
  index.value = (index.value + dir + props.images.length) % props.images.length
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') emit('close')
  else if (e.key === 'ArrowLeft') step(-1)
  else if (e.key === 'ArrowRight') step(1)
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 z-50 grid place-items-center bg-black/85 p-4 sm:p-10"
      @click.self="emit('close')"
    >
      <img
        :src="images[index]"
        alt=""
        class="max-h-[85vh] max-w-full rounded-xl object-contain shadow-2xl"
      />
      <button
        type="button"
        aria-label="ปิด"
        class="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/25"
        @click="emit('close')"
      >
        <X class="size-5" />
      </button>
      <template v-if="images.length > 1">
        <button
          type="button"
          aria-label="รูปก่อนหน้า"
          class="absolute left-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/25 sm:left-6"
          @click="step(-1)"
        >
          <ChevronLeft class="size-5" />
        </button>
        <button
          type="button"
          aria-label="รูปถัดไป"
          class="absolute right-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/25 sm:right-6"
          @click="step(1)"
        >
          <ChevronRight class="size-5" />
        </button>
      </template>
    </div>
  </Teleport>
</template>
