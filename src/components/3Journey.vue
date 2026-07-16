<template>
  <section id="journey" class="journey-section relative overflow-hidden py-24 sm:py-32">
    <div class="page-wrap relative z-10">
      <!-- Journey heading -->
      <div class="grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <p class="text-sm font-extrabold uppercase tracking-[0.18em] text-[#6486df]">My journey</p>
          <h2 class="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            เส้นทางที่ค่อย ๆ
            <span class="relative whitespace-nowrap">
              ชัดเจนขึ้น
              <span class="absolute -bottom-2 left-0 h-1 w-3/4 rounded-full bg-[#ffd767]" />
            </span>
          </h2>
          <p class="mt-6 max-w-xl leading-7 text-muted-foreground">
            ไม่มีทางลัด มีเพียงทุกบทเรียนที่ค่อย ๆ ต่อกันเป็นตัวฉันในวันนี้
          </p>
        </div>

        <div class="pointer-events-none relative -z-10 mx-auto hidden h-56 w-full max-w-sm lg:block" aria-hidden="true">
          <img :src="codingArmLight" alt="" class="absolute left-1/2 top-1/2 h-[30rem] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 object-contain dark:hidden" />
          <img :src="codingArmDark" alt="" class="absolute left-1/2 top-1/2 hidden h-[30rem] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 object-contain dark:block" />
        </div>
      </div>

      <!-- Alternating timeline -->
      <div class="relative mt-16 sm:mt-20 lg:-mx-6">
        <div class="timeline-line absolute bottom-12 left-5 top-10 md:left-1/2" />

        <div
          v-for="(item, index) in journey"
          :key="item.year"
          class="relative mb-14 grid pl-14 md:grid-cols-2 md:pl-0"
        >
          <div
            class="timeline-dot absolute left-0 top-1/2 z-20 grid size-11 -translate-y-1/2 place-items-center rounded-full border-[5px] border-background shadow-md md:left-1/2 md:-translate-x-1/2"
            :style="{ backgroundColor: item.soft, color: item.accent }"
          >
            <component :is="item.icon" class="size-5 stroke-[2.2]" />
          </div>

          <article
            class="journey-card group relative grid overflow-visible rounded-[1.75rem] border bg-card p-3 shadow-[0_12px_35px_rgba(38,43,60,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(38,43,60,0.12)] sm:grid-cols-[1.1fr_1fr]"
            :class="index % 2 ? 'md:col-start-2 md:ml-10' : 'md:mr-10'"
            :style="{ '--accent': item.accent, '--soft': item.soft }"
          >
            <span
              class="card-arrow absolute top-1/2 hidden size-5 -translate-y-1/2 rotate-45 border bg-card md:block"
              :class="index % 2 ? '-left-[11px] border-r-0 border-t-0' : '-right-[11px] border-b-0 border-l-0'"
            />

            <img
              v-if="item.logo"
              :src="item.logo"
              :alt="`โลโก้ ${item.company ?? item.role}`"
              class="absolute right-4 top-4 z-10 size-12 rounded-2xl border bg-white object-contain p-1 shadow-md"
            />

            <!-- ภาพประกอบของการ์ด: มีรูปจริงเป็นสไลด์ ถ้าไม่มีวาดฉากจาก icon -->
            <div class="relative grid h-full min-h-52 place-items-center overflow-hidden rounded-[1.35rem] bg-[var(--soft)]">
              <span class="absolute -right-5 -top-6 size-24 rounded-full bg-white/55" />
              <span class="absolute bottom-4 left-5 size-3 rounded-full bg-[var(--accent)]/30" />
              <span class="absolute right-8 top-5 text-lg text-[var(--accent)]">✦</span>

              <div v-if="sceneSlides[item.scene]" class="absolute inset-0 z-10">
                <img
                  v-for="(slide, i) in sceneSlides[item.scene].images"
                  :key="slide"
                  :src="slide"
                  :alt="sceneSlides[item.scene].alt"
                  class="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
                  :class="i === slideIndex(item.scene) ? 'cursor-zoom-in opacity-100' : 'pointer-events-none opacity-0'"
                  @click="viewer = { images: sceneSlides[item.scene].images, index: slideIndex(item.scene) }"
                />
                <button
                  type="button"
                  class="absolute left-2 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-full bg-black/35 text-white transition hover:bg-black/55"
                  aria-label="สไลด์ก่อนหน้า"
                  @click="slideStep(item.scene, -1)"
                >
                  <ChevronLeft class="size-5" />
                </button>
                <button
                  type="button"
                  class="absolute right-2 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-full bg-black/35 text-white transition hover:bg-black/55"
                  aria-label="สไลด์ถัดไป"
                  @click="slideStep(item.scene, 1)"
                >
                  <ChevronRight class="size-5" />
                </button>
                <div class="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                  <button
                    v-for="(slide, i) in sceneSlides[item.scene].images"
                    :key="`dot-${slide}`"
                    type="button"
                    class="size-2 rounded-full transition"
                    :class="i === slideIndex(item.scene) ? 'bg-white' : 'bg-white/50'"
                    :aria-label="`สไลด์ที่ ${i + 1}`"
                    @click="activeSlide[item.scene] = i"
                  />
                </div>
              </div>

              <div v-else-if="item.scene === 'learn'" class="relative">
                <div class="grid h-20 w-28 place-items-center rounded-lg border-4 border-[#353a4c] bg-[#252a38] shadow-lg">
                  <Code2 class="size-10 text-white" />
                </div>
                <div class="mx-auto h-2 w-32 rounded-b-full bg-[#6b7183]" />
                <BookOpen class="absolute -left-9 -top-5 size-10 text-[var(--accent)]" />
              </div>

              <div v-else class="relative text-[var(--accent)]">
                <div class="rounded-xl border-4 border-[#353a4c] bg-[#252a38] p-5 shadow-lg">
                  <Code2 class="size-12 text-[#f7d46d]" />
                </div>
                <Rocket class="absolute -left-10 -top-6 size-11 fill-white" />
                <Lightbulb class="absolute -right-10 bottom-0 size-12 fill-[#fff4bd]" />
              </div>
            </div>

            <div class="flex flex-col justify-center p-5 sm:p-6">
              <span
                class="w-fit rounded-full px-3 py-1 text-xs font-extrabold text-white"
                :style="{ backgroundColor: item.accent }"
              >
                {{ item.year }}
              </span>
              <h3 class="mt-4 text-2xl font-bold tracking-tight">{{ item.title }}</h3>
              <p class="mt-1 text-sm font-semibold text-muted-foreground">
                {{ item.role }}
                <a
                  v-if="item.company && item.companyUrl"
                  :href="item.companyUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block w-fit transition hover:underline"
                  :style="{ color: item.accent }"
                >
                  {{ item.company }}
                </a>
                <span v-else-if="item.company" class="block">{{ item.company }}</span>
              </p>
              <p class="mt-4 text-sm leading-7 text-muted-foreground">{{ item.detail }}</p>

              <div class="mt-4">
                <p class="text-[11px] font-extrabold uppercase tracking-[0.14em]" :style="{ color: item.accent }">
                  {{ item.upcoming ? 'Skills ที่กำลังเรียนรู้' : 'Skills ที่ได้มา' }}
                </p>
                <div class="mt-2 flex flex-wrap gap-1.5">
                  <span
                    v-for="skill in item.skills"
                    :key="skill"
                    class="rounded-full px-2.5 py-1 text-xs font-bold"
                    :class="item.upcoming && 'border border-dashed'"
                    :style="item.upcoming
                      ? { borderColor: item.accent, color: item.accent }
                      : { backgroundColor: item.soft, color: item.accent }"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      <!-- Small ending note -->
      <div class="relative ml-4 mt-4 w-fit rotate-[-3deg] rounded-2xl border border-dashed border-[#afc8f7] bg-card/90 px-8 py-6 shadow-sm sm:ml-12">
        <span class="absolute -left-3 -top-3 rotate-[-10deg] text-3xl">🙂</span>
        <p class="text-center text-sm font-bold leading-7">
          “ยังไม่เก่งที่สุด<br />
          <span class="border-b-2 border-[#ffd767]">แต่ไม่หยุดพัฒนา</span>”
        </p>
        <Code2 class="absolute -right-3 -top-3 size-7 rotate-12 text-[#6486df]" />
      </div>
    </div>

    <div class="journey-wave absolute inset-x-0 bottom-0 h-28 opacity-70" aria-hidden="true" />

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
import { BookOpen, BriefcaseBusiness, ChevronLeft, ChevronRight, Code2, GraduationCap, Laptop, Lightbulb, Rocket, Sparkles } from '@lucide/vue'
import type { Component } from 'vue'
import { ViewImage } from '@/components/ui/viewImage'

const codingArmDark = '/images/Coding Arm1.png'
const codingArmLight = '/images/Coding Arm2.png'
const kosDesignLogo = '/images/kos/kos-logo.png'
const jibLogo = '/images/jib/jib-logo.jpg'

const sceneSlides: Record<string, { images: string[]; alt: string }> = {
  start: {
    images: ['/images/swu/swu1.jpg', '/images/swu/swu2.jpg', '/images/swu/swu3.jpg'],
    alt: 'จุดเริ่มต้น',
  },
  work: {
    images: ['/images/jib/jib1.png', '/images/jib/jib2.jpg', '/images/jib/jib3.png', '/images/jib/jib4.png', '/images/jib/jib5.jpg'],
    alt: 'ก้าวสู่งานจริง',
  },
}

const activeSlide = reactive<Record<string, number>>({})

function slideIndex(scene: string) {
  return activeSlide[scene] ?? 0
}

function slideStep(scene: string, dir: number) {
  const total = sceneSlides[scene].images.length
  activeSlide[scene] = (slideIndex(scene) + dir + total) % total
}

const viewer = ref<{ images: string[]; index: number } | null>(null)

interface JourneyItem {
  year: string
  title: string
  role: string
  company?: string
  companyUrl?: string
  detail: string
  skills: string[]
  upcoming?: boolean
  icon: Component
  scene: string
  accent: string
  soft: string
  logo?: string
}

const journey: JourneyItem[] = [
  {
    year: '2019 - 2023',
    title: 'จุดเริ่มต้น',
    role: 'Information Studies',
    company: 'Srinakarinwirot University',
    companyUrl: 'https://www.swu.ac.th/',
    detail:
      'เริ่มสนใจว่าเว็บไซต์ทำงานอย่างไร จากการลองปรับแต่งหน้าเว็บเล็ก ๆ จนค้นพบความสนุกของการสร้างสิ่งที่คนอื่นใช้งานได้',
    skills: ['HTML & CSS', 'JavaScript พื้นฐาน', 'Database เบื้องต้น'],
    icon: GraduationCap,
    scene: 'start',
    accent: '#62c99a',
    soft: '#eaf9f2',
  },
  {
    year: '2023',
    title: 'เรียนรู้จริงจัง',
    role: 'System Analyst (Intern)',
    company: 'Kos Design',
    companyUrl: 'https://www.kos.co.th/th',
    detail:'เรียนรู้การพัฒนาซอฟต์แวร์ การวิเคราะห์และออกแบบระบบ การทำงานร่วมกับทีมพัฒนา และมีส่วนร่วมในการพัฒนาโปรเจกต์ต่าง ๆ',
    skills: ['System Analysis', 'Flow Design', 'Database Design', 'Teamwork', 'Problem Solving'],
    icon: Laptop,
    scene: 'learn',
    logo: kosDesignLogo,
    accent: '#ff946f',
    soft: '#fff0ea',
  },
  {
    year: '2024 - Now',
    title: 'ก้าวสู่งานจริง',
    role: 'Full-Stack Developer',
    company: 'JIB Computer Group',
    companyUrl: 'https://www.jib.co.th/web/',
    detail:'ได้ร่วมพัฒนาระบบในสภาพแวดล้อม Production จริง ทำงานร่วมกับทีมเพื่อส่งมอบซอฟต์แวร์ที่มีคุณภาพ ใช้งานง่าย และสามารถดูแลต่อได้ พร้อมนำ Feedback จากผู้ใช้งานจริงมาปรับปรุงระบบอย่างต่อเนื่อง',
    skills: ['Vue.js', 'React', 'Node.js', 'REST API','Database', 'Git', 'Docker'],
    icon: BriefcaseBusiness,
    scene: 'work',
    logo: jibLogo,
    accent: '#668de5',
    soft: '#edf3ff',
  },
  {
    year: 'Coming Soon',
    title: 'เติบโตต่อไป',
    role: 'Building thoughtful digital experiences',
    detail:'วันนี้ยังคงสนุกกับการแก้ปัญหา ใส่ใจรายละเอียดเล็ก ๆ และสร้างประสบการณ์ดิจิทัลที่เรียบง่ายแต่มีความหมาย',
    skills: ['Cloud & DevOps', 'Testing', 'UX Thinking'],
    upcoming: true,
    icon: Sparkles,
    scene: 'grow',
    accent: '#f1bd43',
    soft: '#fff8df',
  },
]

</script>


<style scoped>
.journey-section {
  background:
    radial-gradient(circle at 9% 24%, rgb(223 234 255 / 55%), transparent 15rem),
    radial-gradient(circle at 89% 47%, rgb(231 248 239 / 55%), transparent 17rem),
    var(--background);
}

.timeline-line {
  width: 1px;
  background: repeating-linear-gradient(to bottom, #b8c8df 0 6px, transparent 6px 12px);
}

.journey-wave {
  background: #b8d0fb;
  clip-path: ellipse(58% 48% at 72% 100%);
}

.dark .journey-wave {
  background: #273758;
}

@media (max-width: 767px) {
  .journey-card {
    grid-template-columns: 1fr;
  }
}
</style>
