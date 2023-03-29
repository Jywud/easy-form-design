import { BaseInputView, BaseInputConfig } from './BaseInput';
import { BaseRadioView, BaseRadioConfig } from './BaseRadio';
import { BaseCheckboxView, BaseCheckboxConfig } from './BaseCheckbox';
import { BaseSelectView, BaseSelectConfig } from './BaseSelect';

const componentMap = {
  BaseInput: () => ({
    viewComponent: BaseInputView,
    configComponent: BaseInputConfig,
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
