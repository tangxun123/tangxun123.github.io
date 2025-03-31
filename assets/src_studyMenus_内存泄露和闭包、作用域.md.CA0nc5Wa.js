import{_ as i,c as a,o as n,aF as l}from"./chunks/framework.C249IrdD.js";const d=JSON.parse('{"title":"内存泄露和闭包","description":"","frontmatter":{},"headers":[],"relativePath":"src/studyMenus/内存泄露和闭包、作用域.md","filePath":"src/studyMenus/内存泄露和闭包、作用域.md","lastUpdated":1743414872000}'),t={name:"src/studyMenus/内存泄露和闭包、作用域.md"};function h(e,s,p,k,r,o){return n(),a("div",null,s[0]||(s[0]=[l(`<h1 id="内存泄露和闭包" tabindex="-1">内存泄露和闭包 <a class="header-anchor" href="#内存泄露和闭包" aria-label="Permalink to &quot;内存泄露和闭包&quot;">​</a></h1><h2 id="什么是内存泄漏" tabindex="-1">什么是内存泄漏 <a class="header-anchor" href="#什么是内存泄漏" aria-label="Permalink to &quot;什么是内存泄漏&quot;">​</a></h2><p>内存泄漏（Memory Leak）是指程序在申请内存后，无法释放已申请的内存空间，导致系统内存的浪费，最终可能导致系统性能下降甚至崩溃。</p><p>在JavaScript中，内存泄漏主要发生在以下几种情况：</p><ol><li><strong>意外的全局变量</strong>：未声明的变量会自动成为全局变量，占用内存直到页面关闭</li><li><strong>被遗忘的定时器或回调函数</strong>：未清除的<code>setInterval</code>或<code>setTimeout</code></li><li><strong>闭包引起的内存泄漏</strong>：闭包中引用的外部变量无法被垃圾回收</li><li><strong>DOM引用</strong>：保存了DOM元素的引用，但元素已从DOM树中移除</li><li><strong>控制台日志</strong>：大量使用<code>console.log</code>输出大对象</li></ol><h2 id="如何检测内存泄漏" tabindex="-1">如何检测内存泄漏 <a class="header-anchor" href="#如何检测内存泄漏" aria-label="Permalink to &quot;如何检测内存泄漏&quot;">​</a></h2><ol><li><p><strong>Chrome开发者工具</strong>：</p><ul><li>Performance面板：记录内存使用情况</li><li>Memory面板：堆快照分析</li><li>Task Manager：查看页面内存使用</li></ul></li><li><p><strong>内存使用模式</strong>：</p><ul><li>如果内存使用呈锯齿状（上升然后下降），通常是正常的</li><li>如果内存使用持续上升，可能存在内存泄漏</li></ul></li></ol><h2 id="闭包" tabindex="-1">闭包 <a class="header-anchor" href="#闭包" aria-label="Permalink to &quot;闭包&quot;">​</a></h2><p>闭包（Closure）是指有权访问另一个函数作用域中变量的函数。简单来说，闭包就是一个函数能够记住并访问它的词法作用域，即使当这个函数在其词法作用域之外执行时。</p><h3 id="闭包的特点" tabindex="-1">闭包的特点 <a class="header-anchor" href="#闭包的特点" aria-label="Permalink to &quot;闭包的特点&quot;">​</a></h3><ol><li><strong>函数嵌套</strong>：闭包涉及函数嵌套</li><li><strong>作用域链</strong>：内部函数可以访问外部函数的变量</li><li><strong>延长变量生命周期</strong>：外部函数执行完毕后，其变量仍然存在</li></ol><h3 id="闭包示例" tabindex="-1">闭包示例 <a class="header-anchor" href="#闭包示例" aria-label="Permalink to &quot;闭包示例&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 闭包示例</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createCounter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> count </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 私有变量</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    increment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      count</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> count;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    decrement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      count</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> count;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    getCount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> count;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用闭包</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> counter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createCounter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(counter.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getCount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出: 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(counter.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">increment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出: 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(counter.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">increment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出: 2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(counter.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">decrement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出: 1</span></span></code></pre></div><h2 id="作用域" tabindex="-1">作用域 <a class="header-anchor" href="#作用域" aria-label="Permalink to &quot;作用域&quot;">​</a></h2><p>作用域（Scope）是指程序中定义变量的区域，它决定了变量的可访问性（可见性）。JavaScript中主要有以下几种作用域：</p><ol><li><p><strong>全局作用域（Global Scope）</strong>：</p><ul><li>在代码中任何地方都能访问到的变量，拥有全局作用域</li><li>未使用var、let或const声明的变量自动成为全局变量</li></ul></li><li><p><strong>函数作用域（Function Scope）</strong>：</p><ul><li>在函数内部声明的变量，只能在函数内部访问</li><li>使用var关键字声明的变量具有函数作用域</li></ul></li><li><p><strong>块级作用域（Block Scope）</strong>：</p><ul><li>ES6引入的概念，使用let和const声明的变量具有块级作用域</li><li>块级作用域由{}包裹</li></ul></li><li><p><strong>词法作用域（Lexical Scope）</strong>：</p><ul><li>也称为静态作用域，变量的作用域在定义时就确定了</li><li>闭包正是基于词法作用域工作的</li></ul></li></ol>`,16)]))}const g=i(t,[["render",h]]);export{d as __pageData,g as default};
