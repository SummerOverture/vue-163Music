<template>
  <div id="app">
    <div id="header">
      <div class="header-wrapper">
        <div class="left">网易云音乐</div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'app',
    created() {
      this.$store.subscribe((mutation) => {
        if (mutation.type === 'setRequestStatus') {
          if (mutation.payload === 'start') {
            this.$vux.loading.show({
              text: 'Loading',
            });
          }
          if (mutation.payload === 'end') {
            this.$vux.loading.hide();
          }
        }
      });
    },
  };
</script>

<style lang="scss" scoped>
  #header {
    height: 64px;

    .header-wrapper {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      display: -webkit-box;
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      align-items: center;
      padding: 0 10px;
      width: 100%;
      height: 64px;
      background-color: #d43c33;
      box-sizing: border-box;
    }
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
