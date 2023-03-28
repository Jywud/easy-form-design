import EasyFormDesign from './EasyFormDesign';
import EasyFormBuild from './EasyFormBuild';

const install = (Vue) => {
  Vue.component(EasyFormDesign.name, EasyFormDesign);
  Vue.component(EasyFormBuild.name, EasyFormBuild);
};

export { EasyFormDesign, EasyFormBuild };

export default { install };
