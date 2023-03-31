module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/no-extraneous-dependencies': 'off',
    'vue/no-mutating-props': 'off',
    'operator-linebreak': 'off',
    'comma-dangle': 'off',
    'object-curly-newline': 'off',
    'linebreak-style': 'off',
    // 'max-len': 'off',
  },
};
