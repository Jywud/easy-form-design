<template>
  <el-select
    v-model="compVal"
    placeholder="请选择"
    clearable
    :disabled="compData.disabled"
    style="width: 100%"
  >
    <el-option
      :label="item.name"
      :value="item.value"
      v-for="item in compData.options"
      :key="item.value"
    ></el-option>
  </el-select>
</template>

<script>
export default {
  name: 'BaseSelectView',
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
      type: String,
      default: () => '',
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
