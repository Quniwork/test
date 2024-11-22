<template>
  <div class="slideshow-wrap">
    <ClientOnly>
      <swiper-container
        class="ele-slideshow-wrap"
        ref="containerRef"
        :loop="true"
        :pagination="{ clickable: true, type: 'bullets' }"
        :autoplay="{delay: 3000, disableOnInteraction: true}"
        :style="{
          '--swiper-pagination-bullet-size': '15px',
          '--swiper-pagination-bullet-inactive-color': '#fff',
          '--swiper-pagination-bullet-inactive-opacity': 1,
          '--swiper-pagination-bottom': '78px'
        }"
      >
        <swiper-slide
          v-for="i in 2"
          :key="i"
        >
          <a href="#">
            <img :src="`/image/not-use/slider0${i}.jpg`" class="slideshow-img" />
          </a>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const containerRef = ref(null);
</script>

