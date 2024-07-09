/*
 * @Author: Yandel Yan
 * @Date: 2024-05-19 16:30:08
 * @LastEditTime: 2024-05-19 16:40:14
 * @LastEditors: Yandel
 * @Description: 
 * @FilePath: /tiktok_china/.eslintrc.cjs
 * 知之者不如好之者，好之者不如乐之者
 */
const { getESLintConfig } = require('@iceworks/spec');

module.exports = getESLintConfig('react-ts', {
  extends: ['plugin:react/jsx-runtime', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@iceworks/best-practices/recommend-functional-component': 'off',
    'no-return-assign': 'warn',
    'no-nested-ternary': 'warn',
    'no-case-declarations': 'warn',
    'no-fallthrough': 'warn',
  },
});
