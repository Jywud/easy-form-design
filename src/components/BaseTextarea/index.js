import BaseTextareaView from './BaseTextareaView.vue';
import BaseTextareaConfig from './BaseTextareaConfig.vue';

/* 多行输入框 */
class BaseTextarea {
  static comName = '多行输入框';

  constructor({
    uuid = '',
    defaultValue = '',
    required = false,
    disabled = false,
    placeholder = '请输入',
  }) {
    this.type = 'BaseTextarea';
    this.title = '多行输入框';
    this.uuid = uuid;
    this.defaultValue = defaultValue;
    this.required = required;
    this.disabled = disabled;
    this.placeholder = placeholder;
    this.maxlength = 400;

    this.viewComponent = BaseTextareaView;
    this.configComponent = BaseTextareaConfig;
  }
}

export default BaseTextarea;

export { BaseTextareaView, BaseTextareaConfig };
