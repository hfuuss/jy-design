
const output = process.env.BABEL_OUTPUT;
const modules = output == null ? false : output;

const options = {
  presets: [
    ['@babel/preset-env', { loose: true, modules }], '@babel/preset-react'
  ],
  plugins: [
    '@babel/proposal-object-rest-spread', 
    ['@babel/proposal-class-properties', { loose: true }],
    ["import", { "libraryName": "antd", style: true }],
    '@babel/plugin-transform-arrow-functions',
  ],
};

module.exports = options;
