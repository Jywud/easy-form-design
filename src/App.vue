<template>
  <div id="app">
    <!-- <FormDesign ref="formDesign"></FormDesign> -->
    <EasyFormDesign ref="formDesign"></EasyFormDesign>
  </div>
</template>

<script>
// import FormDesign from '@/components/FormDesign/index.vue';
import { EasyFormDesign } from '@/components';

export default {
  name: 'App',
  components: {
    // FormDesign,
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
