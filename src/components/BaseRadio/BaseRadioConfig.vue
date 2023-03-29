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
    <div class="mt10">
      <el-checkbox v-model="activeComp.required" label="是否必填" />
      <el-checkbox v-model="activeComp.disabled" label="是否禁用" />
    </div>
    <div class="options-panel mt10">
      <p class="mb10 fw600">选项配置：</p>
      <div class="tip-box">请勿使用相同的选项值!</div>
      <div class="mb10" v-for="(item, index) in activeComp.options" :key="item.value">
        选项名:<el-input v-model="item.name"></el-input> 选项值:<el-input
          v-model="item.value"
        ></el-input>
        <el-button type="danger" size="mini" link @click="activeComp.options.splice(index, 1)"
          >删除</el-button
        >
      </div>
      <el-button type="primary" @click="addOption">添加选项</el-button>
    </div>
    <div class="mt10">
      <div class="fw600">默认值：</div>
      <el-radio-group v-model="activeComp.defaultValue">
        <el-radio :label="item.value" v-for="item in activeComp.options" :key="item.value">{{
          item.name
        }}</el-radio>
      </el-radio-group>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BaseRadioConfig',
  props: {
    activeComp: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
  methods: {
    addOption() {
      this.activeComp.options.push({ value: 'XXX', name: 'XXX' });
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
.tip-box {
  color: #fff;
  padding: 5px;
  background-color: #e6a23c;
}
</style>
