<template>
  <div class="form-build-view">
    <el-dialog
      title="表单预览"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      width="30%"
    >
      <EasyFormBuild
        v-if="dialogVisible"
        ref="formBuild"
        @validateSuccess="validateSuccess"
      ></EasyFormBuild>
    </el-dialog>
  </div>
</template>

<script>
import EasyFormBuild from '../EasyFormBuild/index.vue';

export default {
  name: 'previewForm',
  provide: {
    isPreview: false,
  },
  components: { EasyFormBuild },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    initForm(data) {
      this.dialogVisible = true;
      this.$nextTick(() => {
        this.$refs.formBuild.initForm(data);
      });
    },
    validateSuccess() {},
  },
};
</script>
