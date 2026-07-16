<template>
  <section id="work" class="bg-muted/60 py-24 sm:py-32">
    <div class="page-wrap">
      <div class="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p class="text-sm font-bold uppercase tracking-[0.2em] text-primary">Selected work</p>
          <h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">เหตุการณ์ระหว่างทาง</h2>
        </div>
        <p class="max-w-sm text-sm leading-7 text-muted-foreground">
          Unlocked Memories.
        </p>
      </div>

      <div class="mt-12 grid gap-5 md:grid-cols-3">
        <Card
          v-for="project in projects"
          :key="project.title"
          class="group overflow-hidden p-3 transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div :class="['relative grid aspect-[4/3] place-items-center overflow-hidden rounded-[1.25rem] bg-gradient-to-br', project.tone]">
            <template v-if="project.images?.length">
              <img
                :src="project.images[slideIndex(project.title)]"
                :alt="project.title"
                class="h-full w-full cursor-zoom-in object-cover transition duration-300 group-hover:scale-105"
                @click="openViewer(project.images, slideIndex(project.title))"
              />
              <template v-if="project.images.length > 1">
                <button
                  type="button"
                  aria-label="รูปก่อนหน้า"
                  class="absolute left-2 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-full bg-background/80 opacity-0 shadow transition hover:bg-background group-hover:opacity-100"
                  @click.stop="slideStep(project.title, project.images, -1)"
                >
                  <ChevronLeft class="size-4" />
                </button>
                <button
                  type="button"
                  aria-label="รูปถัดไป"
                  class="absolute right-2 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-full bg-background/80 opacity-0 shadow transition hover:bg-background group-hover:opacity-100"
                  @click.stop="slideStep(project.title, project.images, 1)"
                >
                  <ChevronRight class="size-4" />
                </button>
                <div class="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
                  <button
                    v-for="(_, i) in project.images"
                    :key="i"
                    type="button"
                    :aria-label="`ไปที่รูปที่ ${i + 1}`"
                    :class="['size-1.5 rounded-full transition', i === slideIndex(project.title) ? 'bg-white' : 'bg-white/50 hover:bg-white/80']"
                    @click.stop="current[project.title] = i"
                  />
                </div>
              </template>
            </template>
            <Image v-else class="size-8 opacity-40" />
          </div>
          <div class="p-4 pb-3">
            <h3 class="font-bold">{{ project.title }}</h3>
            <p class="mt-1 text-sm text-muted-foreground">{{ project.type }} · {{ project.year }}</p>
          </div>
        </Card>
      </div>
    </div>

    <ViewImage
      v-if="viewer"
      :images="viewer.images"
      :start="viewer.index"
      @close="viewer = null"
    />
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ChevronLeft, ChevronRight, Image } from '@lucide/vue'
import { Card } from '@/components/ui/card'
import { ViewImage } from '@/components/ui/viewImage'

const current = reactive<Record<string, number>>({})

function slideIndex(title: string) {
  return current[title] ?? 0
}

function slideStep(title: string, images: string[], dir: number) {
  current[title] = (slideIndex(title) + dir + images.length) % images.length
}

const viewer = ref<{ images: string[]; index: number } | null>(null)

function openViewer(images: string[], index: number) {
  viewer.value = { images, index }
}

interface ProjectItem {
  title: string
  type: string
  year: string
  images?: string[]
  tone: string
}

const projects: ProjectItem[] = [
  {
    title: 'AWS Summit Bangkok 2026',
    type: 'Queen Sirikit National Convention Center',
    year: '2026',
    images: [
      '/images/aws/AWS summit 2026.png',
      '/images/aws/aws.png',
      '/images/aws/kiro.jpg',
    ],
    tone: 'from-[#ded8ff] to-[#f1efff] dark:from-[#393258] dark:to-[#252238]',
  },
  {
    title: 'Project One',
    type: 'Side Project',
    year: '2026',
    tone: 'from-[#d3eee4] to-[#eef8f4] dark:from-[#29483d] dark:to-[#202f2a]',
  },
  {
    title: 'Project Two',
    type: 'Side Project',
    year: '2026',
    tone: 'from-[#ffe1d1] to-[#fff2eb] dark:from-[#553528] dark:to-[#342821]',
  },
]
</script>
