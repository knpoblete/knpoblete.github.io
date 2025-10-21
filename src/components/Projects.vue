<template>
  <!-- <section id="projects-section"> -->
    <h2 class="text-2xl mb-8 text-center">Client Projects</h2>
    <h3>Browse through some of my publicly available works.</h3>
    <swiper
      :slides-per-view="3"
      :space-between="30"
      :pagination="{ clickable: true }"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: true
      }"
      :breakpoints="{
        320: { slidesPerView: 1, spaceBetween: 20 },
        640: { slidesPerView: 2, spaceBetween: 30 },
        1024: { slidesPerView: 3, spaceBetween: 40 }
      }"
      :modules="modules"
      class="projects-swiper"
      aria-label="Client projects carousel"
    >
      <swiper-slide
        v-for="(project, i) in clientProjects"
        :key="i"
        aria-label="Project slide"
      >
        <div
          class="project-card bg-white rounded-2xl shadow transition p-4 hover:shadow-xl"
        >
          <a
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="block"
          >
            <!-- 🎥 Video (plays only on hover) -->
            <video
              v-if="project.video"
              :ref="el => videos[i] = el"
              :src="project.video"
              :aria-label="project.alt"
              class="w-full h-48 object-cover rounded-lg mb-3"
              muted
              playsinline
              preload="metadata"
              @mouseenter="playVideo(i)"
              @mouseleave="pauseVideo(i)"
            ></video>

            <!-- 🖼️ Image fallback -->
            <img
              v-else
              :src="project.image"
              :alt="project.alt"
              class="w-full h-48 object-cover rounded-lg mb-3"
            />

            <h4 class="text-lg font-medium text-left">{{ project.title }}</h4>
            <p class="text-sm text-gray-600 mt-1 text-left">
              {{ project.description }}
            </p>
          </a>
        </div>
      </swiper-slide>
    </swiper>
  <!-- </section> -->
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { Pagination, Autoplay } from 'swiper/modules'

// Swiper modules
const modules = [Pagination, Autoplay]

// video refs
const videos = ref([])

// Play/pause on hover
const playVideo = (index) => {
  const video = videos.value[index]
  if (video) {
    video.currentTime = 0
    video.play().catch(() => {})
  }
}
const pauseVideo = (index) => {
  const video = videos.value[index]
  if (video) video.pause()
}

const clientProjects = [
  {
    title: "ADB OOMP: Annual Report 2023 > Data Speak",
    description:
      "Data analysis and visualization of cases and issues of ADB Office of the Ombudsperson.",
    image: new URL('@/assets/projects/ADB_OOMP_AR_2023.png', import.meta.url).href,
    alt: "Screenshot of the ADB Data Speak dashboard.",
    link: "https://www.adb.org/multimedia/ombudsperson-2023/data-speak.html",
  },
  {
    title: "ADB Asia Pacific Climate Report 2024",
    description:
      "Compilation of interactive data visualizations from the flagship report.",
    image: new URL('@/assets/projects/ADB_APCR_2024.png', import.meta.url).href,
    alt: "Interactive dashboard from the ADB Climate Report 2024.",
    link: "https://public.tableau.com/app/profile/asiandevelopmentbank/viz/Asia-PacificClimateReport2024_17600633280900/Home?publish=yes",
  },
  {
    title: "WWER Listener Data",
    description:
      "Cloud setup of data pipeline using GCP and RShiny dashboard revamp.",
    video: new URL('@/assets/projects/WWER.mov', import.meta.url).href,
    alt: "Video demonstration of the WWER Listener Metrics Dashboard.",
    link: "https://wwer-88-1-fm.shinyapps.io/WWER-Listener-Metrics-Dashboard/",
  },
  {
    title: "UNICEF National Committee Year in Review 2024",
    description:
      "Created data visualizations to highlight financial and advocacy impact for the report.",
    video: new URL('@/assets/projects/NCR_2024.mov', import.meta.url).href,
    alt: "Video demonstration of the visualizations for the 2024 NatCom Year in Review.",
    link: "https://2024-natcom-year-in-review.my.canva.site/2024-natcom-design-bi-fold-main-design",
  },
  {
    title: "UNARIO Milestones",
    description:
      "An interactive wheel to look back on UNARIO milestones in the recent years developed using Rive and Svelte.",
    video: new URL('@/assets/projects/UNARIO_2025.mov', import.meta.url).href,
    alt: "Video demonstration of the UNARIO Milestone Wheel",
    link: "https://unario-milestones.onrender.com/",
  },
]
</script>

<style scoped>

h2 {
  font-family: inherit; /* Uses parent’s font (default or Tailwind base) */
  color: #111613; /* optional: keep consistent text color */
}

/* 🔹 Swiper container */
.projects-swiper {
  width: 100%;
  max-width: 1200px; /* ✅ keeps it centered and not too wide */
  margin: 0 auto; /* centers horizontally */
  height: auto;
  padding: 2rem 1rem 4rem; /* top, sides, bottom spacing */
  box-sizing: border-box;
}

/* 🔹 Each slide */
.projects-swiper .swiper-slide {
  height: auto;
  display: flex;
  justify-content: center;
  align-items: stretch;
}

/* 🔹 Project card */
.project-card {
  background-color: rgb(255 255 255 / 0.8);
  border: 1px solid rgb(255 255 255 / 0.5);
  border-radius: 1rem;
  padding: 1.5rem;
  width: 100%;
  max-width: 340px; /* ✅ consistent card width */
  box-sizing: border-box;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Gentle hover lift */
.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

/* 🔹 Image / video styling */
.project-card img,
.project-card video {
  width: 100%;
  height: 12rem;
  object-fit: cover;
  border-radius: 0.75rem;
  margin-bottom: 0.75rem;
}

/* 🔹 Pagination (dots) */
.projects-swiper .swiper-pagination {
  bottom: 0.5rem !important;
}

/* 🔹 Responsive layout */
@media (max-width: 1024px) {
  .projects-swiper {
    max-width: 900px;
  }
}

@media (max-width: 768px) {
  .projects-swiper {
    max-width: 600px;
  }
}

@media (max-width: 640px) {
  .projects-swiper {
    max-width: 95%;
    padding: 1rem;
  }
}
</style>


