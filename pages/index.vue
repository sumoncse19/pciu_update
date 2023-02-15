<template>
  <transition name="page">
    <main>
      <div class="w-full h-full">
        <div class="w-full h-full">
          <!-- Hero section -->
          <div class="intro w-full h-screen bg-ash-dark relative">
            <div
              class="flex flex-col lg:flex-row lg:flex-nowrap justify-between items-center xl:items-start intro_inner_body"
            >
              <div
                class="text-white text-center lg:text-left px-7 md:px-0 pt-6 md:pt-32"
              >
                <h2 class="text-3xl md:text-5xl font-medium pb-3.5">
                  WELCOME TO PORT CITY <br />
                  INTERNATIONAL UNIVERSITY
                </h2>
                <p class="text-base lg:text-lg pb-7 pr-20">
                  Since the establishment, Port City International University
                  has been focusing on assisting the students in facing the
                  challenges of the ever advancing world. PCIU is a platform
                  where students can rise to the highest level of their
                  capability. It provides an outstanding and supportive
                  environment for both undergraduate and postgraduate students.
                  A talented and dedicated group of academics provide guidance
                  and tutelage the students need to pursue their research and
                  academic goals. The dynamic teaching and learning environment
                  of PCIU brims with talent, creativity and international
                  connections. PCIU has been doing excellent community services
                  by engaging the students
                </p>
                <div
                  class="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-center lg:justify-start items-center"
                >
                  <!-- v-if="!loggedIn" -->
                  <nuxt-link
                    class="h-10 md:mr-7.2 rounded-full bg-orange-600 px-9 text-base font-bold flex items-center justify-center whitespace-nowrap"
                    to="/signup"
                    @click.native="startFreeTrial"
                  >
                    Sign Up
                  </nuxt-link>
                  <button
                    class="live-demo h-10 rounded-full border-2 border-orange-600 px-9 text-base text-orange-600 font-bold flex items-center justify-center whitespace-nowrap hidden"
                    @click="gotoTryDemoSite"
                  >
                    View Live Demo
                  </button>
                </div>
              </div>
              <div class="md:pt-4 lg:pt-0 2xl:pr-6 intro-img-wrapper">
                <iframe
                  src="https://pciu-landing-small.netlify.app/"
                  class="intro-img block md:hidden"
                ></iframe>
                <iframe
                  src="https://pciu-landing-big.netlify.app/"
                  class="intro-img hidden md:block"
                ></iframe>
              </div>
            </div>
            <div
              id="videoWrapper"
              class="hero_section_video_template webkitCenter items-center absolute-center mx-auto"
            >
              <VideoPlayer class="video-js w-full" :set-size="videoOptions" />
            </div>
          </div>
        </div>
      </div>
    </main>
  </transition>
</template>

<script setup>
// import Cookie from "cookie-universal";
// const cookies = Cookie();
// onMounted(() => {
//   const isLoggedIn = cookies.get("checkLogIn");
// })
</script>

