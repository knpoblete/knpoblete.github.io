<template>
  <!-- <section id="testimonials-section"> -->
   
    <!-- <h3 class="text-center mb-8 text-gray-700">
      Feedback from clients I've had the pleasure of working with.
    </h3> -->

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
      class="testimonials-swiper"
      aria-label="Client testimonials carousel"
    >
      <swiper-slide
        v-for="(testimonial, i) in testimonials"
        :key="i"
        aria-label="Client testimonial slide"
      >
        <div class="testimonial-card space-y-4 justify-items-start">
          <h3>{{ testimonial.title }}</h3>
          <h4>{{ testimonial.feedback }}</h4>
          <i class="fa-brands fa-upwork"></i>
        </div>
      </swiper-slide>
    </swiper>
  <!-- </section> -->
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

const modules = [Pagination, Autoplay];

const testimonials = [
  {
    title: "Python & Data Visualization Genius To Build Reports",
    feedback:
      "Katherine has been incredible to work with. Her thoughtfulness, her attention to detail, her skills—she has made our project infinitely better. I very much hope she's willing to work with us/me again.",
  },
  {
    title: "Apache Superset BI Developer / Dashboard Designer",
    feedback:
      "Katherine has been the right Person for our project at the right time. We needed a professional who could turn an Apache Superset dashboard into an appealing design that we could leverage to showcase to clients and investors. We did not believe the extent to which she was able to tweak the design—expectations exceeded. Moreover, Katherine worked a whole weekend to help us meet a strict deadline, which we didn’t even ask her to do, but for which we are extremely thankful!",
  },
  {
    title: "Stata, R, and Tableau Data Visualization Scheme / Theme File Developer / Designer",
    feedback:
      "We hired Kath to create a ggplot2 theme for our organization's charts. She adapted our style guide into a custom-built theme, and worked with us to revise, test, and document it for internal use. I really appreciated her responsiveness and flexibility throughout the project, as well as her adaptability as requirements changed. The end product was high quality—glad to have worked with her!",
  },
  {
    title: "Data Visualization Expert Needed for User-Friendly Graph Creation",
    feedback:
      "Fantastic partner to work with. Katherine was able to communicate and suggest ways of accomplishing the project I had not thought of. Communication was on point, always had an answer or solution within a day. 10/10 will look to work with Katherine again on future projects.",
  },
  {
    title: "RStudio / RShiny Project Help",
    feedback:
      "I truly can't praise Katherine and her work enough—she is fantastic! She helped me work through a somewhat sensitive and unique RStudio/RShiny challenge and could not have done a better job. She was communicative, professional, and insightful. I cannot recommend Katherine enough and will absolutely reach out again!",
  },
  {
    title: "Consultation",
    feedback:
      "Katherine was excellent and a pleasure to work with. She exceeded my expectations, and I am delighted with the work. I would use her again.",
  },
];
</script>

<style scoped>
h2 {
  font-family: inherit;
  color: #111613;
}

h3 {
  font-size: 1.25rem;
  color: #111613;
  font-weight: 600;
  text-align: left;
}

h4 {
  font-size: 1rem;
  color: #111613;
  text-align: left;
  line-height: 1.6;
}

/* 🔹 Swiper container */
.testimonials-swiper {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: auto;
  padding: 2rem 1rem 4rem;
  box-sizing: border-box;
}

/* 🔹 Each slide */
.testimonials-swiper .swiper-slide {
  height: auto;
  display: flex;
  justify-content: center;
  align-items: stretch;
}

/* 🔹 Testimonial card (same as project-card) */
.testimonial-card {
  background-color: rgb(255 255 255 / 0.8);
  border: 1px solid rgb(255 255 255 / 0.5);
  border-radius: 1rem;
  padding: 2rem;
  width: 100%;
  max-width: 340px;
  box-sizing: border-box;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

/* 🔹 Upwork icon */
.testimonial-card i {
  font-size: 2rem;
  color: #111613;
  margin-top: 1rem;
  transition: color 0.3s ease, transform 0.3s ease;
}

.testimonial-card i:hover {
  color: #956860;
  transform: scale(1.1);
}

/* 🔹 Pagination dots */
:deep(.swiper-pagination-bullet) {
  background-color: #956860;
  opacity: 0.5;
  transition: all 0.3s ease;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #111613 !important;
  opacity: 1 !important;
  transform: scale(1.2);
}

/* 🔹 Responsive */
@media (max-width: 1024px) {
  .testimonials-swiper {
    max-width: 900px;
  }
}

@media (max-width: 768px) {
  .testimonials-swiper {
    max-width: 600px;
  }
}

@media (max-width: 640px) {
  .testimonials-swiper {
    max-width: 95%;
    padding: 1rem;
  }
}
</style>
