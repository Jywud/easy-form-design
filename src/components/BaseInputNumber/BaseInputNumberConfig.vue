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
      <div class="fw600">最小值：</div>
      <el-input @change="changeNumer($event, 'min')" v-model="min" />
    </div>
    <div class="mt10">
      <div class="fw600">最大值：</div>
      <el-input @change="changeNumer($event, 'max')" v-model="max" />
    </div>
    <div class="mt10">
      <div class="fw600">默认值：</div>
      <el-input v-model="activeComp.defaultValue" />
    </div>
    <div class="mt10">
      <div class="fw600">步长：</div>
      <el-input @change="changeNumer($event, 'step')" v-model="step" />
    </div>
    <div class="mt10">
      <div class="fw600">精度：</div>
      <el-input @change="changeNumer($event, 'precision')" v-model.number="precision" />
      <div class="tips">非负整数，且不能小于 步长 的小数位数</div>
    </div>
    <div class="mt10">
      <el-checkbox v-model="activeComp.required" label="是否必填" />
      <el-checkbox v-model="activeComp.disabled" label="是否禁用" />
      <el-checkbox v-model="activeComp.stepStrictly" label="是否只输入步长的倍数" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseInputNumberConfig',
  props: {
    activeComp: {
      default: () => ({
        title: '计数器',
        required: false,
        disabled: false,
        min: 0,
        max: 100,
        step: 1,
        stepStrictly: false,
        defaultValue: 0,
        precision: 0,
      }),
    },
  },
  data() {
    return {
      min: 0,
      max: 0,
      step: 0,
      precision: 0,
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      this.min = this.activeComp.min;
      this.max = this.activeComp.max;
      this.step = this.activeComp.step;
      this.precision = this.activeComp.precision;
    },
    changeNumer(val, type) {
      if (Number(val)) {
        this.activeComp[type] = Number(val);

        if (type === 'min' && this.activeComp.defaultValue < Number(val)) {
          this.activeComp.defaultValue = Number(val);
        }
        if (type === 'max' && this.activeComp.defaultValue > Number(val)) {
          this.activeComp.defaultValue = Number(val);
        }
        // 修改步长 影响精度值
        if (type === 'step') {
          const FloatStr = `${this.activeComp.step}`.split('.')[1];
          if (FloatStr) {
            this.activeComp.precision = FloatStr.length;
            this.precision = FloatStr.length;
          } else {
            this.activeComp.precision = 0;
            this.precision = 0;
          }
        }
        // 修改精度值
        if (type === 'precision') {
          const FloatStr = `${this.activeComp.step}`.split('.')[1];
          if (FloatStr && FloatStr.length > this.activeComp.precision) {
            this.activeComp.precision = FloatStr.length;
            this.precision = FloatStr.length;
          }
        }
      } else {
        this[type] = this.activeComp[type];
      }
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
.tips {
  font-size: 12px;
  color: #999;
  line-height: 20px;
}
</style>
