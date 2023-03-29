<template>
  <div>
    <div class="mt10">
      <div class="mb10 fw600">标题：</div>
      <el-input v-model="activeComp.title" />
    </div>
    <div class="mt10">
      <div class="fw600">组件唯一值（uuid）：</div>
      <el-input v-model="activeComp.uuid" disabled />
    </div>
    <!-- <div class="mt10">
      <div class="fw600">默认值：</div>
      <el-date-picker
        v-model="activeComp.defaultValue"
        value-format="yyyy-MM-dd"
        type="date"
        placeholder="选择日期"
      >
      </el-date-picker>
    </div> -->
    <div class="mt10">
      <el-checkbox v-model="activeComp.required" label="是否必填" />
      <el-checkbox v-model="activeComp.disabled" label="是否禁用" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'BaseDateRangePickerConfig',
  props: {
    activeComp: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
  methods: {},
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
.tip-box {
  color: #fff;
  padding: 5px;
  background-color: #e6a23c;
}
</style>
