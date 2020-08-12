<template>
    <footer class="footer">
        <div class="container">
            <span v-html="settings.footer" />
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            settings: require("../../data/theme.json")
        }
    }
}
</script>

<style lang="scss" scoped>
.footer {
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 60px 40px;
  z-index: 0;
  @include screenBreakpoint2(phone) {
    padding: 40px 20px;
  }
}
</style>
