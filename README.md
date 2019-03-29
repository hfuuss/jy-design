# 九月大人的脚手架 具体内容查看各自的README.md
jyui —— 功能性组件库 —— 基于[antd](https://ant.design) 二次封装功能性组件库。          
基于此，可以和后端同学讨论，形成业务性组件库。类似自己[adp](https://pro.ant.design/index-cn)的 可配置解决方案

## jyui
功能性组件库 —— 基于[antd](https://ant.design) 二次封装功能性组件库。



### 线上访问地址： https://github.getshell.cn/
# 技术栈
* antd: 基础组件库
* cra: 项目脚手架
* styleguide: React组件文档库
* Typescript: 语言
* 其他
# 如何使用
```bash
npm install @hfuuss/jyui # 安装组件库

import {Button} from '@hfuuss/jyui'  # 使用组件
```
# 如何开发
* 由于是基于antd开发的二次组件，所以尽量不要引入多余的css文件。保持风格上面的统一
```bash
npm start # 开发
npm run build # 打包成库
npm run doc:dev # 组件库文档开发
npm run doc:publish # 打包组件库文档并且发布
```
# 待开发
- [x] lerna
- [ ] mock —— cra自带mock，调试的时候可以使用。具体参考[create-react-app](https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development)
- [ ] TypeScripts —— cra 自带TypeScripts，调试的时候也可以使用。之后还得加到babel.config.js里面，还得增加到styleguide相关配置里面。
- [ ] antd里面打包的时候，还包含了dist里面，之后还得写一个webpack配置。
# 对比antd pro
基本上都是‘原生’的工具，简单，开明吧。antd pro那套东西太依赖阿里内部的打包工具和框架，但是阿里内部的打包工具有木有文档，所以之前用起来很麻烦。不过是大佬的话，可以忽略所有。      
# 收获
对webpack，babel等等 有了更深入的理解，之前虽然读过这些工具的源码，写过插件，但是都没啥印象了。现在真正的用了之后，才理解更深了。这些DSL真的方便了很多开发流程。未来等到业务需要这套业务的时候，还会进行开发吧。暂时就这样了。
