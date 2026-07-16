<template>
  <section id="home" class="relative flex min-h-[92svh] items-center pt-24">
    <div class="soft-grid absolute inset-0 -z-20" />
    <div class="absolute left-[-8rem] top-24 -z-10 size-80 rounded-full bg-[#ded8ff]/60 blur-3xl dark:bg-[#6558d8]/15" />
    <div class="absolute right-[-7rem] top-1/2 -z-10 size-72 rounded-full bg-[#ffd9c5]/60 blur-3xl dark:bg-[#d8784d]/10" />

    <div class="page-wrap grid items-center gap-14 py-16 lg:grid-cols-[1.15fr_.85fr]">
      <div>
        <Badge class="mb-6 gap-2 bg-card/70">
          <span class="size-2 rounded-full bg-emerald-500" />
          Available for new adventures
        </Badge>

        <h1 class="max-w-3xl text-5xl font-bold leading-[1.08] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
          ทุกก้าวที่ผ่านมา
          <span class="block text-primary">พาฉันมาถึงตรงนี้</span>
        </h1>

        <p class="mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
          สวัสดีครับ ผมอาร์ม — Full-Stack Developer ที่เชื่อว่างานที่ดี
          เริ่มจากความเข้าใจปัญหา และจบลงด้วยประสบการณ์การใช้งานที่เรียบง่ายและเป็นธรรมชาติ
        </p>

        <div class="mt-9 flex flex-wrap gap-3">
          <Button @click="goTo('#journey')">
            เริ่มออกเดินทาง
            <ArrowDownRight class="size-4" />
          </Button>
          <Button variant="outline" @click="goTo('#work')">ดูผลงาน</Button>
        </div>
      </div>

      <div class="relative mx-auto w-full max-w-sm">
        <div class="absolute -right-5 -top-6 rotate-6 rounded-2xl border bg-card px-4 py-3 shadow-lg">
          <Sparkles class="size-5 text-primary" />
        </div>
        <div class="aspect-[4/5] overflow-hidden rounded-[2.5rem] border bg-secondary p-4 shadow-xl shadow-black/5">
          <img
            src="/images/Arm.png"
            alt="Arm — Full-Stack Developer"
            class="h-full w-full rounded-[1.8rem] object-cover"
          />
        </div>
        <div class="absolute -bottom-5 -left-2 flex items-center gap-2 rounded-2xl border bg-card px-4 py-3 text-sm shadow-lg sm:-left-5">
          <MapPin class="size-4 text-primary" />
          Saimai, Bangkok, Thailand
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowDownRight, MapPin, Sparkles } from '@lucide/vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const goTo = (id: string) => document.querySelector(id)?.scrollIntoView()
</script>
