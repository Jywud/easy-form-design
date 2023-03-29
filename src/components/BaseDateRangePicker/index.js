import BaseDateRangePickerView from './BaseDateRangePickerView.vue';
import BaseDateRangePickerConfig from './BaseDateRangePickerConfig.vue';

/* 日期范围选择器 */
class BaseDateRangePicker {
  static comName = '日期范围选择器';

  constructor({
    uuid = '',
    defaultValue = [],
    required = false,
    disabled = false,
    placeholder = '请选择',
  }) {
    this.type = 'BaseDateRangePicker';
    this.title = '日期范围选择器';
    this.uuid = uuid;
    this.defaultValue = defaultValue;
    this.required = required;
    this.disabled = disabled;
    this.placeholder = placeholder;

    this.viewComponent = BaseDateRangePickerView;
    this.configComponent = BaseDateRangePickerConfig;
  }
}

export default BaseDateRangePicker;

export { BaseDateRangePickerView, BaseDateRangePickerConfig };
