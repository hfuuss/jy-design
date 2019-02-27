
module.exports = {
  components: 'src/components/**/[A-Z]*.js',
  webpackConfig: Object.assign({}, require('./config-overrides.js'), {
    module: {
      rules: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env','@babel/preset-react','@babel/preset-typescript'],
              plugins: ['@babel/plugin-proposal-class-properties',["import", { "libraryName": "antd", style: true }]]
            }
          }
         
        },
        {
          test: /\.(css|less)$/,
          use: [{
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader" // translates CSS into CommonJS
          }, {
              loader: "less-loader" ,options: { javascriptEnabled: true }// compiles Less to CSS
          }]
      }
      ]
    }
  }),
  sections: [
    {
      name: '简介',
      content: 'docs/introduction.md'
    },
    {
      name: '文档',
      sections: [
        {
          name: '安装',
          content: 'docs/installation.md',
          description: '如何安装zyui'
        },
        {
          name: 'Configuration',
          content: 'docs/configuration.md'
        },
        {
          name: 'baidu',
          external: true,
          href: 'https://www.baidu.com'
        }
      ]
    },
    {
      name: 'example 组件',
      content: 'docs/example.md',
      components: 'src/components/**/[A-Z]*.js',
      exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
      usageMode: 'collapse' // 'hide' | 'collapse' | 'expand'
    }
  ]
}