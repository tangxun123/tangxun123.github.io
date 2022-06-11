(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{371:function(s,a,t){"use strict";t.r(a);var n=t(42),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"npm、nrm、nvm操作详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm、nrm、nvm操作详解"}},[s._v("#")]),s._v(" npm、nrm、nvm操作详解")]),s._v(" "),t("p",[s._v("你了解npm、nvm及nrm的区别以及一些操作指令吗？下面讲讲它们～")]),s._v(" "),t("ul",[t("li",[t("h2",{attrs:{id:"npm-node-js-的包管理工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-node-js-的包管理工具"}},[s._v("#")]),s._v(" npm  "),t("code",[s._v("Node.js 的包管理工具")])])])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.npmjs.com",target:"_blank",rel:"noopener noreferrer"}},[s._v("npm"),t("OutboundLink")],1),s._v(" 的全称是 Node Package Manager 是 JavaScript 世界的包管理工具,并且是 Node.js 平台的默认包管理工具。通过 npm 可以安装、共享、分发代码,管理项目依赖关系。")]),s._v(" "),t("h3",{attrs:{id:"常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("npm install  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 安装模块")]),s._v("\nnpm uninstall "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 卸载模块")]),s._v("\nnpm update "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 更新模块")]),s._v("\nnpm ls "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 查看安装的模块")]),s._v("\nnpm init "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在项目中引导创建一个package.json文件")]),s._v("\nnpm config "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 管理npm的配置路径")]),s._v("\nnpm cache "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 管理模块的缓存")]),s._v("\nnpm start "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 启动模块")]),s._v("\nnpm version "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 查看模块版本")]),s._v("\nnpm adduser  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 用户登录")]),s._v("\nnpm publish "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 发布模块")]),s._v("\nnpm access "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在发布的包上设置访问级别")]),s._v("\n")])])]),t("ul",[t("li",[t("h3",{attrs:{id:"npm上传自己的包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm上传自己的包"}},[s._v("#")]),s._v(" npm上传自己的包")])])]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("npm install ModuleName    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//检查包是否已存在  ")]),s._v("\n")])])]),t("h4",{attrs:{id:"如果没有，则新建一个-modulename-文件夹"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如果没有，则新建一个-modulename-文件夹"}},[s._v("#")]),s._v(" 如果没有，则新建一个  ModuleName 文件夹")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("cd ModuleName\nnpm init "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("y\n")])])]),t("p",[s._v("进入package.json文件")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ModuleName"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//必填项目名称")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"version"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.0.1"')]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//必填版本信息")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"main"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./dist/index.js'")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//暴露的文件地址名称")]),s._v("\n")])])]),t("h4",{attrs:{id:"登录npm-没有账号去-https-www-npmjs-com-注册账号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#登录npm-没有账号去-https-www-npmjs-com-注册账号"}},[s._v("#")]),s._v(" 登录npm  ,没有账号去  "),t("a",{attrs:{href:""}},[s._v("https://www.npmjs.com/")]),s._v("   注册账号")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v(" npm login    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//输入用户名、密码和邮箱")]),s._v("\n")])])]),t("p",[s._v("更新 npm 包时，记得修改 package.json 文件夹中的 version 版本信息")]),s._v(" "),t("h4",{attrs:{id:"执行指令发布自己的包，切记更新包时修改版本号信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行指令发布自己的包，切记更新包时修改版本号信息"}},[s._v("#")]),s._v(" 执行指令发布自己的包，切记更新包时修改版本号信息")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("npm publish\n")])])]),t("h4",{attrs:{id:"撤销已发布的包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#撤销已发布的包"}},[s._v("#")]),s._v(" 撤销已发布的包")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("npm unpublish "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'包名'")]),s._v("\n")])])]),t("p",[s._v("如果已发布包，在自己的项目下执行"),t("code",[s._v("npm install 包名 --save-dev")]),s._v(" 就可以安装你自己的包了")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("npm install "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'包名'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//下载到自己的项目")]),s._v("\n")])])]),t("ul",[t("li",[t("h2",{attrs:{id:"nvm-切换node版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nvm-切换node版本"}},[s._v("#")]),s._v(" nvm 切换node版本")])])]),s._v(" "),t("h3",{attrs:{id:"常用命令-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用命令-2"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("npm  install   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g   nvm     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//安装")]),s._v("\nnvm install ##    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 安装指定版本，可模糊安装，如：安装v6.2.0，既可nvm install v6.2.0，又可nvm install 6.2")]),s._v("\nnvm uninstall ##   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 删除已安装的指定版本，语法与install类似")]),s._v("\nnvm use ##   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 切换使用指定的版本node")]),s._v("\nnvm ls  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 列出所有安装的版本 list）")]),s._v("\nnvm current ##   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 显示当前的版本")]),s._v("\nnvm reinstall"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("packages ##    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//  在当前版本node环境下，重新全局安装指定版本号的npm包")]),s._v("\n")])])]),t("ul",[t("li",[t("p",[s._v("nvm 不支持 Windows，但是有替代品，也就是nvm-windows")])]),s._v(" "),t("li",[t("h2",{attrs:{id:"nrm切换npm的源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nrm切换npm的源"}},[s._v("#")]),s._v(" nrm切换npm的源")])])]),s._v(" "),t("p",[s._v("nrm全称是npm registry manage, 是npm 资源管理器，允许你快速切换npm 源")]),s._v(" "),t("h3",{attrs:{id:"常用命令-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用命令-3"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("npm install "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g nrm   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 安装")]),s._v("\nnrm ls  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 列出可用的源")]),s._v("\nnrm use taobao  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 选择国内淘宝的源")]),s._v("\nnrm test npm  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 测试速度")]),s._v("\nnrm add taobao http"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".10")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".127")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8081")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("repository"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("npm"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 添加源")]),s._v("\nnrm del taobao "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 删除对应的源")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);