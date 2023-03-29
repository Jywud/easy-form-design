# easy-form-design

## 简介

easy-form-design 是一个基于 vue2, element-ui，vuedraggable 的自定义表单设计器。主要功能是能通过简单操作来生成配置表单，生成可保存的 JSON 数据，并能将 JSON 还原成表单，使表单开发更简单更快速。

- [demo 预览](https://jywud314.gitee.io/easy-form-design)
- [开源地址](https://gitee.com/jywud314/easy-form-design.git)

## 组件

- EasyFormDesign 表单设计器（基于可视化操作快速设计出表单页面，生成配置 json 或页面）
- EasyFormBuild 表单构建器（根据设计器中获取的配置 json 数据，快速构建出表单页面）

## 安装

```shell
// use npm
npm install easy-form-design -S

// use yarn
yarn add easy-form-design

// use pnpm
pnpm add easy-form-design
```

## 使用

> $\color{#FF0000}{使用前请确认已安装配置了 element-ui，vuedraggable}$

> 文档还未完善，先凑活看吧。或者看源码的 EasyFormBuild 和 EasyFormDesign 文件夹下的 index.vue

样式文件需要手动引入, 可以在入口文件引入样式文件

#### 全局注册

```js
// main.js
import Vue from 'vue';
import 'easy-form-design/lib/easyFormDesign.css';
import EasyFormDesign from 'easy-form-design';

Vue.use(EasyFormDesign);
```

#### 局部注册

```js
import 'easy-form-design/lib/easyFormDesign.css'; // 这个可在项目入口文件引入
import { EasyFormDesign, EasyFormBuild } from 'easy-form-design';

export default {
  components: {
    EasyFormDesign,
    EasyFormBuild,
  },
};
```

#### 集成源码

` git 上下载源码，把 src/components 拷贝到自己的项目下，index.js 为入口文件可以通过 Vue.use 的方式注册或者局部注册。`

#### 使用方法

```html
<!-- 表单设计器 -->
<template>
  <div>
    <EasyFormDesign ref="formDesign"></EasyFormDesign>
  </div>
</template>
```

```js
export default {
  methods: {
    /* 初始化已有表单，例如已编辑过表单设计器导出json的，可以用这个方法还原 */
    initForm() {
      this.$refs.formDesign.initForm(fromJson); //fromJson导出的json
    },
    /* 导出表单json方法 */
    exportForm() {
      this.$refs.formDesign.exportForm();
    },
    /* 表单预览方法 */
    preViewForm() {
      this.$refs.formDesign.preViewForm();
    },
  },
};
```

```html
<!-- 表单构建器 -->
<template>
  <div>
    <EasyFormBuild ref="formBuild" @validateSuccess="validateSuccess"></EasyFormBuild>
  </div>
</template>
```

```js
export default {
  methods: {
    initForm() {
      // 初始化表单构建器
      this.$refs.formBuild.initForm(data); //data是表单设计器导出的json

      // 给表单构建器的组件设置默认的值
      this.$nextTick(() => {
        this.$refs.formBuild.setFormData(json); //json是个对象｛组件uuid：默认值，组件uuid：默认值｝
      });
    },
    /* 校验成功 */
    validateSuccess(ruleForm, formJsonList) {
      // ruleForm 用户填写的表单值json， formJsonList 原始表单json
    },
    /* 表单重置 */
    resetForm() {
      this.$refs.formBuild.resetForm();
    },
  },
};
```

### EasyFormDesign slot

formBtns - 表单设计器按钮组区域（默认展示按钮 预览表单、导出 JSON）

### EasyFormBuild slot

btns - 表单构造器按钮组（默认展示按钮 表单校验、表单重置按钮）
