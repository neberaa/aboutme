<template>
<aside class="socials">
  <a href="/" class="socials__item">
    <FacebookIcon class="icon"/>
  </a>
  <a href="/" class="socials__item">
    <InIcon class="icon"/>
  </a>
  <a href="/" class="socials__item">
    <MailIcon class="icon"/>
  </a>
</aside>
</template>

<script>
import FacebookIcon from '../assets/icons/facebook.svg';
import InIcon from '../assets/icons/linkedin.svg';
import MailIcon from '../assets/icons/at.svg';

export default {
  name: "Socials",
  components: {
    FacebookIcon,
    InIcon,
    MailIcon
  }
}
</script>

<style lang="scss" scoped>
.socials {
  position: fixed;
  right: 0;
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: calc(50% - 64px);
  z-index: 11;
  &__item {
    width: 15px;
    height: 15px;
    &:not(:last-of-type) {
      margin-bottom: 15px;
    }
    &:hover {
      .icon {
        fill: $red;
      }
    }
    .icon {
      width: 15px;
      height: 15px;
      fill: $dark-blue;
      transition: fill 300ms ease;
    }
  }

}
</style>
