(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{358:function(a,s,n){"use strict";n.r(s);var t=n(42),e=Object(t.a)({},(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("p",[a._v("你了解npm、nvm及nrm的区别以及一些操作指令吗？下面讲讲它们～")]),a._v(" "),n("ul",[n("li",[n("h1",{attrs:{id:"npm-js的包管理工具"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#npm-js的包管理工具"}},[a._v("#")]),a._v(" npm  js的包管理工具")])])]),a._v(" "),n("p",[a._v("npm (官网：https://www.npmjs.com/) 的全称是 Node Package Manager 是 JavaScript 世界的包管理工具,并且是 Node.js 平台的默认包管理工具。通过 npm 可以安装、共享、分发代码,管理项目依赖关系。")]),a._v(" "),n("h3",{attrs:{id:"常用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[a._v("#")]),a._v(" 常用命令")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("npm install 安装模块\nnpm uninstall 卸载模块\nnpm update 更新模块\nnpm ls 查看安装的模块\nnpm init 在项目中引导创建一个package.json文件\nnpm config 管理npm的配置路径\nnpm cache 管理模块的缓存\nnpm start 启动模块\nnpm version 查看模块版本\nnpm adduser  用户登录\nnpm publish 发布模块\nnpm access 在发布的包上设置访问级别\nnpm package.json的语法\n")])])]),n("ul",[n("li",[n("h3",{attrs:{id:"npm上传自己的包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#npm上传自己的包"}},[a._v("#")]),a._v(" npm上传自己的包")])])]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("npm install ModuleName    //检查包是否已存在  \n")])])]),n("h5",{attrs:{id:"如果没有，则新建一个-modulename-文件夹"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如果没有，则新建一个-modulename-文件夹"}},[a._v("#")]),a._v(" 如果没有，则新建一个  ModuleName 文件夹")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("cd ModuleName\nnpm init -y\n")])])]),n("p",[a._v("进入package.json文件")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('"name": "ModuleName",     //必填项目名称\n "version": "0.0.1"    //必填版本信息\n "main":\'./dist/index.js\'   //暴露的文件地址名称\n')])])]),n("h5",{attrs:{id:"登录npm-没有账号去-https-www-npmjs-com-注册账号"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#登录npm-没有账号去-https-www-npmjs-com-注册账号"}},[a._v("#")]),a._v(" 登录npm  ,没有账号去  "),n("a",{attrs:{href:""}},[a._v("https://www.npmjs.com/")]),a._v("   注册账号")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v(" npm login    //输入用户名、密码和邮箱\n")])])]),n("p",[a._v("更新 npm 包时，记得修改 package.json 文件夹中的 version 版本信息")]),a._v(" "),n("h5",{attrs:{id:"执行指令发布自己的包，切记更新包时修改版本号信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#执行指令发布自己的包，切记更新包时修改版本号信息"}},[a._v("#")]),a._v(" 执行指令发布自己的包，切记更新包时修改版本号信息")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("npm publish\n")])])]),n("h5",{attrs:{id:"撤销已发布的包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#撤销已发布的包"}},[a._v("#")]),a._v(" 撤销已发布的包")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("npm unpublsh 包名\n")])])]),n("p",[a._v("如果已发布包，在自己的项目下执行npm install 包名 --save-dev 就可以安装你自己的包了")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("npm install 包名 --save  //下载到自己的项目\n")])])]),n("ul",[n("li",[n("h1",{attrs:{id:"nvm-灵活的切换node版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nvm-灵活的切换node版本"}},[a._v("#")]),a._v(" nvm 灵活的切换node版本")])])]),a._v(" "),n("h3",{attrs:{id:"常用命令-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用命令-2"}},[a._v("#")]),a._v(" 常用命令")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("npm  install   -g   nvm     //安装\nnvm install ##    安装指定版本，可模糊安装，如：安装v6.2.0，既可nvm install v6.2.0，又可nvm install 6.2\nnvm uninstall ##   删除已安装的指定版本，语法与install类似\nnvm use ##   切换使用指定的版本node\nnvm ls ##   列出所有安装的版本 list）\nnvm current ##   显示当前的版本\nnvm reinstall-packages ##     在当前版本node环境下，重新全局安装指定版本号的npm包\n")])])]),n("ul",[n("li",[n("p",[a._v("nvm 不支持 Windows，但是有替代品，也就是nvm-windows")])]),a._v(" "),n("li",[n("h1",{attrs:{id:"nrm切换npm的源"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nrm切换npm的源"}},[a._v("#")]),a._v(" nrm切换npm的源")])])]),a._v(" "),n("p",[a._v("nrm全称是npm registry manage, 是npm 资源管理器，允许你快速切换npm 源")]),a._v(" "),n("h3",{attrs:{id:"常用命令-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用命令-3"}},[a._v("#")]),a._v(" 常用命令")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("npm install -g nrm   安装\nnrm ls  列出可用的源\nnrm use taobao 选择国内淘宝的源\nnrm test npm 测试速度\nnrm add taobao http://192.168.10.127:8081/repository/npm-public/  添加源\nnrm del  taobao删除对应的源\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);