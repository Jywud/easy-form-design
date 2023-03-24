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

export default componentMap;
