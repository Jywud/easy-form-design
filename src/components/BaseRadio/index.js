import BaseRadioView from './BaseRadioView.vue';
import BaseRadioConfig from './BaseRadioConfig.vue';

/* 基本单选框 */
class BaseRadio {
  static comName = '单选框';

  constructor({
    uuid = '',
    defaultValue = '',
    required = false,
    disabled = false,
    placeholder = '请选择',
    options,
  }) {
    this.type = 'BaseRadio';
    this.title = '单选框';
    this.uuid = uuid;
    this.defaultValue = defaultValue;
    this.required = required;
    this.disabled = disabled;
    this.placeholder = placeholder;
    this.options = options || [
      { value: '1', name: '选项一' },
      { value: '2', name: '选项二' },
    ];
    this.viewComponent = BaseRadioView;
    this.configComponent = BaseRadioConfig;
  }
}

export default BaseRadio;

export { BaseRadioView, BaseRadioConfig };
