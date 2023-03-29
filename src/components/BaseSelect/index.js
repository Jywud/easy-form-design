import BaseSelectView from './BaseSelectView.vue';
import BaseSelectConfig from './BaseSelectConfig.vue';

/* 基本下拉框 */
class BaseSelect {
  static comName = '下拉框';

  constructor({
    uuid = '',
    defaultValue = '',
    required = false,
    disabled = false,
    placeholder = '请选择',
    options,
  }) {
    this.type = 'BaseSelect';
    this.title = '下拉框';
    this.uuid = uuid;
    this.defaultValue = defaultValue;
    this.required = required;
    this.disabled = disabled;
    this.placeholder = placeholder;
    this.options = options || [
      { value: '1', name: '选项一' },
      { value: '2', name: '选项二' },
    ];
    this.viewComponent = BaseSelectView;
    this.configComponent = BaseSelectConfig;
  }
}

export default BaseSelect;

export { BaseSelectView, BaseSelectConfig };
