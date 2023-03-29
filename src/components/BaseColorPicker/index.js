import BaseColorPickerView from './BaseColorPickerView.vue';
import BaseColorPickerConfig from './BaseColorPickerConfig.vue';

/* 颜色选择器 */
class BaseColorPicker {
  static comName = '颜色选择器';

  constructor({ uuid = '', defaultValue = '#000000', required = false, disabled = false }) {
    this.type = 'BaseColorPicker';
    this.title = '颜色选择器';
    this.uuid = uuid;
    this.defaultValue = defaultValue;
    this.required = required;
    this.disabled = disabled;

    this.viewComponent = BaseColorPickerView;
    this.configComponent = BaseColorPickerConfig;
  }
}

export default BaseColorPicker;

export { BaseColorPickerView, BaseColorPickerConfig };
