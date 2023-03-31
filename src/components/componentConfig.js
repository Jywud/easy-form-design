/*
 * @Author: jiutian
 * @Date: 2023-03-31 09:40:47
 * @LastEditTime: 2023-03-31 10:13:39
 */
import BaseInput, { BaseInputView, BaseInputConfig } from './BaseInput';
import BaseTextarea, { BaseTextareaView, BaseTextareaConfig } from './BaseTextarea';
import BaseRadio, { BaseRadioView, BaseRadioConfig } from './BaseRadio';
import BaseCheckbox, { BaseCheckboxView, BaseCheckboxConfig } from './BaseCheckbox';
import BaseSelect, { BaseSelectView, BaseSelectConfig } from './BaseSelect';
import BaseColorPicker, { BaseColorPickerView, BaseColorPickerConfig } from './BaseColorPicker';
import BaseDatePicker, { BaseDatePickerView, BaseDatePickerConfig } from './BaseDatePicker';
import BaseDateRangePicker, {
  BaseDateRangePickerView,
  BaseDateRangePickerConfig,
} from './BaseDateRangePicker';
import BaseInputNumber, { BaseInputNumberConfig, BaseInputNumberView } from './BaseInputNumber';

const componentMap = {
  BaseInput: () => ({
    widget: BaseInput,
    viewComponent: BaseInputView,
    configComponent: BaseInputConfig,
  }),
  BaseTextarea: () => ({
    widget: BaseTextarea,
    viewComponent: BaseTextareaView,
    configComponent: BaseTextareaConfig,
  }),
  BaseRadio: () => ({
    widget: BaseRadio,
    viewComponent: BaseRadioView,
    configComponent: BaseRadioConfig,
  }),
  BaseCheckbox: () => ({
    widget: BaseCheckbox,
    viewComponent: BaseCheckboxView,
    configComponent: BaseCheckboxConfig,
  }),
  BaseSelect: () => ({
    widget: BaseSelect,
    viewComponent: BaseSelectView,
    configComponent: BaseSelectConfig,
  }),
  BaseColorPicker: () => ({
    widget: BaseColorPicker,
    viewComponent: BaseColorPickerView,
    configComponent: BaseColorPickerConfig,
  }),
  BaseDatePicker: () => ({
    widget: BaseDatePicker,
    viewComponent: BaseDatePickerView,
    configComponent: BaseDatePickerConfig,
  }),
  BaseDateRangePicker: () => ({
    widget: BaseDateRangePicker,
    viewComponent: BaseDateRangePickerView,
    configComponent: BaseDateRangePickerConfig,
  }),
  BaseInputNumber: () => ({
    widget: BaseInputNumber,
    viewComponent: BaseInputNumberView,
    configComponent: BaseInputNumberConfig,
  }),
};

// 获取所有组件type
const getAllWidgetTypes = () => Object.keys(componentMap);

// 根据type获取组件
const getWidgetByType = (type) => componentMap[type]().widget;

// 根据types获取组件列表
const getWidgetListByTypes = (types = []) => types.map((type) => componentMap[type]().widget);

// 添加自定义组件
const addCustomComponent = (type, widget, viewComponent, configComponent) => {
  componentMap[type] = () => ({
    widget,
    viewComponent,
    configComponent,
  });
};

export {
  componentMap,
  getWidgetByType,
  getWidgetListByTypes,
  getAllWidgetTypes,
  addCustomComponent,
};
