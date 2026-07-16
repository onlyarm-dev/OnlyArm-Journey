<template>
  <header class="fixed inset-x-0 top-0 z-50 px-4 pt-4">
    <nav
      class="mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full border bg-background/80 px-3 shadow-sm backdrop-blur-xl"
      aria-label="Main navigation"
    >
      <a href="#home" class="flex items-center gap-2.5 px-2">
        <img :src="avatar" alt="OnlyArm avatar" class="size-9 rounded-full object-cover ring-2 ring-primary/25" />
        <span class="text-xl font-extrabold tracking-[-0.03em]">
          Only<span class="text-primary">Arm</span>
        </span>
      </a>

      <div class="hidden items-center gap-1 md:flex">
        <a class="rounded-full px-4 py-2 text-sm text-muted-foreground hover:text-foreground" href="#journey">
          Journey
        </a>
        <a class="rounded-full px-4 py-2 text-sm text-muted-foreground hover:text-foreground" href="#work">
          Work
        </a>
        <a class="rounded-full px-4 py-2 text-sm text-muted-foreground hover:text-foreground" href="#stack">
          Stack
        </a>
        <a class="rounded-full px-4 py-2 text-sm text-muted-foreground hover:text-foreground" href="#contact">
          Contact
        </a>
      </div>

      <Button
        variant="ghost"
        size="icon"
        :aria-label="isDark ? 'ใช้โหมดสว่าง' : 'ใช้โหมดมืด'"
        @click="toggleTheme"
      >
        <Sun v-if="isDark" class="size-4" />
        <Moon v-else class="size-4" />
      </Button>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { Moon, Sun } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/composables/useTheme'

const { isDark, toggleTheme } = useTheme()
const avatar = '/images/Avatar.png'

</script>
