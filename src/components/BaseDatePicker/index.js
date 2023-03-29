import BaseDatePickerView from './BaseDatePickerView.vue';
import BaseDatePickerConfig from './BaseDatePickerConfig.vue';

/* 日期选择器 */
class BaseDatePicker {
  static comName = '日期选择器';

  constructor({
    uuid = '',
    defaultValue = '',
    required = false,
    disabled = false,
    placeholder = '请选择',
  }) {
    this.type = 'BaseDatePicker';
    this.title = '日期选择器';
    this.uuid = uuid;
    this.defaultValue = defaultValue;
    this.required = required;
    this.disabled = disabled;
    this.placeholder = placeholder;

    this.viewComponent = BaseDatePickerView;
    this.configComponent = BaseDatePickerConfig;
  }
}

export default BaseDatePicker;

export { BaseDatePickerView, BaseDatePickerConfig };
