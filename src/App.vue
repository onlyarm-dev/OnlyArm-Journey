<script setup lang="ts">
import Nav from '@/components/1Nav.vue'
import Intro from '@/components/2Intro.vue'
import Journey from '@/components/3Journey.vue'
import EventAndProject from '@/components/4Event&Project.vue'
import Contact from '@/components/5Contact.vue'
import Techstack from '@/components/6Techstack.vue'
</script>

<template>
  <div class="min-h-screen overflow-hidden">
    <Nav />
    <main>
      <Intro />
      <Journey />
      <EventAndProject />
      <Techstack />
      <Contact />
    </main>
  </div>
</template>
