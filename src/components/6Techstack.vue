<template>
  <section id="stack" class="stack-section relative overflow-hidden py-24 sm:py-32">
    <div class="page-wrap relative z-10">
      <!-- Tech stack heading -->
      <div class="text-center">
        <p class="text-sm font-extrabold uppercase tracking-[0.18em] text-[#6486df]">Tech stack</p>
      </div>

      <!-- Inverted pyramid of logos -->
      <div class="mt-16 flex flex-col items-center gap-2.5 sm:gap-4 lg:gap-6">
        <div
          v-for="(row, rowIndex) in stackRows"
          :key="`row-${rowIndex}`"
          class="flex justify-center gap-2.5 sm:gap-4 lg:gap-6"
        >
          <div
            v-for="(tech, techIndex) in row"
            :key="tech.name"
            class="stack-float"
            :style="{ animationDelay: `${(rowIndex * 5 + techIndex) * 0.35}s` }"
          >
            <div
              class="stack-tile group relative grid size-12 cursor-pointer place-items-center rounded-xl border bg-card shadow-[0_8px_24px_rgba(38,43,60,0.06)] sm:size-16 sm:rounded-2xl lg:size-20"
              :style="{ '--accent': tech.color }"
            >
              <!-- Name badge popping above on hover -->
              <span
                class="stack-label pointer-events-none absolute -top-3 left-1/2 z-20 -translate-x-1/2 translate-y-2 whitespace-nowrap rounded-full px-3 py-1 text-xs font-extrabold text-white opacity-0 shadow-md"
                :style="{ backgroundColor: tech.color }"
              >
                {{ tech.name }}
              </span>

              <img
                :src="tech.logo"
                :alt="`โลโก้ ${tech.name}`"
                class="stack-logo size-6 object-contain sm:size-8 lg:size-10"
                :class="tech.logoDark && 'dark:hidden'"
                loading="lazy"
              />
              <img
                v-if="tech.logoDark"
                :src="tech.logoDark"
                :alt="`โลโก้ ${tech.name}`"
                class="stack-logo hidden size-6 object-contain dark:block sm:size-8 lg:size-10"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <!-- Pointed ending, echoing the journey timeline -->
        <div class="flex flex-col items-center" aria-hidden="true">
          <span class="stack-tail h-10 w-px" />
          <span class="mt-1 text-sm text-[#6486df]">▼</span>
        </div>
        <p class="rotate-[-2deg] rounded-2xl border border-dashed border-[#afc8f7] bg-card/90 px-6 py-3 text-sm font-bold shadow-sm">
          และยังเรียนรู้เพิ่มอยู่เรื่อย ๆ ✨
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface TechItem {
  name: string
  logo: string
  color: string
  logoDark?: string
}

// เรียงจากแถวกว้างสุด (พื้นฐาน) ลงไปหาปลายแหลม
const stackRows: TechItem[][] = [
  [
    { name: 'HTML5', logo: '/images/stack/html5.svg', color: '#e34f26' },
    { name: 'CSS', logo: '/images/stack/css.svg', color: '#663399' },
    { name: 'JavaScript', logo: '/images/stack/javascript.svg', color: '#d4b830' },
    { name: 'TypeScript', logo: '/images/stack/typescript.svg', color: '#3178c6' },
    { name: 'Git', logo: '/images/stack/git.svg', color: '#f05032' },
  ],
  [
    { name: 'Vue.js', logo: '/images/stack/vuedotjs.svg', color: '#42b883' },
    { name: 'React', logo: '/images/stack/react.svg', color: '#38bdd8' },
    { name: 'Tailwind CSS', logo: '/images/stack/tailwindcss.svg', color: '#06b6d4' },
    { name: 'Node.js', logo: '/images/stack/nodedotjs.svg', color: '#5fa04e' },
  ],
  [
    { name: 'MySQL', logo: '/images/stack/mysql.svg', color: '#4479a1' },
    { name: 'MariaDB', logo: '/images/stack/mariadb.svg', logoDark: '/images/stack/mariadb-dark.svg', color: '#0f6a80' },
    { name: 'PostgreSQL', logo: '/images/stack/postgresql.svg', color: '#4169e1' },
  ],
  [
    { name: 'ChatGPT', logo: '/images/stack/chatgpt.svg', color: '#74aa9c' },
    { name: 'Claude', logo: '/images/stack/claude.svg', color: '#d97757' },
  ],
  [
    { name: 'Docker', logo: '/images/stack/docker.svg', color: '#2496ed' },
  ],
]
</script>

<style scoped>
.stack-section {
  background:
    radial-gradient(circle at 14% 30%, rgb(231 248 239 / 55%), transparent 15rem),
    radial-gradient(circle at 86% 60%, rgb(223 234 255 / 55%), transparent 17rem),
    var(--background);
}

/* Idle: ลอยเบา ๆ สลับจังหวะกันทีละใบ */
.stack-float {
  animation: stack-float 5.5s ease-in-out infinite;
}

@keyframes stack-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

/* Hover: ซูมขยาย ยกตัว ขอบ + เงาเรืองเป็นสีแบรนด์ */
.stack-tile {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, border-color 0.3s ease;
}

.stack-tile:hover {
  transform: scale(1.22) translateY(-4px);
  border-color: var(--accent);
  box-shadow:
    0 0 0 4px color-mix(in srgb, var(--accent) 18%, transparent),
    0 18px 40px color-mix(in srgb, var(--accent) 40%, transparent);
  z-index: 10;
}

.stack-logo {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.stack-tile:hover .stack-logo {
  transform: scale(1.12) rotate(-6deg);
}

.stack-label {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.25s ease;
}

.stack-tile:hover .stack-label {
  transform: translate(-50%, -100%);
  opacity: 1;
}

.stack-tail {
  background: repeating-linear-gradient(to bottom, #b8c8df 0 6px, transparent 6px 12px);
}

@media (prefers-reduced-motion: reduce) {
  .stack-float {
    animation: none;
  }

  .stack-tile,
  .stack-logo,
  .stack-label {
    transition: none;
  }
}
</style>
