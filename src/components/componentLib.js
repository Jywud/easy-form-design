/* 基础组件库定义 */
import BaseInput from './BaseInput';
import BaseRadio from './BaseRadio';

const components = [BaseInput, BaseRadio];

const addComponent = (comp) => {
  components.push(comp);
};

export { addComponent };

export default components;
