<template>
  <div class="layout" :class="{ 'sticky-header': $route.path === '/' }">
    <Header />
    <slot/>
    <Footer />
    <Socials/>
    <div class="borders">
      <div class="top"></div>
      <div class="bottom"></div>
      <div class="left"></div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Socials from "../components/Socials";

export default {
  components: {
    Socials,
    Header,
    Footer
  }
}
</script>


<style lang="scss">
* {
  box-sizing: border-box;
}

a {
  color: inherit;
}
img {
  max-width: 100%;
}
body, .layout {
  padding: 0;
  margin: 0;
  min-height: 100vh;
  font-family: 'poppinslight';
}
h1, h2, h3, h4 {
  margin: 0;
  font-family: 'poppinsbold';
}

button {
  border: none;
  margin: 0;
  padding: 0;
  overflow: visible;
  background-color: transparent;
  cursor: pointer;
  color: inherit;
  font: inherit;
  text-align: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
}
.borders {
  & > * {
    position: fixed;
    z-index: 10;
    background: white;
    height: 40px;
    width: 40px;
    pointer-events: none;
    -webkit-transition: -webkit-transform 500ms cubic-bezier(0.7, 0, 0.3, 1) 0ms;
    -moz-transition: -moz-transform 500ms cubic-bezier(0.7, 0, 0.3, 1) 0ms;
    transition: transform 500ms cubic-bezier(0.7, 0, 0.3, 1) 0ms;
    -webkit-transform-origin: center center;
    -moz-transform-origin: center center;
    -ms-transform-origin: center center;
    -o-transform-origin: center center;
    transform-origin: center center;
    -webkit-transform: translate(0, 0) scale(1);
    -moz-transform: translate(0, 0) scale(1);
    -ms-transform: translate(0, 0) scale(1);
    -o-transform: translate(0, 0) scale(1);
    transform: translate(0, 0) scale(1);
    @include screenBreakpoint2(phone) {
      width: 20px;
      height: 20px;
    }
  }
  .top {
    top: 0;
    left: 0;
    width: 100%;
    -webkit-transform-origin: top center;
    -moz-transform-origin: top center;
    -ms-transform-origin: top center;
    -o-transform-origin: top center;
    transform-origin: top center;
    @include screenBreakpoint2(phone) {
      transform: translate(0, -100%) scale(1);
    }
  }
  .bottom {
    bottom: 0;
    left: 0;
    width: 100%;
    -webkit-transform-origin: bottom center;
    -moz-transform-origin: bottom center;
    -ms-transform-origin: bottom center;
    -o-transform-origin: bottom center;
    transform-origin: bottom center;
    @include screenBreakpoint2(phone) {
      transform: translate(0, 100%) scale(1);
    }
  }
  .left {
    top: 0;
    left: 0;
    height: 100%;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -ms-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
    @include screenBreakpoint2(phone) {
      transform: translate(-100%, 0px) scale(1);
    }
  }
  .right {
    top: 0;
    right: 0;
    height: 100%;
    -webkit-transform-origin: right center;
    -moz-transform-origin: right center;
    -ms-transform-origin: right center;
    -o-transform-origin: right center;
    transform-origin: right center;
    @include screenBreakpoint2(phone) {
      transform: translate(100%, 0px) scale(1);
    }
  }
}
</style>
