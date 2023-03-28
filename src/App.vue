<template>
  <div id="app">
    <EasyFormDesign ref="formDesign"></EasyFormDesign>
  </div>
</template>

<script>
import { EasyFormDesign } from '@/components';

export default {
  name: 'App',
  components: {
    EasyFormDesign,
  },
  mounted() {
    const formComponents = sessionStorage.getItem('exportFormComponents');
    if (formComponents) {
      try {
        const initForms = JSON.parse(formComponents);
        this.$refs.formDesign.initForm(initForms);
      } catch (error) {
        console.log(error);
      }
    }
  },
};
</script>

<style lang="less">
#app {
  height: 100vh;
}
</style>
