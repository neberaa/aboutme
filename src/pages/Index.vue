<template>
  <Layout>
    <div class="page-wrapper">
      <section ref="pageHome" id="home" class="page page--home">
        <div ref="pageHomeHalf" class="page__half"/>
        <div ref="pageHomeContent" class="page__content">
          <h1 class="title title--part1">Ho</h1>
          <br>
          <h1 class="title title--part2">wdy</h1>
          <div ref="pageHomeDot" class="dot"/>
        </div>
      </section>
      <section ref="pageAbout" id="about" class="page page--about">
        <div ref="pageAboutContent" class="page__content">
          <img src="../../uploads/avatar.jpg" alt="my-photo" class="photo">
          <div class="icon">
            <QRCode/>
          </div>
          <h2 class="section-header" v-html="aboutMeTitle"/>
          <div class="description" v-html="descriptionFull"/>
        </div>
      </section>
      <section ref="pagePortfolio" id="portfolio" class="page page--portfolio">
        <div class="background"/>
        <div ref="pagePortfolioContent" class="page__content">

        </div>
      </section>
    </div>
  </Layout>
</template>


<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import QRCode from '../assets/icons/qr-code.svg';

export default {
  metaInfo: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' }
    ]
  },
  components: {
    QRCode,
  },
  data() {
    return {
      aboutMeTitle: 'About me',
      descriptionFull: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,\n" +
        "            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,\n" +
        "            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.\n" +
        "            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    }
  },
  mounted() {
    this.splitAboutMe().then(() => this.sectionAnimation());
  },
  methods: {
    async splitAboutMe() {
      const [splittedDesc] = this.splittedText('#about .description');
      const [splittedTitle] = this.splittedText('#about .section-header');

      this.descriptionFull = '';
      this.aboutMeTitle = '';
      splittedDesc.words.forEach((w, i) => {
        this.descriptionFull += `<h5>${w.outerHTML}</h5>`;
      });
      splittedTitle.words.forEach((w, i) => {
        this.aboutMeTitle += `<h2 class="jumbo">${w.outerHTML}</h2>`;
      });
    },
    splittedText(targetSelector) {
      return Splitting({
        target: targetSelector,
        by: 'words',
      });
    },
    sectionAnimation() {
      gsap.registerPlugin(ScrollTrigger);

      const { pageAbout, pageHomeDot, pageHomeHalf, pageHomeContent, pageAboutContent, pagePortfolio, pagePortfolioContent } = this.$refs;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pageAbout
        },
        duration: 0.4
      });

      // Home screen
      gsap.from(pageHomeHalf, {width: '100%', x: 0, delay: 0.5, duration: 0.8});
      gsap.from(pageHomeDot, {rotateX: 1440, delay: 2, duration: 1});
      gsap.from(pageHomeContent, {height: "150%", delay: 1, duration: 1});
      gsap.to(pageHomeContent, {
        scrollTrigger: {
          trigger: pageAbout,
          scrub: 1,
        },
        x: '150%',
        y: '100vh',
        duration: 0.5
      });
      gsap.to(pageHomeHalf, {
        scrollTrigger: {
          trigger: pageAbout,
          scrub: 0.5,
        },
        y: '90%',
        // background: '#f73859',
        duration: 0.5
      });

      // About me screen
      tl.from(pageAboutContent, {
        x: '-50%',
        opacity: 0
      });
      tl.to('.section-header .word', {
        top: 0,
        opacity: 1
      });
      tl.to('.description .word', {
        top: 0,
        opacity: 1
      });
      tl.from('.icon', {
        opacity: 0,
        duration: 0.6
      });

      // Portfolio screen
      gsap.to('.background', {
        scrollTrigger: {
          trigger: pageAbout,
          start: '+=20%',
          scrub: 1,
        },
        // stagger: 0.1,
        width: "40vw",
        duration: 1,
      });

      //Footer
      // gsap.from('.footer', {
      //   scrollTrigger: {
      //     trigger: pagePortfolio,
      //     // scrub: 0.6,
      //   },
      //   // stagger: 0.1,
      //   bottom: "-80px",
      //   duration: 0.6,
      // });
      //
      // gsap.to('.page-wrapper', {
      //   scrollTrigger: {
      //     trigger: pagePortfolio,
      //     // scrub: 0.6,
      //   },
      //   // stagger: 0.1,
      //   marginBottom: "100px",
      //   duration: 0.6,
      // });
    }
  },
}
</script>

<style lang="scss">
  .page-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
    .page {
      padding: 40px;
      width: 100%;
      height: 100vh;
      position: relative;
      transition: padding $main-transition;
      @include screenBreakpoint2(phone) {
        padding: 0;
      }
      &--home {
        background: $dark-blue;
        .page__content {
          @include center('both');
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: auto;
          .title {
            font-family: 'poppinsbold';
            font-size: 180px;
            color: $red;
            position: relative;
            line-height: 150px;
            @include screenBreakpoint2(phone) {
              font-size: 100px;
              line-height: 80px;
            }
          }
          .dot {
            content: '';
            position: absolute;
            background: $dark-blue;
            width: 40px;
            height: 40px;
            display: block;
            border-radius: 50%;
            right: -40px;
            bottom: 20px;
            @include screenBreakpoint2(phone) {
              width: 25px;
              height: 25px;
              right: -30px;
              bottom: 12px;
            }
          }
        }
        .page__half {
          background: $light-blue;
          width: 50%;
          height: 100vh;
          transform: translateX(100%);
        }
      }
      &--about {
        .page__content {
          position: absolute;
          top: 10%;
          max-width: 40%;
          margin-left: 5%;
          * {
            color: $dark-blue;
          }
          .photo {
            /*border-radius: 50%;*/
            width: 280px;
            height: 280px;
            margin-bottom: 20px;
          }
          .icon {
            position: absolute;
            top: -40px;
            right: -100px;
          }
          .section-header {
            margin-bottom: 20px;
            position: relative;
            display: block;
            h2 {
              overflow: hidden;
              display: inline-block;
              position: relative;
              margin: 0;
              &:not(:last-of-type) {
                padding-right: 20px;
              }
              .word {
                opacity: 0;
                position: relative;
                top: -35px;
                color: $red;
              }
            }
          }
          .description {
            h5 {
              overflow: hidden;
              display: inline-block;
              height: 30px;
              position: relative;
              margin: 0;
              font-size: 20px;
              &:not(:last-of-type) {
                padding-right: 5px;
              }
              .word {
                opacity: 0;
                position: relative;
                top: -35px;
              }
            }
          }
        }
      }
      &--portfolio {
        position: relative;
        .background {
          background: url("../../uploads/ian-dooley-281897-unsplash.jpg") center no-repeat;
          width: 100vw;
          height: 100vh;
          background-size: cover;
        }
        .page__content {
          width: 100%;
          height: 400px;
          @include center('y');
        }
      }
    }
  }
  .menu--opened {
    .page {
      padding: 80px;
    }
  }
</style>
