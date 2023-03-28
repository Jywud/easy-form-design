<template>
  <div>
    <div class="mt10">
      <div class="fontw">标题：</div>
      <el-input v-model="activeComp.title" />
    </div>
    <div class="mt10">
      <div class="fontw">组件唯一值（uuid）：</div>
      <el-input v-model="activeComp.uuid" disabled />
    </div>
    <div class="mt10">
      <div class="fontw">提示文案：</div>
      <el-input v-model="activeComp.placeholder" />
    </div>
    <div class="mt10">
      <div class="fontw">最大长度：</div>
      <el-input v-model="activeComp.maxlength" />
    </div>
    <div class="mt10">
      <div class="fontw">默认值：</div>
      <el-input v-model="activeComp.defaultValue" />
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
        title: '输入框',
        placeholder: '请输入',
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
