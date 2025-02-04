<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <!-- <main class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"> -->
    
  <!-- <main class="flex flex-wrap items-center justify-between mx-auto p-4"> -->
    <section id="about-section">
      <div class="container flex justify-center items-center sm:col-span-1">
        <div class="space-y-4 justify-items-start">
        <h2 > Hello, world!</h2>  
        <p class="bio">
          I'm Kath, a data consultant with over 10 years experience in the analytics field. 
          I have held different titles in the past - Data Analyst, Data Scientist, Data Visualization Engineer to name some. 
          I enjoy crunching numbers, finding trends and patterns in data, turning raw insights into actionable insights, 
          and presenting these using data storytelling principles. 
          One skill that sets me apart is I combine UI/UX principles to data visualization and data storytelling to make user-centric analyses.
          Apart from data analysis, I enjoy automating workflows and data pipelines. 
          <br>
          <br>
          I'm also currently enrolled in City St. George's, University of London under the program MSc Human-Computer Interaction Design.
        </p>  
        
      </div>
      
          <div class="headshot flex justify-center items-center">
            <img class="photo" src="../assets/headshot.jpeg" width="200">
          </div>
      </div>
      
    </section>
  
    <section id="skills-section">
      <h2>Skills</h2>
      <!-- <h5>I'd like to say I'm tool agnostic but here are some of the tools I mostly interact with in my projects.</h5> -->
      <div class="skills-container">
        <div>
          <h3>Data Analysis, Statistical Analysis, Machine Learning</h3>
          <div class="tools-container space-y-4">
            <i class="fa-brands fa-python"></i>
            <i class="fa-brands fa-r-project"></i>
          </div>
        </div>
          
        <div>
          <h3>Data Visualization</h3>
          <div class="tools-container space-y-4">
            <img src="../assets/icons/tableau.svg">
            <img src="../assets/icons/powerbi.svg">
            <img src="../assets/icons/superset.svg">
            <img src="../assets/icons/ggplot.svg">
            <img src="../assets/icons/matplotlib.svg">
            <img src="../assets/icons/d3.svg">
          </div>
        </div>

        <div>
          <h3>Data Engineering</h3>
          <div class="tools-container space-y-4">
            <img src="../assets/icons/postgresql.svg">
            <i class="fa-brands fa-docker"></i>
            <i class="fa-brands fa-aws"></i>
            <img src="../assets/icons/gcp.svg">
            
          </div>
        </div>

        <div>
          <h3>Frontend</h3>
          <div class="tools-container space-y-4">
            <i class="fa-brands fa-vuejs"></i>
            <img src="../assets/icons/shiny.svg">
          </div>
        </div>

        <div>
          <h3>Version Control</h3>
          <div class="tools-container space-y-4">
            <i class="fa-brands fa-git"></i>
            <i class="fa-brands fa-github"></i>
          </div>
        </div>
        
        <div>
          <h3>Wireframing (lofi/hifi), Prototyping</h3>
          <div class="tools-container space-y-4">
            <i class="fa-brands fa-figma"></i>
            <img src="../assets/icons/balsamiq.svg">
          </div>
        </div>

        <div>
          <h3>Human-Computer Interaction Design, User Experience (UX)</h3>
          <div class="tools-container m-4 flex">
            <h4>user research</h4>
            <h4>usability testing</h4>
            <h4>information architecture</h4>
            <h4>interaction design</h4>
          </div>
        </div>

      </div>
    </section>

    <section id="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
   
          <h3> Client Projects </h3>

          <h3> Personal Projects </h3>
        </div>

        <div className="x-card-container space-y-4">
          <!-- <h3> Apache Superset BI Developer / Dashboard Designer </h3>
          <h4> Katherine has been the right Person for our project at the right time.
              We needed a professional with who could turn an Apache superset dashboard into an appealing design that we could leverage to showcase to clients and investors. We did not believe the extend till which she was able to tweak the design - all expectations exceeded.
              Moreover, Katherine worked a whole weekend to make help us attain a strict deadline, which was we did not even ask her to do, but for which we are extremely thankful! 
              Katherine has been the right Person for our project at the right time.
                  We needed a professional with who could turn an Apache sup
                  Katherine has been the right Person for our project at the right time.
                  We needed a professional with who could turn an Apache sup
                  Katherine has been the right Person for our project at the right time.
                  We needed a professional with who could turn an Apache sup
                  Katherine has been the right Person for our project at the right time.
                  We needed a professional with who could turn an Apache sup
            </h4>
          <i class="fa-brands fa-upwork"></i> -->
    
        <!-- </div> -->

        <!-- <div className="x-card-container space-y-4">
          <h3> Stata, R, and Tableau Data Visualization Scheme/Theme File Developer/Designer </h3>
              <h4> We hired Kath to create a ggplot2 theme for our organization's charts. She adapted our style guide into a custom built theme, and worked with us to revise, test, and document it for internal use. I really appreciated her responsiveness and flexibility throughout the course of the project, as well as her adaptability as some of the requirements changed, and the end product was high quality. Glad to have worked with her! </h4>
              <i class="fa-brands fa-upwork"></i>
        </div> -->
    </div>
    </section>

    <section id="testimonials-section">
      <h2>Client Testimonials</h2>  
      <!-- <h5>Most of these are from Upwork</h5> -->
      <!-- <div class="swiper-container"> -->
        <!-- <swiper
        :slidesPerView="3"
        :spaceBetween="30"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      > -->

      
      <!-- <div className="swiper-container"> -->
        <swiper
        :slidesPerView="3"
        :spaceBetween="30"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
      
        <swiper-slide>
            <div className="card-container  space-y-4 justify-items-start">
              <h3> Python & Data Visualization Genius To Build Reports </h3>
              <h4> Katherine has been incredible to work with. Her thoughtfulness, her attention to detail, her skills—she has made our project infinitely better. I very much hope she's willing to work with us/me again. </h4>
              <i class="fa-brands fa-upwork"></i>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div className="card-container space-y-4 justify-items-start">
              <h3> Apache Superset BI Developer / Dashboard Designer </h3>
              <h4> Katherine has been the right Person for our project at the right time.
                  We needed a professional with who could turn an Apache superset dashboard into an appealing design that we could leverage to showcase to clients and investors. We did not believe the extend till which she was able to tweak the design - all expectations exceeded.
                  Moreover, Katherine worked a whole weekend to make help us attain a strict deadline, which was we did not even ask her to do, but for which we are extremely thankful! </h4>
              <i class="fa-brands fa-upwork"></i>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div className="card-container space-y-4 justify-items-start">
              <h3> Stata, R, and Tableau Data Visualization Scheme/Theme File Developer/Designer </h3>
              <h4> We hired Kath to create a ggplot2 theme for our organization's charts. She adapted our style guide into a custom built theme, and worked with us to revise, test, and document it for internal use. I really appreciated her responsiveness and flexibility throughout the course of the project, as well as her adaptability as some of the requirements changed, and the end product was high quality. Glad to have worked with her! </h4>
              <i class="fa-brands fa-upwork"></i>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div className="card-container space-y-4 justify-items-start">
              <h3> Data Visualization Expert Needed for User-Friendly Graph Creation </h3>
              <h4> Fantastic partner to work with. Katherine was able to communicate and suggest ways of accomplishing the project I had not thought of. Communication was on point, always had an answer or solution within a day. 10/10 will look to work with Katherine again on future projects. </h4>
              <i class="fa-brands fa-upwork"></i>
            </div>            
        </swiper-slide>
        <swiper-slide>
            <div className="card-container space-y-4 justify-items-start">
              <h3> RStudio/Rshiny Project Help </h3>
              <h4> I truly can't praise Katherine and her work enough, she is fantastic! She helped me work through a somewhat sensitive and unique RStudio/RShiny challenge that I had and she could not have done a better job. She was able to understand my somewhat complicated ask with what seemed like such ease, was very communicative throughout her work, and offered her expertise and suggestions throughout the project. I cannot recommend Katherine enough and I absolutely will be reaching out again! </h4>
              <i class="fa-brands fa-upwork"></i>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div className="card-container space-y-4 justify-items-start">
              <h3> Consultation </h3>
              <h4> Katherine was excellent and a pleasure to work with. She exceeded my expectations, and I am delighted with the work. I would use her again. </h4>
              <i class="fa-brands fa-upwork"></i>
            </div>            
        </swiper-slide>
        
      </swiper>
      <!-- </div> -->
      

    <!-- </div> -->
      

    </section>  
  
    <section id="contact-section">
      <h2>Get in touch with me</h2>
      <p id="thank-you-message" v-if="showAlert">
        Your message has been sent! I'll get in touch with you soon.
      </p>
      <!-- <section class="bg-white"> -->
        <div class="form mx-auto max-w-screen-md">
            <!-- <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2> -->
            <!-- <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p> -->
            
            <form ref="form" @submit.prevent="sendEmail" class="space-y-8" id="form">
                <div class="sm:col-span-2">
                    <label for="email" class="block mb-2 text-md font-medium text-[#717568]">Email</label>
                    <input type="email" id="email" name="email" class="w-full p-2.5 text-[#717568] outline-[#F1BF98] shadow-sm bg-white border border-[#BACBA9] focus:border-[#BACBA9] focus:ring-[#BACBA9] rounded-lg" placeholder="name@mail.com" required>
                </div>
                <div class="sm:col-span-2">
                    <label for="name" class="block mb-2 text-md font-medium text-[#717568]">Name</label>
                    <input type="text" name="name" id="name" class="w-full p-2.5 text-[#717568] outline-[#F1BF98] shadow-sm bg-white border border-[#BACBA9] focus:border-[#BACBA9] focus:ring-[#BACBA9] rounded-lg" placeholder="Name" required>
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="block mb-2 text-md font-medium text-[#717568]">Message</label>
                    <textarea id="message" name="message" rows="6" class="w-full p-2.5 text-[#717568] outline-[#F1BF98] shadow-sm bg-white border border-[#BACBA9] focus:border-[#BACBA9] focus:ring-[#BACBA9] rounded-lg" placeholder="How can I help you?"></textarea>
                </div>
                <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#717568] sm:w-fit hover:bg-[#F1BF98] focus:ring-2 focus:outline-[#F1BF98] focus:ring-[#F1BF98]">Send message</button>
            </form>
        </div>
      <!-- </section> -->
    </section> 
  

    <footer>
      <p>&copy; 2025 Katherine Poblete. All Rights Reserved.</p>
    </footer>
  <!-- </main> -->


</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import emailjs from '@emailjs/browser';

const service = "service_9tjhjos";
const template = "template_t5ep5ke";
const key = "OPN6WMQT5YFMSdZx0";

export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Autoplay],
    };
  },
  data() {
    return {
      showAlert: false
    }
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm(service, template, this.$refs.form, {
          publicKey: key,
        })
        .then(
          (response) => {
            console.log('SUCCESS!');
            this.$refs.form.reset()
            this.showAlert = true
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    },
  },
};




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

main {
  scroll-snap-type: y mandatory;
}
p {
  word-break: overflow;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.photo {
  border-radius: 1000px;
}
</style>


