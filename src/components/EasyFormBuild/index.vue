<template>
  <div class="client-view">
    <el-form ref="formRef" label-position="top" :rules="formRules" :model="ruleForm">
      <el-form-item
        v-for="comp in formJsonList"
        :key="comp.uuid"
        :prop="comp.uuid"
        :label="comp.title"
      >
        <component
          :is="comp.viewComponent"
          :compData="comp"
          v-model="ruleForm[comp.uuid]"
        ></component>
      </el-form-item>
    </el-form>
    <slot name="btns">
      <el-button type="primary" size="small" @click="validateForm">表单校验</el-button>
      <el-button type="danger" size="small" @click="resetForm">表单重置</el-button>
    </slot>
  </div>
</template>

<script>
import componentMap from '../componentMap';

export default {
  name: 'EasyFormBuild',
  data() {
    return {
      formJsonList: [],
      ruleForm: {},
      formRules: {},
    };
  },
  methods: {
    /* 初始化表单-父组件调用 */
    initForm(data) {
      this.formJsonList = data.map((comp) => ({
        ...comp,
        viewComponent: componentMap[comp.type]().viewComponent,
      }));
      this.initFormRender();
    },
    /* 初始化表单 */
    initFormRender() {
      this.formJsonList.forEach((comp) => {
        this.setFormDefaultData(comp);
        this.setFormRules(comp);
      });
    },
    /* 设置表单默认值 */
    setFormDefaultData(comp) {
      if (comp.defaultValue !== undefined && comp.defaultValue !== '') {
        try {
          // eslint-disable-next-line operator-linebreak
          this.$set(
            this.ruleForm,
            comp.uuid,
            typeof comp.defaultValue === 'object'
              ? JSON.parse(JSON.stringify(comp.defaultValue))
              : comp.defaultValue
          );
        } catch (error) {
          console.error(error);
        }
      }
    },
    /* 设置表单规则 */
    setFormRules(comp) {
      if (comp.type === 'BaseInput' || comp.type === 'BaseTextarea') {
        this.formRules[comp.uuid] = [
          { required: comp.required, message: '请输入', trigger: 'blur' },
        ];
      } else {
        this.formRules[comp.uuid] = [
          { required: comp.required, message: '请选择', trigger: 'change' },
        ];
      }
      //  else if (
      //   comp.type === 'BaseRadio' ||
      //   comp.type === 'BaseCheckbox' ||
      //   comp.type === 'BaseSelect' ||
      //   comp.type === 'BaseColorPicker'
      // ) {
      //   this.formRules[comp.uuid] = [
      //     { required: comp.required, message: '请选择', trigger: 'change' },
      //   ];
      // }
    },
    /* 设置表单数据-父组件调用 */
    setFormData(data) {
      if (typeof data !== 'object') return;

      Object.keys(this.ruleForm).forEach((key) => {
        if (data[key]) {
          this.$set(this.ruleForm, key, data[key]);
        }
      });
    },
    /* 模拟表单提交 */
    validateForm() {
      return new Promise((resolve, reject) => {
        const { formRef } = this.$refs;
        if (!formRef) return;

        formRef.validate((valid, fields) => {
          if (valid) {
            console.log(
              'submit!===ruleForm: ',
              this.ruleForm,
              '======formJsonList: ',
              this.formJsonList
            );
            this.$emit('validateSuccess', this.ruleForm, this.formJsonList, fields);
            resolve(this.ruleForm, this.formJsonList);
          } else {
            // console.log('error submit!', fields);
            reject();
          }
        });
      });
    },
    /* 重置表单 */
    resetForm() {
      const { formRef } = this.$refs;
      if (!formRef) return;
      formRef.resetFields();
    },
  },
};
</script>
