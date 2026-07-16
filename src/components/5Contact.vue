<script setup lang="ts">
import { ArrowUpRight, Code2, Mail } from '@lucide/vue'
import { Button } from '@/components/ui/button'
</script>

<template>
  <footer id="contact" class="py-24 sm:py-32">
    <div class="page-wrap">
      <div class="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-16 text-primary-foreground sm:px-12">
        <div class="absolute -right-16 -top-16 size-56 rounded-full border border-white/20" />
        <div class="absolute -right-6 -top-6 size-32 rounded-full border border-white/20" />

        <p class="text-sm font-bold uppercase tracking-[0.2em] opacity-70">Next stop</p>
        <h2 class="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">
          มาสร้างเรื่องราวบทต่อไปด้วยกัน
        </h2>
        <p class="mt-5 max-w-xl leading-7 opacity-75">
          มีไอเดีย โปรเจกต์ หรือแค่อยากทักทาย ส่งข้อความมาได้เสมอ
        </p>

        <div class="mt-9 flex flex-wrap gap-3">
          <Button as="a" href="mailto:hello@onlyarm.dev" class="bg-white text-[#332d77] hover:bg-white/90">
            <Mail class="size-4" />
            papontee.anosri@gmail.com
            <ArrowUpRight class="size-4" />
          </Button>
          <Button
            as="a"
            href="https://github.com/onlyarm-dev"
            target="_blank"
            rel="noreferrer"
            class="border border-white/25 bg-transparent text-white hover:bg-white/10"
          >
            <Code2 class="size-4" />
            GitHub
          </Button>
        </div>
      </div>

      <div class="mt-8 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <p>© {{ new Date().getFullYear() }} OnlyArm. Made with care.</p>
        <p>To be continued..</p>
      </div>
    </div>
  </footer>
</template>
