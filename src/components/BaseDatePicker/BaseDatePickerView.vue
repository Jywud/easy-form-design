<template>
  <el-date-picker
    v-model="compVal"
    value-format="yyyy-MM-dd"
    type="date"
    placeholder="选择日期"
    :disabled="disable"
    style="width: 100%"
  >
  </el-date-picker>
</template>

<script>
export default {
  name: 'BaseDatePickerView',
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
      type: [String, Date],
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
        this.$emit('change', val);
      },
    },
  },
};
</script>
