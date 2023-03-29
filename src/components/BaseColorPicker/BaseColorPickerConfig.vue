<template>
  <div>
    <div class="mt10">
      <div class="fw600">标题：</div>
      <el-input v-model="activeComp.title" />
    </div>
    <div class="mt10">
      <div class="fw600">组件唯一值（uuid）：</div>
      <el-input v-model="activeComp.uuid" disabled />
    </div>
    <div class="mt10">
      <div class="fw600">默认值：</div>
      <el-color-picker v-model="activeComp.defaultValue"></el-color-picker>
      <!-- <el-input v-model="activeComp.defaultValue" placeholder="格式为 #000000" /> -->
    </div>
    <div class="mt10">
      <el-checkbox v-model="activeComp.required" label="是否必填" />
      <el-checkbox v-model="activeComp.disabled" label="是否禁用" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'BaseInputConfig',
  props: {
    activeComp: {
      default: () => ({
        title: '颜色选择框',
        placeholder: '请选择',
        required: false,
        disabled: false,
      }),
    },
  },
};
</script>
<style lang="less" scoped>
.mt10 {
  margin-top: 10px;
}

.mr10 {
  margin-right: 10px;
}

.mb10 {
  margin-bottom: 10px;
}

.ml10 {
  margin-left: 10px;
}

.fw600 {
  font-weight: 600;
}
</style>
