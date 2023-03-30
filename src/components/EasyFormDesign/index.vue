<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="form-design-view">
    <div class="component-lib-container">
      <h3>组件库</h3>
      <draggable
        class="list-group"
        ghost-class="ghost"
        v-model="componentLib"
        :group="{ name: 'dragComponets', pull: 'clone', put: false }"
        sort="false"
        :clone="handleClone"
      >
        <div class="list-group-item" v-for="(item, index) in componentLib" :key="index">
          {{ item.comName }}
        </div>
      </draggable>
    </div>
    <div class="form-design-container">
      <h3>表单编辑</h3>
      <div class="form-btns-panel">
        <slot name="formBtns">
          <el-button type="success" size="mini" @click="preViewForm">预览表单</el-button>
          <el-button type="primary" size="mini" @click="exportForm('saveToSession')"
            >导出JSON</el-button
          >
        </slot>
      </div>
      <draggable
        class="form-dragarea-box"
        v-model="formComponents"
        group="dragComponets"
        animation="300"
        @add="handleAdd"
      >
        <div
          v-for="(element, index) in formComponents"
          :key="element.uuid"
          class="form-item-wrap"
          :class="{ isActive: activeComp && activeComp.uuid === element.uuid }"
          @click="selectComp(element)"
        >
          <div class="form-title-bar">
            <span v-if="element.required" style="color: red">*</span>
            <span>{{ element.title }}</span>
          </div>
          <component
            :is="element.viewComponent"
            :compData="element"
            v-model="element.defaultValue"
            model="design"
          ></component>
          <div class="form-comp-btns">
            <el-button type="danger" icon="el-icon-delete" circle @click="deleteComp(index)" />
            <el-button
              type="primary"
              icon="el-icon-document-copy"
              circle
              @click="cloneComp(element, index)"
            />
          </div>
        </div>
      </draggable>
      <div v-if="formComponents.length === 0" class="draggable-noData">
        <NoData text="从左侧拖拽一个组件添加"></NoData>
      </div>
    </div>
    <div class="component-config-container">
      <h3>组件配置</h3>
      <div class="config-content-box">
        <component
          v-if="activeComp"
          :is="activeComp.configComponent"
          :activeComp="activeComp"
        ></component>
        <div v-else class="noData">
          <NoData text="请选择一个组件来设置属性" width="120" height="100"></NoData>
        </div>
      </div>
    </div>
    <previewForm ref="previewForm"></previewForm>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import { componentMap, getAllWidgetTypes, getWidgetListByTypes } from '../componentConfig';
import previewForm from './previewForm.vue';
import NoData from '../assets/NoData.vue';
// 获取唯一的组件id
const getId = () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  `field${(Math.floor(Math.random() * (99999 - 10000)) + 10000).toString()}${new Date()
    .getTime()
    .toString()
    .substring(5)}`;
export default {
  name: 'EasyFormDesign',
  components: { draggable, previewForm, NoData },
  provide: {
    isPreview: true,
  },
  props: {
    fields: {
      type: Array,
      default: () => getAllWidgetTypes(),
    },
  },
  data() {
    return {
      formComponents: [],
      activeComp: null,
    };
  },
  computed: {
    componentLib() {
      if (this.fields.length === 0) {
        return [];
      }
      return getWidgetListByTypes(this.fields);
    },
  },
  // mounted() {
  //   const formComponents = sessionStorage.getItem('exportFormComponents');
  //   if (formComponents) {
  //     const initForms = JSON.parse(formComponents);
  //     this.formComponents = initForms.map((config) => ({
  //       ...config,
  //       ...componentMap[config.type](),
  //     }));
  //     // eslint-disable-next-line prefer-destructuring
  //     this.activeComp = this.formComponents[0];
  //   }
  // },
  methods: {
    initForm(initForms = []) {
      if (initForms.length === 0) return;
      this.formComponents = initForms.map((config) => ({
        ...config,
        ...componentMap[config.type](),
      }));
      // eslint-disable-next-line prefer-destructuring
      this.activeComp = this.formComponents[0];
    },
    /* 处理拖拽克隆组件 */
    handleClone(Com) {
      // eslint-disable-next-line no-new
      const targetObj = new Com({ uuid: getId() });
      this.activeComp = targetObj;
      return targetObj;
    },
    // 选中组件
    selectComp(element) {
      this.activeComp = element;
    },
    /* 删除组件 */
    deleteComp(index) {
      this.formComponents.splice(index, 1);
      if (index > 0) {
        setTimeout(() => {
          this.activeComp = this.formComponents[index - 1];
        });
      } else if (this.formComponents.length === 0) {
        this.activeComp = null;
      } else {
        // eslint-disable-next-line prefer-destructuring
        this.activeComp = this.formComponents[0];
      }
    },
    /* 克隆组件 */
    cloneComp(comp, index) {
      const copyComp = { ...comp, uuid: getId() };
      this.formComponents.splice(index + 1, 0, copyComp);
    },
    /* 表单预览 */
    preViewForm() {
      const formJSON = this.exportForm();
      if (formJSON && formJSON.length > 0) {
        this.$refs.previewForm.initForm(JSON.parse(JSON.stringify(formJSON)));
      }
    },
    /* 导出表单json */
    exportForm(type) {
      const simplyFormJSON = this.formComponents.map((comp) => {
        const { configComponent, viewComponent, ...config } = comp;
        return config;
      });

      if (type === 'saveToSession') {
        const strformComponents = JSON.stringify(simplyFormJSON);
        sessionStorage.setItem('exportFormComponents', strformComponents);
      }

      return simplyFormJSON;
    },
    // eslint-disable-next-line no-unused-vars
    handleAdd(a, b) {
      // debugger;
    },
  },
};
</script>

<style lang="less" scoped>
.form-design-view {
  display: flex;
  height: 100%;
  padding: 20px;
  background: #f8f8f8;
  overflow: hidden;
}

.ghost {
  opacity: 0.8;
  background: #333;
}

.component-lib-container {
  height: 100%;
  overflow-y: auto;
  width: 320px;
  background-color: #fff;
  padding: 10px;
  .list-group {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;

    .list-group-item {
      height: 32px;
      line-height: 32px;
      background-color: #f4f6fc;
      border: 1px solid #f4f6fc;
      color: #333;
      margin-bottom: 10px;
      cursor: move;
      width: 140px;
      text-align: center;
      font-size: 13px;
      margin-right: 5px;

      &:hover {
        // border: 1px dashed #0070ff;
        color: #0070ff;
        box-shadow: 0 1px 6px #0070ff;
      }
    }
  }
}

.form-design-container {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
  margin: 0 20px;
  background-color: #fff;
  padding: 10px;

  .form-btns-panel {
    margin: 10px 0;
  }

  .form-dragarea-box {
    flex: 1;
    overflow-y: auto;
    padding: 20px 10px;
    // border: 1px solid rgba(0, 0, 0, 0.8);
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.04);

    .form-item-wrap {
      position: relative;
      padding: 10px 6px 30px;

      .form-title-bar {
        margin-bottom: 8px;
      }

      .form-comp-btns {
        position: absolute;
        right: 10px;
        bottom: -10px;
        display: none;
      }

      &.isActive {
        background-color: #fffaf1;
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);

        .form-comp-btns {
          display: block;
        }
      }
    }
  }

  .draggable-noData {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

.component-config-container {
  height: 100%;
  overflow-y: auto;
  width: 400px;
  padding: 10px;
  background-color: #fff;
  .noData {
    margin-top: 120px;
    text-align: center;
  }
}
</style>
