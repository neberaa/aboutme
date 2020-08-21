<template>
  <header class="header" :class="{sticky: $route.path === '/' || $route.path.includes('/projects/')}">
    <div class="container">
      <div class="left">
        <g-link :to="{ name: 'home' }" class="home-link">
          <span>n/tony></span>
        </g-link>
      </div>
      <section class="lang right">
        <button
          @click="langActive = !langActive"
          :class="{'lang__btn--active': langActive}"
          class="lang__btn">
          EN
        </button>
        <button
          @click="langActive = !langActive"
          :class="{'lang__btn--active': !langActive}"
          class="lang__btn">
          UA
        </button>
      </section>
    </div>
    <div
      @mouseover="menuPreOpen = true"
      @mouseleave="menuPreOpen = false"
      class="hamburger hamburger--spin js-hamburger"
      :class="{'is-active': menuIsOpen}"
      @click="menuIsOpen = !menuIsOpen">
      <div class="hamburger-box">
        <div class="hamburger-inner"/>
      </div>
    </div>
  </header>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      logo: require("../../static/logo.svg"),
      settings: require("../../data/theme.json"),
      langActive: true,
      menuIsOpen: false,
      menuPreOpen: false,
    }
  },
  watch: {
    menuPreOpen(state) {
      this.togglePreOpenMenu(state);
    },
    menuIsOpen(state) {
      this.toggleMenu(state);
    }
  },
  methods: {
    ...mapMutations([
      'togglePreOpenMenu',
      'toggleMenu',
    ]),
  }
}
</script>

<style lang="scss" scoped>
@import "~hamburgers/_sass/hamburgers/hamburgers";
.header {
  position: fixed;
  height: 40px;
  z-index: 11;
  width: 100%;
  transition: height $main-transition;
  @include screenBreakpoint2(phone) {
    height: 20px;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 0 40px;
    transition: padding $main-transition;
    .home-link {
      text-decoration: none;
      h4 {
        color: $dark-blue;
      }
      .logo {
        height: 20px;
        @include screenBreakpoint2(phone) {
          height: 10px;
        }
      }
    }
    .lang {
      &__btn {
        opacity: 0.5;
        font-size: 12px;
        font-family: 'poppinsbold';
        color: $dark-blue;
        transition: opacity 300ms ease;
        &:not(:last-of-type) {
          margin-right: 10px;
        }
        &--active {
          opacity: 1;
        }
      }
    }
  }
  .hamburger {
    position: fixed;
    padding: 0;
    height: 22px;
    z-index: 11;
    top: calc(50% - 11px);
    left: 10px;
    width: 20px;
    transition: all $main-transition;
    &:hover {
      opacity: 1;
    }
    &-box {
      width: 21px;
    }
    &-inner,
    &-inner::before,
    &-inner::after {
      width: 20px;
      height: 3px;
      background-color: $dark-blue;
    }

    &-inner::before {
      top: -6px;
    }

    &-inner::after {
      bottom: -6px;
    }

    &.is-active {
      .hamburger-inner,
      .hamburger-inner::before,
      .hamburger-inner::after {
        background-color: $red;
      }
    }
  }
}

.menu--opened {
  .header {
    height: 120px;
    .container {
      padding: 0 80px 0 120px;
    }
    .hamburger {
      left: 80px;
      transform: scale(1.5);
    }
  }
}
</style>
