<template>
  <!-- <el-input v-model="compVal" :disabled="disable" :placeholder="compData.placeholder" /> -->
  <el-radio-group v-model="compVal" :disabled="compData.disabled">
    <el-radio :label="item.value" v-for="item in compData.options" :key="item.value">{{
      item.name
    }}</el-radio>
  </el-radio-group>
</template>

<script>
export default {
  name: 'BaseRadioView',
  model: {
    prop: 'modelValue',
    event: 'change',
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
      default: () => ({ disabled: false, placeholder: '请选择' }),
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
        this.$emit('change', val);
      },
    },
  },
};
</script>
