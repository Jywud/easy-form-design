/* 基础组件库定义 */
import BaseInput from './BaseInput';
import BaseRadio from './BaseRadio';
import BaseCheckbox from './BaseCheckbox';
import BaseSelect from './BaseSelect';

const components = [BaseInput, BaseRadio, BaseCheckbox, BaseSelect];

const addComponent = (comp) => {
  components.push(comp);
};

export { addComponent };

export default components;
