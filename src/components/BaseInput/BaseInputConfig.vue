<template>
  <div>
    <div class="mt10">
      <div class="fontw">标题</div>
      <el-input v-model="activeComp.title" />
    </div>
    <div class="mt10">
      <div class="fontw">提示</div>
      <el-input v-model="activeComp.placeholder" />
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
