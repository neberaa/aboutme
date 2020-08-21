<template>
  <div class="menu-container">
    <div class="menu-container__content">
      <nav class="navigation">
        <a href="/">Menu item</a>
        <a href="/">Menu item2</a>
        <a href="/">Menu item3</a>
      </nav>
      <main class="contact-info"></main>
      <footer class="footer">
        Copyright protected
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Menu"
  }
</script>

<style lang="scss" scoped>
.menu-container {
  width: 100%;
  height: 100%;
  background: $white;
  z-index: 1;
  position: absolute;
  transform: translateX(-100%);
  transition: transform 500ms cubic-bezier(1, 0, 0, 1) 0ms, left 500ms cubic-bezier(1, 0, 0, 1) 0ms;
  display: flex;
  justify-content: center;
  align-items: center;
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - (120px * 2));
    .navigation {
      display: flex;
      flex-direction: column;
    }
  }

}

.menu--preopened .menu-container {
  transform: translateX(-94%);
}
.menu--opened .menu-container {
  transform: translateX(-24%);
}
</style>
