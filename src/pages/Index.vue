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
        <div class="page__content">
          <img src="../../uploads/cody-davis-253925-unsplash.jpg" alt="my-photo" class="photo">
          <h3 class="section-header">About me</h3>
          <div class="description" v-text="descriptionFull"/>
          <div ref="pageAboutDescription" class="description" v-html="desc"/>
        </div>
      </section>
      <section ref="pagePortfolio" id="portfolio" class="page page--portfolio">
        <div class="background"/>
      </section>
    </div>
  </Layout>
</template>


<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Splitting from "splitting";
// import "splitting/dist/splitting.css";
// import "splitting/dist/splitting-cells.css";

export default {
  metaInfo: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' }
    ]
  },
  data() {
    return {
      desc: '',
      descriptionFull: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,\n" +
        "            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,\n" +
        "            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.\n" +
        "            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    }
  },
  mounted() {
    // const split = Splitting({
    //   target: '.description--hidden',
    //   by: 'words',
    // });
    // split[0].words.forEach((w, i) => {
    //   this.desc += `<h4>${w.outerHTML}</h4>`;
    // });
    gsap.registerPlugin(ScrollTrigger);
    const {pageAbout, pageHomeDot, pageHomeHalf, pageHomeContent, pageAboutDescription} = this.$refs;

    gsap.from(pageHomeHalf, {width: '100%', x: 0, delay: 0.5, duration: 1});
    gsap.from(pageHomeDot, {rotateX: 1440, delay: 2.5, duration: 1});
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
    setTimeout(() => {
      gsap.to('.description .word', {
        scrollTrigger: {
          trigger: pageAbout,
          start: '+=100'
        },
        // stagger: 0.1,
        top: 0,
        opacity: 1,
        duration: 1,
      })
    }, 1000);

    gsap.to('.background', {
      scrollTrigger: {
        trigger: pageAbout,
        start: '+=20%',
        scrub: 1,
      },
      // stagger: 0.1,
      width: "40vw",
      duration: 1,
    })
  }
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
          top: 40%;
          max-width: 40%;
          .photo {
            border-radius: 50%;
            width: 100px;
            height: 100px;
          }
          .description {
            &--hidden {
              display: none;
            }
            h4 {
              overflow: hidden;
              display: inline-block;
              height: 30px;
              position: relative;
              &:not(:last-of-type) {
                padding-right: 5px;
              }
              .word {
                top: 30px;
                opacity: 0;
                position: relative;
                /*position: absolute;*/
                /*<!--top: -35px;-->*/
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
      }
    }
  }
  .menu--opened {
    .page {
      padding: 80px;
    }
  }
</style>
