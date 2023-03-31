<template>
  <div>
    <el-input-number
      v-model="compVal"
      :min="compData.min"
      :max="compData.max"
      :disabled="disable"
      :step="compData.step"
      :step-strictly="compData.stepStrictly"
      :size="compData.size"
      :precision="compData.precision"
    ></el-input-number>
  </div>
</template>

<script>
export default {
  name: 'BaseInputNumberView',
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
    readonly() {
      return this.isPreview;
    },
    disable() {
      return this.compData.disabled;
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

<style lang="less" scoped></style>
