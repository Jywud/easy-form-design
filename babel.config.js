let transformRemoveConsolePlugin = [];
// //判断是发布阶段去除console
if (process.env.NODE_ENV === 'production') {
  transformRemoveConsolePlugin = ['transform-remove-console'];
}

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [...transformRemoveConsolePlugin],
};
