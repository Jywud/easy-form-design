/*
 * @Author: jiutian
 * @Date: 2023-03-31 10:06:55
 * @LastEditTime: 2023-03-31 14:22:23
 */
import BaseInputNumberConfig from './BaseInputNumberConfig.vue';
import BaseInputNumberView from './BaseInputNumberView.vue';

/* 单行输入框 */
class BaseInputNumber {
  static comName = '计数器';

  constructor({
    uuid = '',
    defaultValue = 0,
    required = false,
    disabled = false,
    min = 0,
    max = 100,
    step = 1,
    stepStrictly = false,
    precision = 0,
  }) {
    this.type = 'BaseInputNumber';
    this.title = '计数器';
    this.uuid = uuid;
    this.defaultValue = defaultValue;
    this.required = required;
    this.disabled = disabled;
    this.min = min;
    this.max = max;
    this.step = step;
    this.stepStrictly = stepStrictly;
    this.precision = precision;

    this.viewComponent = BaseInputNumberView;
    this.configComponent = BaseInputNumberConfig;
  }
}

export default BaseInputNumber;

export { BaseInputNumberView, BaseInputNumberConfig };
