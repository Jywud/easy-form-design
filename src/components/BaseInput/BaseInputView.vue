<template>
  <el-input v-model="compVal" :disabled="disable" :placeholder="compData.placeholder" />
</template>

<script>
export default {
  name: 'BaseInputView',
  model: {
    prop: 'modelValue',
    event: 'input',
  },
  inject: {
    // 是否预览环境
    isPreview: {
      default() {
        return false;
      },
    },
  },
  props: {
    compData: {
      type: Object,
      default: () => ({ disabled: false, placeholder: '请输入' }),
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
  },
  data() {
    return {};
  },
  computed: {
    disable() {
      return this.compData.disabled || this.isPreview;
    },
    compVal: {
      get() {
        return this.modelValue;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
};
</script>
