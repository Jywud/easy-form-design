import { BaseInputView, BaseInputConfig } from './BaseInput';
import { BaseTextareaView, BaseTextareaConfig } from './BaseTextarea';
import { BaseRadioView, BaseRadioConfig } from './BaseRadio';
import { BaseCheckboxView, BaseCheckboxConfig } from './BaseCheckbox';
import { BaseSelectView, BaseSelectConfig } from './BaseSelect';
import { BaseColorPickerView, BaseColorPickerConfig } from './BaseColorPicker';
import { BaseDatePickerView, BaseDatePickerConfig } from './BaseDatePicker';
import { BaseDateRangePickerView, BaseDateRangePickerConfig } from './BaseDateRangePicker';

const componentMap = {
  BaseInput: () => ({
    viewComponent: BaseInputView,
    configComponent: BaseInputConfig,
  }),
  BaseTextarea: () => ({
    viewComponent: BaseTextareaView,
    configComponent: BaseTextareaConfig,
  }),
  BaseRadio: () => ({
    viewComponent: BaseRadioView,
    configComponent: BaseRadioConfig,
  }),
  BaseCheckbox: () => ({
    viewComponent: BaseCheckboxView,
    configComponent: BaseCheckboxConfig,
  }),
  BaseSelect: () => ({
    viewComponent: BaseSelectView,
    configComponent: BaseSelectConfig,
  }),
  BaseColorPicker: () => ({
    viewComponent: BaseColorPickerView,
    configComponent: BaseColorPickerConfig,
  }),
  BaseDatePicker: () => ({
    viewComponent: BaseDatePickerView,
    configComponent: BaseDatePickerConfig,
  }),
  BaseDateRangePicker: () => ({
    viewComponent: BaseDateRangePickerView,
    configComponent: BaseDateRangePickerConfig,
  }),
};

// 添加自定义组件
const addComponent = (type, viewComponent, configComponent) => {
  componentMap[type] = () => ({
    viewComponent,
    configComponent,
  });
};

export { addComponent };

export default componentMap;
