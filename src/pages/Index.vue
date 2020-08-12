<template>
  <Layout>
    <div class="page">
      <section class="page__half"></section>
      <section class="page__content">
        <h1>Ho<br>wdy</h1>
      </section>
    </div>
  </Layout>
</template>


<script>

export default {
  components: {
  }
}
</script>

<style lang="scss">
  .page {
    background: $dark-blue;
    padding: 40px;
    position: relative;
    overflow: hidden;
    @include screenBreakpoint2(phone) {
      padding: 0;
    }
    height: 100vh;
    &__content {
      @include center('both');
      h1 {
        font-family: 'poppinsbold';
        font-size: 180px;
        color: $red;
        position: relative;
        line-height: 150px;
        &::after {
          content: '';
          position: absolute;
          background: $dark-blue;
          width: 40px;
          height: 40px;
          display: block;
          border-radius: 50%;
          right: -40px;
          bottom: 20px;
        }
      }
    }
    &__half {
      background: $light-blue;
      width: 50%;
      height: 100vh;
      transform: translateX(100%);
    }
  }
</style>
