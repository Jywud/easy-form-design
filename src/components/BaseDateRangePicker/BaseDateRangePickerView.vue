<template>
  <el-date-picker
    v-model="compVal"
    type="daterange"
    value-format="yyyy-MM-dd"
    range-separator="至"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    :disabled="disable"
    style="width: 100%"
  >
  </el-date-picker>
</template>

<script>
export default {
  name: 'BaseDateRangePicker',
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
      type: Array,
      default: () => [],
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
        this.$emit('change', val);
      },
    },
  },
};
</script>
