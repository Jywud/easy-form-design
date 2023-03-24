<template>
  <div class="form-build-view">
    <el-dialog
      title="表单预览"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      width="30%"
    >
      <FormBuild ref="formBuild" @validateSuccess="validateSuccess"></FormBuild>
    </el-dialog>
  </div>
</template>

<script>
import FormBuild from '../FormBuild/index.vue';

export default {
  name: 'previewForm',
  components: { FormBuild },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    initForm(data) {
      this.dialogVisible = true;
      this.$nextTick(() => {
        this.$refs.formBuild.initDefaultForm(data);
      });
    },
    validateSuccess() {},
  },
};
</script>

<style lang="less" scoped>
.form-build-view {
}
</style>
