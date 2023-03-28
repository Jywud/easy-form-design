import { BaseInputView, BaseInputConfig } from './BaseInput';
import { BaseRadioView, BaseRadioConfig } from './BaseRadio';

const componentMap = {
  BaseInput: () => ({
    viewComponent: BaseInputView,
    configComponent: BaseInputConfig,
  }),
  BaseRadio: () => ({
    viewComponent: BaseRadioView,
    configComponent: BaseRadioConfig,
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
