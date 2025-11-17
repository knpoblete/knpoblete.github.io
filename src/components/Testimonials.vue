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
          <h4>
            {{ testimonial.feedback.length > 300 
                  ? testimonial.feedback.slice(0, 300) + '...' 
                  : testimonial.feedback
            }}
          </h4>

          <!-- Show Read More only if text is long -->
          <button 
            v-if="testimonial.feedback.length > 200"
            class="read-more-btn"
            @click="openModal(testimonial)"
          >
            Read More
          </button>

          <!-- Dynamic logo handling -->
          <template v-if="testimonial.logo.includes('fa-')">
            <i :class="testimonial.logo" style="font-size: 40px;"></i>
          </template>
          <template v-else>
            <img
              :src="getLogo(testimonial.logo)"
              alt="logo"
              :style="{
                height: testimonial.logoSize || '30px',
                display: 'block',
                objectFit: 'contain'
              }"
            />
          </template>
        </div>
      </swiper-slide>
    </swiper>

    <!-- Modal Overlay -->
    <div v-if="showModal" class="modal-overlay" @click="closeModal"></div>

    <!-- Modal Card -->
    <div v-if="showModal" class="modal-card">
      <button class="modal-close" @click="closeModal">✕</button>

      <h3>{{ activeTestimonial.title }}</h3>
      <p class="modal-text">{{ activeTestimonial.feedback }}</p>
    </div>

  <!-- </section> -->
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import { ref } from "vue";

const showModal = ref(false);
const activeTestimonial = ref(null);

const openModal = (testimonial) => {
  activeTestimonial.value = testimonial;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  activeTestimonial.value = null;
};


const modules = [Pagination, Autoplay];

const getLogo = (path) => {
  // Resolve image paths correctly for Vite / Vue
  return new URL(path, import.meta.url).href;
};

const testimonials = [
  {
    title: "ADB Office of the Ombudsperson",
    feedback:
      "I just wanted to say how impressed I am with the outstanding work Kath has done for the Office of the Ombudsperson at the Asian Development Bank. The way she processed and analyzed our aggregated data and turned it into clear actionable insights truly made a huge difference. Her interactive visualizations are not only visually appealing but also incredibly easy to navigate and understand—even for those of us who aren’t “data people.” Our annual reports have been transformed thanks to her contributions, and the improvements are so noticeable that other departments and organizational ombudsman programs have started following our lead. It’s no surprise to hear that professional colleagues from international organizations are now seeking her expertise, given the value she brings to every project. Her work ethic is truly admirable; she’s always reliable, thorough, and willing to go the extra mile. I especially admire her willingness to improve and expand her skills.  She seeks out new ideas and approaches to her work.  This encourages a culture of innovation in our office.  On top of all that, she’s a pleasure to work with and fit seamlessly into our team dynamic. Everyone appreciates her friendly and helpful attitude, and it’s clear she genuinely cares about the quality of her work. Thank you, Kath, for your dedication, your expertise, and for raising the bar for all of us. We feel very lucky to have had the chance to collaborate with you!",
    logo: new URL('@/assets/icons/adb.svg', import.meta.url).href,
    logoSize: "50px"
  },
  {
    title: "UNICEF PFP - Dashboard Development (Power BI)",
    feedback:
      "Kath's work and data products have been a strategic asset to our team. The Power BI solutions she created aren’t just dashboards, they are scalable data products that strengthen our long-term strategy with 32 National Committees. The ability to track performance, benchmark across markets, and uncover insights at both a global/portfolio level and individual market levels will unlock new opportunities for assessing our impact and strategic direction. These tools will continue to empower our teams as our data needs evolve.",
    logo: new URL('@/assets/icons/unicef.svg', import.meta.url).href
  },
  {
    title: "Python & Data Visualization Genius To Build Reports",
    feedback:
      "Katherine has been incredible to work with. Her thoughtfulness, her attention to detail, her skills—she has made our project infinitely better. I very much hope she's willing to work with us/me again.",
    logo: "fa-brands fa-upwork"
  },
  {
    title: "Apache Superset BI Developer / Dashboard Designer",
    feedback:
      "Katherine has been the right Person for our project at the right time. We needed a professional who could turn an Apache Superset dashboard into an appealing design that we could leverage to showcase to clients and investors. We did not believe the extent to which she was able to tweak the design—expectations exceeded. Moreover, Katherine worked a whole weekend to help us meet a strict deadline, which we didn’t even ask her to do, but for which we are extremely thankful!",
    logo: "fa-brands fa-upwork"
  },
  {
    title: "Stata, R, and Tableau Data Visualization Scheme / Theme File Developer / Designer",
    feedback:
      "We hired Kath to create a ggplot2 theme for our organization's charts. She adapted our style guide into a custom-built theme, and worked with us to revise, test, and document it for internal use. I really appreciated her responsiveness and flexibility throughout the project, as well as her adaptability as requirements changed. The end product was high quality—glad to have worked with her!",
    logo: "fa-brands fa-upwork"
  },
  {
    title: "Data Visualization Expert Needed for User-Friendly Graph Creation",
    feedback:
      "Fantastic partner to work with. Katherine was able to communicate and suggest ways of accomplishing the project I had not thought of. Communication was on point, always had an answer or solution within a day. 10/10 will look to work with Katherine again on future projects.",
    logo: "fa-brands fa-upwork"
  },
  {
    title: "RStudio / RShiny Project Help",
    feedback:
      "I truly can't praise Katherine and her work enough—she is fantastic! She helped me work through a somewhat sensitive and unique RStudio/RShiny challenge and could not have done a better job. She was communicative, professional, and insightful. I cannot recommend Katherine enough and will absolutely reach out again!",
    logo: "fa-brands fa-upwork"
  },
  {
    title: "Consultation",
    feedback:
      "Katherine was excellent and a pleasure to work with. She exceeded my expectations, and I am delighted with the work. I would use her again.",
    logo: "fa-brands fa-upwork"
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
  /* color: #111613; */
  font-weight: 600;
  text-align: left;
}

h4 {
  font-size: 1rem;
  color: gray-600;
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

/* Modal Background */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.4);
  z-index: 90;
}

/* Modal Card */
.modal-card {
  text-align: left;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  width: 90%;
  max-width: 600px;
  padding: 2rem;
  border-radius: 1rem;
  z-index: 100;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  animation: fadeIn 0.25s ease;
}

.modal-close {
  position: absolute;
  top: 12px;
  right: 16px;
  font-size: 1.3rem;
  border: none;
  background: none;
  cursor: pointer;
}

.modal-text {
  margin-top: 1rem;
  line-height: 1.6;
  color: #555;
}

/* Read More button */
.read-more-btn {
  margin-left: auto;
  display: block;
  margin-top: 10px;
  background: none;
  border: none;
  color: #956860;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
}

.read-more-btn:hover {
  text-decoration: underline;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translate(-50%, -48%); }
  to { opacity: 1; transform: translate(-50%, -50%); }
}

</style>
