<template>
  <div class="layout" :class="[{ 'menu--preopened': menuPreOpen }, {'menu--opened': menuIsOpen}]">
    <Header />
    <Menu/>
    <slot/>
    <Footer />
    <Socials/>
    <div class="borders" :class="{'borders--big': menuIsOpen}">
      <div class="top"></div>
      <div class="bottom"></div>
      <div class="left"></div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Socials from "../components/Socials";
import { mapState } from 'vuex';

export default {
  components: {
    Socials,
    Header,
    Footer,
    Menu
  },
  computed: {
    ...mapState([
      'menuPreOpen',
      'menuIsOpen'
    ]),
  },
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
h1 {
  font-size: 40px;
}
h2 {
  font-size: 32px;
  &.jumbo {
    font-size: 50px;
  }
}
h3 {
  font-size: 28px;
}
h4 {
  font-size: 24px;
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
    transition: transform $main-transition;
    transform-origin: center center;
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
    transform-origin: top center;
    @include screenBreakpoint2(phone) {
      transform: translate(0, -100%) scale(1);
    }
  }
  .bottom {
    bottom: 0;
    left: 0;
    width: 100%;
    transform-origin: bottom center;
    @include screenBreakpoint2(phone) {
      transform: translate(0, 100%) scale(1);
    }
  }
  .left {
    top: 0;
    left: 0;
    height: 100%;
    transform-origin: left center;
    @include screenBreakpoint2(phone) {
      transform: translate(-100%, 0px) scale(1);
    }
  }
  .right {
    top: 0;
    right: 0;
    height: 100%;
    transform-origin: right center;
    @include screenBreakpoint2(phone) {
      transform: translate(100%, 0px) scale(1);
    }
  }
}

.menu--opened {
  overflow: hidden;
  height: 100vh;
  .borders > * {
    transform: translate(0, 0%) scale(2);
  }
}
</style>
