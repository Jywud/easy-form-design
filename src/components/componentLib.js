/* 基础组件库定义 */
import BaseInput from './BaseInput';
import BaseRadio from './BaseRadio';
import BaseCheckbox from './BaseCheckbox';

const components = [BaseInput, BaseRadio, BaseCheckbox];

const addComponent = (comp) => {
  components.push(comp);
};

export { addComponent };

export default components;
