!function(){"use strict";var e,t,a={1348:function(e,t,a){var i=a(6369),l=a(8499),o=(l=a.n(l),a(6983)),s=(o=a.n(o),a(7658),a(7327)),n={name:"BaseInputView",model:{prop:"modelValue",event:"input"},inject:{isPreview:{default(){return!1}}},props:{compData:{type:Object,default:()=>({disabled:!1,placeholder:"请输入"})},modelValue:{type:[String,Number],default:""}},data(){return{}},computed:{readonly(){return this.isPreview},disable(){return this.compData.disabled},compVal:{get(){return this.modelValue},set(e){this.$emit("input",e)}}}},c=(a=a(3736),(0,a.Z)(n,(function(){var e=this;return(0,e._self._c)("el-input",{attrs:{disabled:e.disable,placeholder:e.compData.placeholder,maxlength:e.compData.maxlength,readonly:e.readonly},model:{value:e.compVal,callback:function(t){e.compVal=t},expression:"compVal"}})}),[],!1,null,null,null).exports),r=(0,a.Z)({name:"BaseInputConfig",props:{activeComp:{default:()=>({title:"输入框",placeholder:"请输入",required:!1,disabled:!1})}}},(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"mt10"},[t("div",{staticClass:"fw600"},[e._v("标题：")]),t("el-input",{model:{value:e.activeComp.title,callback:function(t){e.$set(e.activeComp,"title",t)},expression:"activeComp.title"}})],1),t("div",{staticClass:"mt10"},[t("div",{staticClass:"fw600"},[e._v("组件唯一值（uuid）：")]),t("el-input",{attrs:{disabled:""},model:{value:e.activeComp.uuid,callback:function(t){e.$set(e.activeComp,"uuid",t)},expression:"activeComp.uuid"}})],1),t("div",{staticClass:"mt10"},[t("div",{staticClass:"fw600"},[e._v("提示文案：")]),t("el-input",{model:{value:e.activeComp.placeholder,callback:function(t){e.$set(e.activeComp,"placeholder",t)},expression:"activeComp.placeholder"}})],1),t("div",{staticClass:"mt10"},[t("div",{staticClass:"fw600"},[e._v("最大长度：")]),t("el-input",{model:{value:e.activeComp.maxlength,callback:function(t){e.$set(e.activeComp,"maxlength",t)},expression:"activeComp.maxlength"}})],1),t("div",{staticClass:"mt10"},[t("div",{staticClass:"fw600"},[e._v("默认值：")]),t("el-input",{model:{value:e.activeComp.defaultValue,callback:function(t){e.$set(e.activeComp,"defaultValue",t)},expression:"activeComp.defaultValue"}})],1),t("div",{staticClass:"mt10"},[t("el-checkbox",{attrs:{label:"是否必填"},model:{value:e.activeComp.required,callback:function(t){e.$set(e.activeComp,"required",t)},expression:"activeComp.required"}}),t("el-checkbox",{attrs:{label:"是否禁用"},model:{value:e.activeComp.disabled,callback:function(t){e.$set(e.activeComp,"disabled",t)},expression:"activeComp.disabled"}})],1)])}),[],!1,null,"2f432ca6",null).exports;class u{constructor({uuid:e="",defaultValue:t="",required:a=!1,disabled:i=!1,placeholder:l="请输入"}){this.type="BaseInput",this.title="单行输入框",this.uuid=e,this.defaultValue=t,this.required=a,this.disabled=i,this.placeholder=l,this.maxlength=100,this.viewComponent=c,this.configComponent=r}}(0,s.Z)(u,"comName","单行输入框");n=u;var d={name:"BaseInputView",model:{prop:"modelValue",event:"input"},inject:{isPreview:{default(){return!1}}},props:{compData:{type:Object,default:()=>({disabled:!1,placeholder:"请输入"})},modelValue:{type:[String,Number],default:""}},data(){return{}},computed:{readonly(){return this.isPreview},disable(){return this.compData.disabled},compVal:{get(){return this.modelValue},set(e){this.$emit("input",e)}}}},p=(0,a.Z)(d,(function(){var e=this;return(0,e._self._c)("el-input",{attrs:{rows:2,type:"textarea",disabled:e.disable,placeholder:e.compData.placeholder,maxlength:e.compData.maxlength,readonly:e.readonly},model:{value:e.compVal,callback:function(t){e.compVal=t},expression:"compVal"}})}),[],!1,null,null,null).exports,m=(0,a.Z)({name:"BaseInputConfig",props:{activeComp:{default:()=>({title:"输入框",placeholder:"请输入",required:!1,disabled:!1})}}},(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"mt10"},[t("div",{staticClass:"fw600"},[e._v("标题：")]),t("el-input",{model:{value:e.activeComp.title,callback:function(t){e.$set(e.activeComp,"title",t)},expression:"activeComp.title"}})],1),t("div",{staticClass:"mt10"},[t("div",{staticClass:"fw600"},[e._v("组件唯一值（uuid）：")]),t("el-input",{attrs:{disabled:""},model:{value:e.activeComp.uuid,callback:function(t){e.$set(e.activeComp,"uuid",t)},expression:"activeComp.uuid"}})],1),t("div",{staticClass:"mt10"},[t("div",{staticClass:"fw600"},[e._v("提示文案：")]),t("el-input",{model:{value:e.activeComp.placeholder,callback:function(t){e.$set(e.activeComp,"placeholder",t)},expression:"activeComp.placeholder"}})],1),t("div",{staticClass:"mt10"},[t("div",{staticClass:"fw600"},[e._v("最大长度：")]),t("el-input",{model:{value:e.activeComp.maxlength,callback:function(t){e.$set(e.activeComp,"maxlength",t)},expression:"activeComp.maxlength"}})],1),t("div",{staticClass:"mt10"},[t("div",{staticClass:"fw600"},[e._v("默认值：")]),t("el-input",{model:{value:e.activeComp.defaultValue,callback:function(t){e.$set(e.activeComp,"defaultValue",t)},expression:"activeComp.defaultValue"}})],1),t("div",{staticClass:"mt10"},[t("el-checkbox",{attrs:{label:"是否必填"},model:{value:e.activeComp.required,callback:function(t){e.$set(e.activeComp,"required",t)},expression:"activeComp.required"}}),t("el-checkbox",{attrs:{label:"是否禁用"},model:{value:e.activeComp.disabled,callback:function(t){e.$set(e.activeComp,"disabled",t)},expression:"activeComp.disabled"}})],1)])}),[],!1,null,"93a3667e",null).exports;class v{constructor({uuid:e="",defaultValue:t="",required:a=!1,disabled:i=!1,placeholder:l="请输入"}){this.type="BaseTextarea",this.title="多行输入框",this.uuid=e,this.defaultValue=t,this.required=a,this.disabled=i,this.placeholder=l,this.maxlength=400,this.viewComponent=p,this.configComponent=m}}(0,s.Z)(v,"comName","多行输入框");d=v;var f={name:"BaseRadioView",model:{prop:"modelValue",event:"change"},inject:{isPreview:{default(){return!1}}},props:{compData:{type:Object,default:()=>({disabled:!1,placeholder:"请选择"})},modelValue:{type:[String,Number],default:""}},data(){return{}},computed:{disable(){return this.compData.disabled},compVal:{get(){return this.modelValue},set(e){this.$emit("change",e)}}}},C=(0,a.Z)(f,(function(){var e=this,t=e._self._c;return t("el-radio-group",{attrs:{disabled:e.compData.disabled},model:{value:e.compVal,callback:function(t){e.compVal=t},expression:"compVal"}},e._l(e.compData.options,(function(a){return t("el-radio",{key:a.value,attrs:{label:a.value}},[e._v(e._s(a.name))])})),1)}),[],!1,null,null,null).exports,h=(f={name:"BaseRadioConfig",props:{activeComp:{type:Object,default:()=>({})}},data(){return{}},methods:{addOption(){this.activeComp.options.push({value:"XXX",name:"XXX"})}}},(0,a.Z)(f,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"mt10"},[t("div",{staticClass:"mb10 fw600"},[e._v("标题：")]),t("el-input",{model:{value:e.activeComp.title,callback:function(t){e.$set(e.activeComp,"title",t)},expression:"activeComp.title"}})],1),t("div",{staticClass:"mt10"},[t("div",{staticClass:"fw600"},[e._v("组件唯一值（uuid）：")]),t("el-input",{attrs:{disabled:""},model:{value:e.activeComp.uuid,callback:function(t){e.$set(e.activeComp,"uuid",t)},expression:"activeComp.uuid"}})],1),t("div",{staticClass:"mt10"},[t("el-checkbox",{attrs:{label:"是否必填"},model:{value:e.activeComp.required,callback:function(t){e.$set(e.activeComp,"required",t)},expression:"activeComp.required"}}),t("el-checkbox",{attrs:{label:"是否禁用"},model:{value:e.activeComp.disabled,callback:function(t){e.$set(e.activeComp,"disabled",t)},expression:"activeComp.disabled"}})],1),t("div",{staticClass:"options-panel mt10"},[t("p",{staticClass:"mb10 fw600"},[e._v("选项配置：")]),t("div",{staticClass:"tip-box"},[e._v("请勿使用相同的选项值!")]),e._l(e.activeComp.options,(function(a,i){return t("div",{key:a.value,staticClass:"mb10"},[e._v(" 选项名:"),t("el-input",{model:{value:a.name,callback:function(t){e.$set(a,"name",t)},expression:"item.name"}}),e._v(" 选项值:"),t("el-input",{model:{value:a.value,callback:function(t){e.$set(a,"value",t)},expression:"item.value"}}),t("el-button",{attrs:{type:"danger",size:"mini",link:""},on:{click:function(t){return e.activeComp.options.splice(i,1)}}},[e._v("删除")])],1)})),t("el-button",{attrs:{type:"primary"},on:{click:e.addOption}},[e._v("添加选项")])],2),t("div",{staticClass:"mt10"},[t("div",{staticClass:"fw600"},[e._v("默认值：")]),t("el-radio-group",{model:{value:e.activeComp.defaultValue,callback:function(t){e.$set(e.activeComp,"defaultValue",t)},expression:"activeComp.defaultValue"}},e._l(e.activeComp.options,(function(a){return t("el-radio",{key:a.value,attrs:{label:a.value}},[e._v(e._s(a.name))])})),1)],1)])}),[],!1,null,"b31f7576",null).exports);class b{constructor({uuid:e="",defaultValue:t="",required:a=!1,disabled:i=!1,placeholder:l="请选择",options:o}){this.type="BaseRadio",this.title="单选框",this.uuid=e,this.defaultValue=t,this.required=a,this.disabled=i,this.placeholder=l,this.options=o||[{value:"1",name:"选项一"},{value:"2",name:"选项二"}],this.viewComponent=C,this.configComponent=h}}(0,s.Z)(b,"comName","单选框");f=b;var g={name:"BaseCheckboxView",model:{prop:"modelValue",event:"change"},inject:{isPreview:{default(){return!1}}},props:{compData:{type:Object,default:()=>({disabled:!1,placeholder:"请选择"})},modelValue:{type:Array,default:()=>[]}},data(){return{}},computed:{disable(){return this.compData.disabled},compVal:{get(){return this.modelValue},set(e){this.$emit("change",e)}}}},x=(0,a.Z)(g,(function(){var e=this,t=e._self._c;return t("el-checkbox-group",{attrs:{disabled:e.compData.disabled},model:{value:e.compVal,callback:function(t){e.compVal=t},expression:"compVal"}},e._l(e.compData.options,(function(a){return t("el-checkbox",{key:a.value,attrs:{label:a.value}},[e._v(e._s(a.name))])})),1)}),[],!1,null,null,null).exports,k=(g={name:"BaseCheckboxConfig",props:{activeComp:{type:Object,default:()=>({})}},data(){return{}},methods:{addOption(){this.activeComp.options.push({value:"XXX",name:"XXX"})}}},(0,a.Z)(g,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"mt10"},[t("div",{staticClass:"mb10 fw600"},[e._v("标题：")]),t("el-input",{model:{value:e.activeComp.title,callback:function(t){e.$set(e.activeComp,"title",t)},expression:"activeComp.title"}})],1),t("div",{staticClass:"mt10"},[t("div",{staticClass:"fw600"},[e._v("组件唯一值（uuid）：")]),t("el-input",{attrs:{disabled:""},model:{value:e.activeComp.uuid,callback:function(t){e.$set(e.activeComp,"uuid",t)},expression:"activeComp.uuid"}})],1),t("div",{staticClass:"mt10"},[t("el-checkbox",{attrs:{label:"是否必填"},model:{value:e.activeComp.required,callback:function(t){e.$set(e.activeComp,"required",t)},expression:"activeComp.required"}}),t("el-checkbox",{attrs:{label:"是否禁用"},model:{value:e.activeComp.disabled,callback:function(t){e.$set(e.activeComp,"disabled",t)},expression:"activeComp.disabled"}})],1),t("div",{staticClass:"options-panel mt10"},[t("p",{staticClass:"mb10 fw600"},[e._v("选项配置：")]),t("div",{staticClass:"tip-box"},[e._v("请勿使用相同的选项值!")]),e._l(e.activeComp.options,(function(a,i){return t("div",{key:a.value,staticClass:"mb10"},[e._v(" 选项名:"),t("el-input",{model:{value:a.name,callback:function(t){e.$set(a,"name",t)},expression:"item.name"}}),e._v(" 选项值:"),t("el-input",{model:{value:a.value,callback:function(t){e.$set(a,"value",t)},expression:"item.value"}}),t("el-button",{attrs:{type:"danger",size:"mini",link:""},on:{click:function(t){return e.activeComp.options.splice(i,1)}}},[e._v("删除")])],1)})),t("el-button",{attrs:{type:"primary"},on:{click:e.addOption}},[e._v("添加选项")])],2)])}),[],!1,null,"3196322e",null).exports);class _{constructor({uuid:e="",defaultValue:t=[],required:a=!1,disabled:i=!1,placeholder:l="请选择",options:o}){this.type="BaseCheckbox",this.title="多选框",this.uuid=e,this.defaultValue=t,this.required=a,this.disabled=i,this.placeholder=l,this.options=o||[{value:"1",name:"选项一"},{value:"2",name:"选项二"}],this.viewComponent=x,this.configComponent=k}}(0,s.Z)(_,"comName","多选框");g=_;var y={name:"BaseSelectView",model:{prop:"modelValue",event:"change"},inject:{isPreview:{default(){return!1}}},props:{compData:{type:Object,default:()=>({disabled:!1,placeholder:"请选择"})},modelValue:{type:String,default:()=>""}},data(){return{}},computed:{disable(){return this.compData.disabled},compVal:{get(){return this.modelValue},set(e){this.$emit("change",e)}}}},V=(0,a.Z)(y,(function(){var e=this,t=e._self._c;return t("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",clearable:"",disabled:e.compData.disabled},model:{value:e.compVal,callback:function(t){e.compVal=t},expression:"compVal"}},e._l(e.compData.options,(function(e){return t("el-option",{key:e.value,attrs:{label:e.name,value:e.value}})})),1)}),[],!1,null,null,null).exports,w=(y={name:"BaseSelectConfig",props:{activeComp:{type:Object,default:()=>({})}},data(){return{}},methods:{addOption(){this.activeComp.options.push({value:"XXX",name:"XXX"})}}},(0,a.Z)(y,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"mt10"},[t("div",{staticClass:"mb10 fw600"},[e._v("标题：")]),t("el-input",{model:{value:e.activeComp.title,callback:function(t){e.$set(e.activeComp,"title",t)},expression:"activeComp.title"}})],1),t("div",{staticClass:"mt10"},[t("div",{staticClass:"fw600"},[e._v("组件唯一值（uuid）：")]),t("el-input",{attrs:{disabled:""},model:{value:e.activeComp.uuid,callback:function(t){e.$set(e.activeComp,"uuid",t)},expression:"activeComp.uuid"}})],1),t("div",{staticClass:"mt10"},[t("el-checkbox",{attrs:{label:"是否必填"},model:{value:e.activeComp.required,callback:function(t){e.$set(e.activeComp,"required",t)},expression:"activeComp.required"}}),t("el-checkbox",{attrs:{label:"是否禁用"},model:{value:e.activeComp.disabled,callback:function(t){e.$set(e.activeComp,"disabled",t)},expression:"activeComp.disabled"}})],1),t("div",{staticClass:"options-panel mt10"},[t("p",{staticClass:"mb10 fw600"},[e._v("选项配置：")]),t("div",{staticClass:"tip-box"},[e._v("请勿使用相同的选项值!")]),e._l(e.activeComp.options,(function(a,i){return t("div",{key:a.value,staticClass:"mb10"},[e._v(" 选项名:"),t("el-input",{model:{value:a.name,callback:function(t){e.$set(a,"name",t)},expression:"item.name"}}),e._v(" 选项值:"),t("el-input",{model:{value:a.value,callback:function(t){e.$set(a,"value",t)},expression:"item.value"}}),t("el-button",{attrs:{type:"danger",size:"mini",link:""},on:{click:function(t){return e.activeComp.options.splice(i,1)}}},[e._v("删除")])],1)})),t("el-button",{attrs:{type:"primary"},on:{click:e.addOption}},[e._v("添加选项")])],2)])}),[],!1,null,"dacbcc16",null).exports);class ${constructor({uuid:e="",defaultValue:t="",required:a=!1,disabled:i=!1,placeholder:l="请选择",options:o}){this.type="BaseSelect",this.title="下拉框",this.uuid=e,this.defaultValue=t,this.required=a,this.disabled=i,this.placeholder=l,this.options=o||[{value:"1",name:"选项一"},{value:"2",name:"选项二"}],this.viewComponent=V,this.configComponent=w}}(0,s.Z)($,"comName","下拉框");y=$;var q={name:"BaseColorPickerView",model:{prop:"modelValue",event:"change"},inject:{isPreview:{default(){return!1}}},props:{compData:{type:Object,default:()=>({disabled:!1,placeholder:"请选择"})},modelValue:{type:String,default:()=>""}},data(){return{}},computed:{disable(){return this.compData.disabled},compVal:{get(){return this.modelValue},set(e){this.$emit("change",e)}}}},D=(0,a.Z)(q,(function(){var e=this;return(0,e._self._c)("el-color-picker",{model:{value:e.compVal,callback:function(t){e.compVal=t},expression:"compVal"}})}),[],!1,null,null,null).exports,F=(0,a.Z)({name:"BaseInputConfig",props:{activeComp:{default:()=>({title:"颜色选择框",placeholder:"请选择",required:!1,disabled:!1})}}},(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"mt10"},[t("div",{staticClass:"fw600"},[e._v("标题：")]),t("el-input",{model:{value:e.activeComp.title,callback:function(t){e.$set(e.activeComp,"title",t)},expression:"activeComp.title"}})],1),t("div",{staticClass:"mt10"},[t("div",{staticClass:"fw600"},[e._v("组件唯一值（uuid）：")]),t("el-input",{attrs:{disabled:""},model:{value:e.activeComp.uuid,callback:function(t){e.$set(e.activeComp,"uuid",t)},expression:"activeComp.uuid"}})],1),t("div",{staticClass:"mt10"},[t("div",{staticClass:"fw600"},[e._v("默认值：")]),t("el-color-picker",{model:{value:e.activeComp.defaultValue,callback:function(t){e.$set(e.activeComp,"defaultValue",t)},expression:"activeComp.defaultValue"}})],1),t("div",{staticClass:"mt10"},[t("el-checkbox",{attrs:{label:"是否必填"},model:{value:e.activeComp.required,callback:function(t){e.$set(e.activeComp,"required",t)},expression:"activeComp.required"}}),t("el-checkbox",{attrs:{label:"是否禁用"},model:{value:e.activeComp.disabled,callback:function(t){e.$set(e.activeComp,"disabled",t)},expression:"activeComp.disabled"}})],1)])}),[],!1,null,"09dd049a",null).exports;class O{constructor({uuid:e="",defaultValue:t="#000000",required:a=!1,disabled:i=!1}){this.type="BaseColorPicker",this.title="颜色选择器",this.uuid=e,this.defaultValue=t,this.required=a,this.disabled=i,this.viewComponent=D,this.configComponent=F}}(0,s.Z)(O,"comName","颜色选择器");q=O;var B={name:"BaseDatePickerView",model:{prop:"modelValue",event:"change"},inject:{isPreview:{default(){return!1}}},props:{compData:{type:Object,default:()=>({disabled:!1,placeholder:"请选择"})},modelValue:{type:[String,Date],default:""}},data(){return{}},computed:{readonly(){return this.isPreview},disable(){return this.compData.disabled},compVal:{get(){return this.modelValue},set(e){this.$emit("change",e)}}}},S=(0,a.Z)(B,(function(){var e=this;return(0,e._self._c)("el-date-picker",{staticStyle:{width:"100%"},attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期",disabled:e.disable},model:{value:e.compVal,callback:function(t){e.compVal=t},expression:"compVal"}})}),[],!1,null,null,null).exports,j=(B={name:"BaseDatePickerConfig",props:{activeComp:{type:Object,default:()=>({})}},data(){return{}},methods:{}},(0,a.Z)(B,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"mt10"},[t("div",{staticClass:"mb10 fw600"},[e._v("标题：")]),t("el-input",{model:{value:e.activeComp.title,callback:function(t){e.$set(e.activeComp,"title",t)},expression:"activeComp.title"}})],1),t("div",{staticClass:"mt10"},[t("div",{staticClass:"fw600"},[e._v("组件唯一值（uuid）：")]),t("el-input",{attrs:{disabled:""},model:{value:e.activeComp.uuid,callback:function(t){e.$set(e.activeComp,"uuid",t)},expression:"activeComp.uuid"}})],1),t("div",{staticClass:"mt10"},[t("div",{staticClass:"fw600"},[e._v("默认值：")]),t("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:e.activeComp.defaultValue,callback:function(t){e.$set(e.activeComp,"defaultValue",t)},expression:"activeComp.defaultValue"}})],1),t("div",{staticClass:"mt10"},[t("el-checkbox",{attrs:{label:"是否必填"},model:{value:e.activeComp.required,callback:function(t){e.$set(e.activeComp,"required",t)},expression:"activeComp.required"}}),t("el-checkbox",{attrs:{label:"是否禁用"},model:{value:e.activeComp.disabled,callback:function(t){e.$set(e.activeComp,"disabled",t)},expression:"activeComp.disabled"}})],1)])}),[],!1,null,"01737d8f",null).exports);class P{constructor({uuid:e="",defaultValue:t="",required:a=!1,disabled:i=!1,placeholder:l="请选择"}){this.type="BaseDatePicker",this.title="日期选择器",this.uuid=e,this.defaultValue=t,this.required=a,this.disabled=i,this.placeholder=l,this.viewComponent=S,this.configComponent=j}}(0,s.Z)(P,"comName","日期选择器");B=P;var Z={name:"BaseDateRangePicker",model:{prop:"modelValue",event:"change"},inject:{isPreview:{default(){return!1}}},props:{compData:{type:Object,default:()=>({disabled:!1,placeholder:"请选择"})},modelValue:{type:Array,default:()=>[]}},data(){return{}},computed:{readonly(){return this.isPreview},disable(){return this.compData.disabled},compVal:{get(){return this.modelValue},set(e){this.$emit("change",e)}}}},N=(0,a.Z)(Z,(function(){var e=this;return(0,e._self._c)("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"daterange","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",disabled:e.disable},model:{value:e.compVal,callback:function(t){e.compVal=t},expression:"compVal"}})}),[],!1,null,null,null).exports,R=(Z={name:"BaseDateRangePickerConfig",props:{activeComp:{type:Object,default:()=>({})}},data(){return{}},methods:{}},(0,a.Z)(Z,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"mt10"},[t("div",{staticClass:"mb10 fw600"},[e._v("标题：")]),t("el-input",{model:{value:e.activeComp.title,callback:function(t){e.$set(e.activeComp,"title",t)},expression:"activeComp.title"}})],1),t("div",{staticClass:"mt10"},[t("div",{staticClass:"fw600"},[e._v("组件唯一值（uuid）：")]),t("el-input",{attrs:{disabled:""},model:{value:e.activeComp.uuid,callback:function(t){e.$set(e.activeComp,"uuid",t)},expression:"activeComp.uuid"}})],1),t("div",{staticClass:"mt10"},[t("el-checkbox",{attrs:{label:"是否必填"},model:{value:e.activeComp.required,callback:function(t){e.$set(e.activeComp,"required",t)},expression:"activeComp.required"}}),t("el-checkbox",{attrs:{label:"是否禁用"},model:{value:e.activeComp.disabled,callback:function(t){e.$set(e.activeComp,"disabled",t)},expression:"activeComp.disabled"}})],1)])}),[],!1,null,"3cabeaa2",null).exports);class X{constructor({uuid:e="",defaultValue:t=[],required:a=!1,disabled:i=!1,placeholder:l="请选择"}){this.type="BaseDateRangePicker",this.title="日期范围选择器",this.uuid=e,this.defaultValue=t,this.required=a,this.disabled=i,this.placeholder=l,this.viewComponent=N,this.configComponent=R}}(0,s.Z)(X,"comName","日期范围选择器");const J=[n,d,f,g,y,q,B,X];var L=J;const M={BaseInput:()=>({viewComponent:c,configComponent:r}),BaseTextarea:()=>({viewComponent:p,configComponent:m}),BaseRadio:()=>({viewComponent:C,configComponent:h}),BaseCheckbox:()=>({viewComponent:x,configComponent:k}),BaseSelect:()=>({viewComponent:V,configComponent:w}),BaseColorPicker:()=>({viewComponent:D,configComponent:F}),BaseDatePicker:()=>({viewComponent:S,configComponent:j}),BaseDateRangePicker:()=>({viewComponent:N,configComponent:R})};var T=M,I=(0,a.Z)({name:"EasyFormBuild",data(){return{formJsonList:[],ruleForm:{},formRules:{}}},methods:{initForm(e){this.formJsonList=e.map((e=>({...e,viewComponent:T[e.type]().viewComponent}))),this.initFormRender()},initFormRender(){this.formJsonList.forEach((e=>{this.setFormDefaultData(e),this.setFormRules(e)}))},setFormDefaultData(e){if(void 0!==e.defaultValue&&""!==e.defaultValue)try{this.$set(this.ruleForm,e.uuid,"object"==typeof e.defaultValue?JSON.parse(JSON.stringify(e.defaultValue)):e.defaultValue)}catch(e){}},setFormRules(e){"BaseInput"===e.type||"BaseTextarea"===e.type?this.formRules[e.uuid]=[{required:e.required,message:"请输入",trigger:"blur"}]:this.formRules[e.uuid]=[{required:e.required,message:"请选择",trigger:"change"}]},setFormData(e){"object"==typeof e&&Object.keys(this.ruleForm).forEach((t=>{e[t]&&this.$set(this.ruleForm,t,e[t])}))},validateForm(){return new Promise(((e,t)=>{var a=this.$refs["formRef"];a&&a.validate(((a,i)=>{a?(this.$emit("validateSuccess",this.ruleForm,this.formJsonList,i),e(this.ruleForm,this.formJsonList)):t()}))}))},resetForm(){var e=this.$refs["formRef"];e&&e.resetFields()}}},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"client-view"},[t("el-form",{ref:"formRef",attrs:{"label-position":"top",rules:e.formRules,model:e.ruleForm}},e._l(e.formJsonList,(function(a){return t("el-form-item",{key:a.uuid,attrs:{prop:a.uuid,label:a.title}},[t(a.viewComponent,{tag:"component",attrs:{compData:a},model:{value:e.ruleForm[a.uuid],callback:function(t){e.$set(e.ruleForm,a.uuid,t)},expression:"ruleForm[comp.uuid]"}})],1)})),1),e._t("btns",(function(){return[t("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.validateForm}},[e._v("表单校验")]),t("el-button",{attrs:{type:"danger",size:"small"},on:{click:e.resetForm}},[e._v("表单重置")])]}))],2)}),[],!1,null,null,null).exports;Z=(0,a.Z)({name:"previewForm",provide:{isPreview:!1},components:{EasyFormBuild:I},data(){return{dialogVisible:!1}},methods:{initForm(e){this.dialogVisible=!0,this.$nextTick((()=>{this.$refs.formBuild.initForm(e)}))},validateSuccess(){}}},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"form-build-view"},[t("el-dialog",{attrs:{title:"表单预览",visible:e.dialogVisible,"close-on-click-modal":!1,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[e.dialogVisible?t("EasyFormBuild",{ref:"formBuild",on:{validateSuccess:e.validateSuccess}}):e._e()],1)],1)}),[],!1,null,null,null).exports;const E=()=>"field"+(Math.floor(89999*Math.random())+1e4).toString()+(new Date).getTime().toString().substring(5);s={name:"EasyFormDesign",components:{draggable:o(),previewForm:Z},provide:{isPreview:!0},data(){return{componentLib:L,formComponents:[],activeComp:null}},methods:{initForm(e=[]){0!==e.length&&(this.formComponents=e.map((e=>({...e,...T[e.type]()}))),this.activeComp=this.formComponents[0])},handleClone(e){return e=new e({uuid:E()}),this.activeComp=e},selectComp(e){this.activeComp=e},deleteComp(e){this.formComponents.splice(e,1),0<e&&setTimeout((()=>{this.activeComp=this.formComponents[e-1]}))},cloneComp(e,t){e={...e,uuid:E()},this.formComponents.splice(t+1,0,e)},preViewForm(){var e=this.exportForm();e&&0<e.length&&this.$refs.previewForm.initForm(JSON.parse(JSON.stringify(e)))},exportForm(){var e=this.formComponents.map((e=>{const{configComponent:t,viewComponent:a,...i}=e;return i})),t=JSON.stringify(e);return sessionStorage.setItem("exportFormComponents",t),e},handleAdd(e,t){}}};var z=(0,a.Z)(s,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"form-design-view"},[t("div",{staticClass:"component-lib-container"},[t("h3",[e._v("组件库")]),t("draggable",{staticClass:"list-group",attrs:{"ghost-class":"ghost",group:{name:"dragComponets",pull:"clone",put:!1},sort:"false",clone:e.handleClone},model:{value:e.componentLib,callback:function(t){e.componentLib=t},expression:"componentLib"}},e._l(e.componentLib,(function(a,i){return t("div",{key:i,staticClass:"list-group-item"},[e._v(" "+e._s(a.comName)+" ")])})),0)],1),t("div",{staticClass:"form-design-container"},[t("h3",[e._v("表单编辑")]),t("div",{staticClass:"form-btns-panel"},[e._t("formBtns",(function(){return[t("el-button",{attrs:{type:"success",size:"mini"},on:{click:e.preViewForm}},[e._v("预览表单")]),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.exportForm}},[e._v("导出JSON")])]}))],2),t("draggable",{staticClass:"form-dragarea-box",attrs:{group:"dragComponets",animation:"300"},on:{add:e.handleAdd},model:{value:e.formComponents,callback:function(t){e.formComponents=t},expression:"formComponents"}},e._l(e.formComponents,(function(a,i){return t("div",{key:a.uuid,staticClass:"form-item-wrap",class:{isActive:e.activeComp.uuid===a.uuid},on:{click:function(t){return e.selectComp(a)}}},[t("div",{staticClass:"form-title-bar"},[a.required?t("span",{staticStyle:{color:"red"}},[e._v("*")]):e._e(),t("span",[e._v(e._s(a.title))])]),t(a.viewComponent,{tag:"component",attrs:{compData:a,model:"design"},model:{value:a.defaultValue,callback:function(t){e.$set(a,"defaultValue",t)},expression:"element.defaultValue"}}),t("div",{staticClass:"form-comp-btns"},[t("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(t){return e.deleteComp(i)}}}),t("el-button",{attrs:{type:"primary",icon:"el-icon-document-copy",circle:""},on:{click:function(t){return e.cloneComp(a,i)}}})],1)],1)})),0)],1),t("div",{staticClass:"component-config-container"},[t("h3",[e._v("组件配置")]),t("div",{staticClass:"config-content-box"},[e.activeComp?t(e.activeComp.configComponent,{tag:"component",attrs:{activeComp:e.activeComp}}):e._e()],1)]),t("previewForm",{ref:"previewForm"})],1)}),[],!1,null,"3b300dd5",null).exports,A=(n=(z.install=e=>{e.component(z.name,z)},z),I.install=e=>{e.component(I.name,I)},(0,a.Z)({name:"App",components:{EasyFormDesign:n},mounted(){var e=sessionStorage.getItem("exportFormComponents");if(e)try{var t=JSON.parse(e);this.$refs.formDesign.initForm(t)}catch(e){}}},(function(){var e=this._self._c;return e("div",{attrs:{id:"app"}},[e("EasyFormDesign",{ref:"formDesign"})],1)}),[],!1,null,null,null).exports);i.default.config.productionTip=!1,i.default.use(l()),new i.default({render:e=>e(A)}).$mount("#app")}},i={};function l(e){var t=i[e];return void 0!==t||(t=i[e]={id:e,loaded:!1,exports:{}},a[e].call(t.exports,t,t.exports,l),t.loaded=!0),t.exports}function o(e,a){var i,o,s,n=a[0],c=a[1],r=a[2],u=0;if(n.some((function(e){return 0!==t[e]}))){for(i in c)l.o(c,i)&&(l.m[i]=c[i]);r&&(s=r(l))}for(e&&e(a);u<n.length;u++)o=n[u],l.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return l.O(s)}l.m=a,l.amdO={},e=[],l.O=function(t,a,i,o){if(!a){for(var s=1/0,n=0;n<e.length;n++){a=e[n][0],i=e[n][1],o=e[n][2];for(var c,r=!0,u=0;u<a.length;u++)(!1&o||o<=s)&&Object.keys(l.O).every((function(e){return l.O[e](a[u])}))?a.splice(u--,1):(r=!1,o<s&&(s=o));r&&(e.splice(n--,1),void 0!==(c=i()))&&(t=c)}return t}o=o||0;for(n=e.length;0<n&&e[n-1][2]>o;n--)e[n]=e[n-1];e[n]=[a,i,o]},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,{a:t}),t},l.d=function(e,t){for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"==typeof window)return window}}(),l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},t={143:0},l.O.j=function(e){return 0===t[e]},(s=self.webpackChunkeasy_form_design=self.webpackChunkeasy_form_design||[]).forEach(o.bind(null,0)),s.push=o.bind(null,s.push.bind(s));var s=l.O(void 0,[998],(function(){return l(1348)}));l.O(s)}();