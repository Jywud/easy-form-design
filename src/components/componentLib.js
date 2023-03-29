/* 基础组件库定义 */
import BaseInput from './BaseInput';
import BaseTextarea from './BaseTextarea';
import BaseRadio from './BaseRadio';
import BaseCheckbox from './BaseCheckbox';
import BaseSelect from './BaseSelect';
import BaseColorPicker from './BaseColorPicker';
import BaseDatePicker from './BaseDatePicker';
import BaseDateRangePicker from './BaseDateRangePicker';

const components = [
  BaseInput,
  BaseTextarea,
  BaseRadio,
  BaseCheckbox,
  BaseSelect,
  BaseColorPicker,
  BaseDatePicker,
  BaseDateRangePicker,
];

const addComponent = (comp) => {
  components.push(comp);
};

export { addComponent };

export default components;
