# easy-form-design

## 简介

easy-form-design 是一个基于 vue2, element-ui，vuedraggable 的自定义表单设计器。主要功能是能通过简单操作来生成配置表单，生成可保存的 JSON 数据，并能将 JSON 还原成表单，使表单开发更简单更快速。

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

样式文件需要手动引入, 可以在入口文件引入样式文件

```js
import 'easy-form-design/lib/easyFormDesign.css';
import { EasyFormDesign, EasyFormBuild } from 'easy-form-design';

export default {
  components: {
    EasyFormDesign,
    EasyFormBuild,
  },
};
```

```html
<!-- 表单设计器 -->
<template>
  <div>
    <EasyFormDesign ref="formDesign"></EasyFormDesign>
  </div>
</template>
```

```html
<!-- 表单构建器 -->
<template>
  <div>
    <EasyFormBuild ref="formBuild"></EasyFormBuild>
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
      this.$refs.formBuild.setFormData(data); //data是组件
    },
  },
};
```
