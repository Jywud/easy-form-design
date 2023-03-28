import BaseInputView from './BaseInputView.vue';
import BaseInputConfig from './BaseInputConfig.vue';

/* 基本输入框 */
class BaseInput {
  static comName = '单行文本输入框';

  constructor({
    uuid = '',
    defaultValue = '',
    required = false,
    disabled = false,
    placeholder = '请输入',
  }) {
    this.type = 'BaseInput';
    this.title = '单行文本输入框';
    this.uuid = uuid;
    this.defaultValue = defaultValue;
    this.required = required;
    this.disabled = disabled;
    this.placeholder = placeholder;
    this.maxlength = 100;

    this.viewComponent = BaseInputView;
    this.configComponent = BaseInputConfig;
  }
}

export default BaseInput;

export { BaseInputView, BaseInputConfig };
