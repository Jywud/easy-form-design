<template>
  <!-- <el-radio-group v-model="compVal" :disabled="compData.disabled">
    <el-radio :label="item.value" v-for="item in compData.options" :key="item.value">{{
      item.name
    }}</el-radio>
  </el-radio-group> -->
  <el-checkbox-group v-model="compVal" :disabled="compData.disabled">
    <el-checkbox :label="item.value" v-for="item in compData.options" :key="item.value">{{
      item.name
    }}</el-checkbox>
  </el-checkbox-group>
</template>

<script>
export default {
  name: 'BaseCheckboxView',
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