<style lang="scss" scoped>
iframe {
  width: 480px;
  height: 640px;
}
.trusted-by {
  padding-bottom: 150px;
}
.v-lazy-image {
  filter: blur(10px);
  height: 0px;
  // transition: all 0.7s;
}
.v-lazy-image-loaded {
  @apply md:h-86 h-56;
  filter: blur(0);
}
.feature-item {
  width: 330px;
  height: 225px;
}
.webkitCenter {
  text-align: -webkit-center;
}
.max-w-3 {
  max-width: 12px;
}
.min-w-3 {
  min-width: 12px;
}
.max-w-4 {
  max-width: 16px;
}
.min-w-4 {
  min-width: 16px;
}
.icon-top-margin {
  margin-top: 5px;
}
.bg-red-gradient {
  background: transparent linear-gradient(116deg, #f3d8d8 0%, #ffffff 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 5px 5px 6px #00000029;
  border-radius: 20px;
}
.embed-responsive-item {
  height: 20rem;
}
.intro {
  background: url(~/static/images/landing/landing_bg_img_logo1.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: #222831;
  border-radius: 100% / 17%;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  height: 100vh;
}
.requiredRetain {
  // background: url(~/assets/img/landing/requiredRetailBg.png);
  // background-repeat: no-repeat;
  // background-size: 100% 100%;
  border-radius: 100% / 15%;
}
.retain-title {
  @apply text-orange-dark text-center font-medium;
  font-size: 5rem;
  line-height: 6.625rem;
}
.grid-gap {
  row-gap: 5.5rem;
  column-gap: 4.688rem;
  padding-top: 4.375rem;
}
.retain-card {
  @apply bg-white rounded-2xl flex flex-col items-center pt-10 px-8;
  height: 15.938rem;
}
.archiving-soft-title {
  padding-top: 12.5rem;
  padding-bottom: 8.625rem;
}
.rating {
  color: #ffbe05;
}
.benifits {
  // @apply lg:px-101 md:px-0 px-4;
  @apply lg:px-10 px-4;
  padding-top: 14.25rem;
}
.image_position {
  $top: var(--top);
}

.width-100 {
  width: calc(100% - 1.25rem);
}
.bg-purple-gradient {
  background: transparent linear-gradient(116deg, #ffffff 0%, #f3f2ff 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 5px 5px 6px #00000029;
  border-radius: 20px;
}

.bg-orange-gradient {
  background: transparent linear-gradient(116deg, #ffefe2 0%, #ffffff 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 5px 5px 6px #00000029;
  border-radius: 20px;
}
.landing_intro_img {
  // height: 100%;
  height: 390px;
}
.landing_intro_img_default {
  height: 0px;
}
.px-101 {
  padding-left: 11%;
  padding-right: 11%;
}

.section_3 {
  width: 200%;
  transform: translateX(0px);
  transform: translateY(160px);
}
.absolute-center {
  position: absolute;
  width: 655px;
  height: 368px;
  bottom: -400px;
  left: 50%;
  transform: translate(-50%, -50%);
}
.trial-button,
.live-demo {
  @apply h-10;
  width: 11.25rem;
}
.trusted-title {
  @apply flex flex-col text-gray-1200 font-bold text-center;
  font-size: 50px;
}
.trial {
  // padding-top: 12.5rem;
  padding-top: 5.5rem;
}
.trial-text {
  // @apply text-center text-gray-light italic text-lg leading-6;
  @apply text-center text-gray-light italic text-base md:text-lg leading-6;
  // width: 35.25rem;
}
// .h-retain,
.h-intro {
  // height: 75rem;
  height: 73.75rem;
}
.intuitiveSingle {
  width: 150px;
  height: 150px;
}
.intuitiveSingleTitle {
  width: 150px;
}
.position_fixed {
  top: 50%;
  // left: 50%;
  transform: translateY(-50%);
}
.allInOne {
  padding-top: 240px;
}
@media (min-width: 768px) {
  .top-padding {
    padding-top: 23rem;
  }
  .bottom-padding {
    padding-bottom: 66rem;
  }
  .bottom-position {
    bottom: 31rem;
  }
  .top-position {
    top: -8%;
  }
  .intro_img {
    width: 600px;
    height: 390px;
  }
  .trial-text {
    width: 35.25rem;
    padding-top: 14px;
  }
  .intuitiveSingle {
    width: 120px;
    height: 120px;
  }
  .intuitiveSingleTitle {
    width: 120px;
  }
  .feature-item {
    width: 335px;
    height: 225px;
  }
}
@media (min-width: 1020px) {
  .top-padding {
    padding-top: 32rem;
  }
  .bottom-position {
    bottom: 33rem;
  }
  .bottom-padding {
    padding-bottom: 82rem;
  }
}
@media (min-width: 1024px) {
  .absolute-center {
    bottom: -320px;
  }
  .intuitiveSingle {
    width: 150px;
    height: 150px;
  }
  .intuitiveSingleTitle {
    width: 150px;
  }
  .feature-item {
    width: 266px;
    height: 255px;
  }
}
@media (min-width: 1200px) {
  .image-position {
    left: -11rem;
  }
  .absolute-center {
    bottom: -360px;
  }
  .feature-item {
    width: 340px;
    height: 225px;
  }
}
@media (min-width: 1270px) {
  .top-padding {
    padding-top: 34rem;
  }
  .bottom-position {
    bottom: 39rem;
  }
  .bottom-padding {
    padding-bottom: 91rem;
  }
  .intuitiveSingle {
    width: 180px;
    height: 180px;
  }
  .intuitiveSingleTitle {
    width: 180px;
  }
  .whoIsThis {
    @apply px-28 2xl:px-44;
  }
}
@media (min-width: 1430px) {
  .bottom-padding {
    padding-bottom: 95rem;
  }
}
@media (min-width: 1440px) {
  .h-retain {
    // height: 100vh;
    height: 73.75rem;
    // height: 75rem;
  }
}
@media (min-width: 1537px) {
  .intro {
    @apply px-44 pt-44;
  }
}
@media (min-width: 1666px) {
  .image-position {
    left: -12rem;
  }
}
@media (min-width: 1920px) {
  .image-position {
    left: -11rem;
  }
}
@media (min-width: 2048px) {
  .image-position {
    left: -9rem;
  }
}
@media (max-width: 1536px) {
  .intro {
    @apply px-0 md:px-20 xl:px-26 pt-64;
  }
}
@media (max-width: 1024px) {
}
@media (max-width: 1023px) {
  .intro-img {
    @apply pt-4 md:pt-8;
    // height: 450px;
    height: 670px;
  }
  .absolute-center {
    bottom: -310px;
  }
  .trusted-title {
    font-size: 36px;
    line-height: 40px;
  }
}
@media (max-width: 900px) {
  .absolute-center {
    bottom: -240px;
  }
}
@media (max-width: 767px) {
  .landing_intro_img {
    // height: 100%;
    height: 218px;
  }
  .landing_intro_img_default {
    height: 0px;
  }
  .intro_img {
    width: 400px;
    height: 218px;
    min-width: 335px;
    max-width: 335px;
  }
  .absolute-center {
    bottom: -120px;
  }
  .trusted-by {
    padding-bottom: 100px;
  }
  .trial-text {
    padding-top: 30px;
  }
  .trial {
    padding-top: 6.25rem;
  }
  .retain-title {
    @apply text-4xl;
  }
  .requiredRetain {
    border-radius: 100% / 5%;
  }
  .grid-gap {
    row-gap: 30px;
    column-gap: 26px;
    padding-top: 4.375rem;
  }
  .benifits {
    padding-top: 134px;
  }
  .archiving-soft-title {
    padding-top: 100px;
    padding-bottom: 40px;
  }
}
@media (min-width: 640px) and (max-width: 1023px) {
  .requiredRetain {
    border-radius: 100% / 10%;
  }
  .trial {
    padding-top: 8rem;
  }
  .retain-title {
    @apply text-5xl;
  }
  .grid-gap {
    row-gap: 50px;
    column-gap: 40px;
    padding-top: 4.375rem;
  }
}
@media (min-width: 1024px) and (max-width: 1439px) {
  .grid-gap {
    row-gap: 50px;
    column-gap: 40px;
    padding-top: 4.375rem;
  }
  .retain-title {
    @apply text-6xl;
  }
}
@media (max-width: 667px) {
  .h-screen {
    height: 200vh;
  }
  .absolute-center {
    width: 335px;
  }
  .intro-img {
    width: 110%;
    margin: auto;
    margin-left: -15px;
  }
  .intro-img-wrapper {
    width: 100%;
    // margin-top: -90px;
  }
}
@media (max-height: 1050px) and (min-height: 960px) {
  .h-screen {
    height: 120vh;
  }
}
@media (max-height: 959px) and (min-height: 768px) {
  .h-screen {
    height: 130vh;
  }
}
@media (max-width: 1023px) and (min-width: 768px) {
  .h-screen {
    // height: 133vh;
    height: 145vh;
  }
}
@media (max-height: 767px) and (max-width: 1600px) {
  .h-screen {
    height: 150vh;
  }
  .allInOne {
    padding-top: 140px;
  }
}
@media (max-height: 767px) and (max-width: 1366px) {
  .h-screen {
    height: 180vh;
  }
  .intro-img {
    height: 590px;
  }
}
@media (min-width: 1300px) and (max-width: 1440px) {
  .absolute-center {
    width: 453px;
    height: 254px;
    bottom: -244px;
  }
  .intro {
    border-radius: 100% / 13%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  .allInOne {
    padding-top: 140px;
  }
}
@media (min-width: 768px) and (max-width: 1299px) {
  .absolute-center {
    width: 453px;
    height: 254px;
    bottom: -244px;
  }
  .intro {
    border-radius: 100% / 10%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  .allInOne {
    padding-top: 140px;
  }
}
@media (max-width: 767px) {
  .absolute-center {
    width: 335px;
    height: 188px;
    bottom: -178px;
  }
  .intro {
    border-radius: 100% / 9%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  .allInOne {
    padding-top: 100px;
  }
}
@media (max-width: 500px) and (min-height: 500px) and (max-height: 550px) {
  .intro {
    border-radius: 100% / 5%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  .h-screen {
    height: 200vh;
  }
}

@media (max-width: 500px) and (min-height: 551px) and (max-height: 680px) {
  .intro {
    border-radius: 100% / 5%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  .h-screen {
    // height: 175vh;
    height: 197vh;
  }
}
@media (max-width: 500px) and (min-height: 681px) and (max-height: 776px) {
  .intro {
    border-radius: 100% / 5%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  .h-screen {
    // height: 160vh;
    height: 175vh;
  }
}
@media (max-width: 500px) and (min-height: 777px) and (max-height: 844px) {
  .intro {
    border-radius: 100% / 5%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  .h-screen {
    // height: 150vh;
    height: 160vh;
  }
}
@media (max-width: 500px) and (min-height: 845px) and (max-height: 927px) {
  .intro {
    border-radius: 100% / 5%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  .h-screen {
    // height: 130vh;
    height: 148vh;
  }
}
@media (max-width: 375px) {
  .intro-img {
    width: 111%;
    margin-left: -23px;
  }
}
@media (min-width: 1010px) {
  .intro_inner_body {
    flex-direction: row;
    flex-wrap: nowrap;
  }
}
@media (max-height: 864px) {
  // @apply lg:h-98;
  @media (min-width: 1024px) {
    .intro-img {
      height: 640px;
    }
  }
}
</style>
