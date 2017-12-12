<template lang="pug">
  div
    h1 hello world
      div(slot="content") 123
</template>

<script>
  import api from '@/api/api';

  export default {
    data() {
      return {
        list: [],
      };
    },
    mounted() {
      api.getList()
        .then((data) => {
          this.list = data;
        })
        .catch(() => {
        });
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style
  scoped
  lang="scss"
>
</style>
