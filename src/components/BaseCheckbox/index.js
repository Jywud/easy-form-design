import BaseCheckboxView from './BaseCheckboxView.vue';
import BaseCheckboxConfig from './BaseCheckboxConfig.vue';

/* 基本多选框 */
class BaseCheckbox {
  static comName = '多选框';

  constructor({
    uuid = '',
    defaultValue = [],
    required = false,
    disabled = false,
    placeholder = '请选择',
    options,
  }) {
    this.type = 'BaseCheckbox';
    this.title = '多选框';
    this.uuid = uuid;
    this.defaultValue = defaultValue;
    this.required = required;
    this.disabled = disabled;
    this.placeholder = placeholder;
    this.options = options || [
      { value: '1', name: '选项一' },
      { value: '2', name: '选项二' },
    ];
    this.viewComponent = BaseCheckboxView;
    this.configComponent = BaseCheckboxConfig;
  }
}

export default BaseCheckbox;

export { BaseCheckboxView, BaseCheckboxConfig };
