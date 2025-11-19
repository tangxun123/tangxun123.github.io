import{_ as a,c as n,o as p,aF as l}from"./chunks/framework.C249IrdD.js";const u=JSON.parse('{"title":"nginx 使用技巧","description":"","frontmatter":{},"headers":[],"relativePath":"src/studyMenus/nginx.md","filePath":"src/studyMenus/nginx.md","lastUpdated":1755158775000}'),e={name:"src/studyMenus/nginx.md"};function i(t,s,c,o,r,d){return p(),n("div",null,s[0]||(s[0]=[l(`<h1 id="nginx-使用技巧" tabindex="-1">nginx 使用技巧 <a class="header-anchor" href="#nginx-使用技巧" aria-label="Permalink to &quot;nginx 使用技巧&quot;">​</a></h1><h2 id="一、nginx-是什么-为什么它这么重要" tabindex="-1">一、nginx 是什么？为什么它这么重要？ <a class="header-anchor" href="#一、nginx-是什么-为什么它这么重要" aria-label="Permalink to &quot;一、nginx 是什么？为什么它这么重要？&quot;">​</a></h2><ol><li>静态资源服务器 <ul><li>直接提供 HTML、CSS、JS、图片等静态文件</li><li>支持 gzip 压缩，减少传输大小</li><li>设置缓存策略，提升加载速度</li></ul></li><li>反向代理 <ul><li>将用户请求转发到后端服务器</li><li>实现负载均衡，分散服务器压力</li><li>隐藏后端服务器真实地址，提升安全性</li></ul></li><li>负载均衡 <ul><li>将请求分发到多个服务器</li><li>支持多种负载均衡算法</li><li>实现高可用和容错</li></ul></li></ol><h2 id="二、nginx-应用场景" tabindex="-1">二、nginx 应用场景 <a class="header-anchor" href="#二、nginx-应用场景" aria-label="Permalink to &quot;二、nginx 应用场景&quot;">​</a></h2><ol><li>静态资源部署</li></ol><blockquote><p>这是前端开发者最常用的场景。React/Vue 项目打包后，需要部署到服务器上供用户访问。</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 项目结构示例</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">my</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── build</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   ├── index.html</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   ├── static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   ├── css</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   ├── js</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   └── media</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   └── favicon.ico</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">└── nginx.conf</span></span></code></pre></div><ol start="2"><li>API 代理</li></ol><blockquote><p>前端应用需要调用后端 API，可能存在跨域问题。通过nginx代理，可以完美解决这个问题。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>location /app-api/ {</span></span>
<span class="line"><span>    proxy_pass http://192.168.0.100:1800/;</span></span>
<span class="line"><span>    proxy_connect_timeout 120000;</span></span>
<span class="line"><span>    proxy_read_timeout 120000;</span></span>
<span class="line"><span>    error_page 404 = /40x.html;</span></span>
<span class="line"><span>    root \\nginx\\html;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="3"><li>性能优化 通过 nginx 的各种配置，可以显著提升前端应用的性能。</li></ol><h2 id="三、前端需掌握的-nginx-技巧" tabindex="-1">三、前端需掌握的 nginx 技巧 <a class="header-anchor" href="#三、前端需掌握的-nginx-技巧" aria-label="Permalink to &quot;三、前端需掌握的 nginx 技巧&quot;">​</a></h2><ol><li>最简单的静态文件服务</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen 80;</span></span>
<span class="line"><span>    server_name your-domain.com;</span></span>
<span class="line"><span>    root /var/www/html;</span></span>
<span class="line"><span>    index index.html;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 处理单页应用的路由</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        try_files $uri $uri/ /index.html;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="2"><li>静态资源缓存策略</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen 80;</span></span>
<span class="line"><span>    server_name your-domain.com;</span></span>
<span class="line"><span>    root /var/www/html;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # HTML 文件不缓存，确保获取最新版本</span></span>
<span class="line"><span>    location~* \\.html$ {</span></span>
<span class="line"><span>        expires -1;</span></span>
<span class="line"><span>        add_header Cache-Control &quot;no-cache, no-store, must-revalidate&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # CSS、JS 文件缓存 1 年</span></span>
<span class="line"><span>    location~* \\.(css|js)$ {</span></span>
<span class="line"><span>        expires1y;</span></span>
<span class="line"><span>        add_header Cache-Control &quot;public, immutable&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 图片文件缓存 1 个月</span></span>
<span class="line"><span>    location~* \\.(jpg|jpeg|png|gif|ico|svg)$ {</span></span>
<span class="line"><span>        expires1M;</span></span>
<span class="line"><span>        add_header Cache-Control &quot;public&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="3"><li>API 代理配置</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen 80;</span></span>
<span class="line"><span>    server_name your-domain.com;</span></span>
<span class="line"><span>    root /var/www/html;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 静态文件服务</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        try_files$uri$uri/ /index.html;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # API 代理</span></span>
<span class="line"><span>    location /app-api/ {</span></span>
<span class="line"><span>        proxy_pass http://192.168.0.100:3000/;</span></span>
<span class="line"><span>        proxy_set_header Host $host;</span></span>
<span class="line"><span>        proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-Proto $scheme;</span></span>
<span class="line"><span>    }   </span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="解决跨域问题的多种方案" tabindex="-1">解决跨域问题的多种方案 <a class="header-anchor" href="#解决跨域问题的多种方案" aria-label="Permalink to &quot;解决跨域问题的多种方案&quot;">​</a></h3><p>方案一：nginx 代理（推荐）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>location /app-api/ {</span></span>
<span class="line"><span>    proxy_pass http://192.168.0.100:1800/;</span></span>
<span class="line"><span>    # 其他代理配置...</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>方案二：CORS 头配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>location /app-api/ {</span></span>
<span class="line"><span>    add_header Access-Control-Allow-Origin *;</span></span>
<span class="line"><span>    add_header Access-Control-Allow-Methods &quot;GET, POST, PUT, DELETE, OPTIONS&quot;;</span></span>
<span class="line"><span>    add_header Access-Control-Allow-Headers &quot;Content-Type, Authorization&quot;;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    if ($request_method = &#39;OPTIONS&#39;) {</span></span>
<span class="line"><span>        return 204;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    proxy_pass http://backend-server/;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="四、在-http-块中启用-gzip" tabindex="-1">四、在 http 块中启用 gzip <a class="header-anchor" href="#四、在-http-块中启用-gzip" aria-label="Permalink to &quot;四、在 http 块中启用 gzip&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>http {</span></span>
<span class="line"><span>    gzipon;</span></span>
<span class="line"><span>    gzip_varyon;</span></span>
<span class="line"><span>    gzip_min_length1024;</span></span>
<span class="line"><span>    gzip_proxied any;</span></span>
<span class="line"><span>    gzip_comp_level6;</span></span>
<span class="line"><span>    gzip_types</span></span>
<span class="line"><span>        text/plain</span></span>
<span class="line"><span>        text/css</span></span>
<span class="line"><span>        text/xml</span></span>
<span class="line"><span>        text/javascript</span></span>
<span class="line"><span>        application/json</span></span>
<span class="line"><span>        application/javascript</span></span>
<span class="line"><span>        application/xml+rss</span></span>
<span class="line"><span>        application/atom+xml</span></span>
<span class="line"><span>        image/svg+xml;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>压缩效果对比：</p><ul><li>原始文件大小: 100KB</li><li>压缩后大小: 25KB</li><li>压缩率: 75%</li><li>加载时间减少: 60%</li></ul><h2 id="五、安全头配置" tabindex="-1">五、安全头配置 <a class="header-anchor" href="#五、安全头配置" aria-label="Permalink to &quot;五、安全头配置&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    # 防止点击劫持</span></span>
<span class="line"><span>    add_header X-Frame-Options &quot;SAMEORIGIN&quot; always;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 防止 MIME 类型嗅探</span></span>
<span class="line"><span>    add_header X-Content-Type-Options &quot;nosniff&quot; always;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # XSS 防护</span></span>
<span class="line"><span>    add_header X-XSS-Protection &quot;1; mode=block&quot; always;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 内容安全策略</span></span>
<span class="line"><span>    add_header Content-Security-Policy &quot;default-src &#39;self&#39;; script-src &#39;self&#39; &#39;unsafe-inline&#39; &#39;unsafe-eval&#39;; style-src &#39;self&#39; &#39;unsafe-inline&#39;;&quot; always;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 其他配置...</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="六、定义上游服务器组" tabindex="-1">六、定义上游服务器组 <a class="header-anchor" href="#六、定义上游服务器组" aria-label="Permalink to &quot;六、定义上游服务器组&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>upstream backend {</span></span>
<span class="line"><span>    server192.168.1.10:3001;</span></span>
<span class="line"><span>    server192.168.1.11:3001;</span></span>
<span class="line"><span>    server192.168.1.12:3001;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen80;</span></span>
<span class="line"><span>    server_name your-domain.com;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    location /app-api/ {</span></span>
<span class="line"><span>        proxy_pass http://192.168.0.100:1800/;</span></span>
<span class="line"><span>        proxy_set_header Host $host;</span></span>
<span class="line"><span>        proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="七、实战-前端项目-nginx-配置" tabindex="-1">七、实战：前端项目 nginx 配置 <a class="header-anchor" href="#七、实战-前端项目-nginx-配置" aria-label="Permalink to &quot;七、实战：前端项目 nginx 配置&quot;">​</a></h2><blockquote><p>Vue 单页应用配置</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen 80;</span></span>
<span class="line"><span>    server_name vue-app.com;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 启用 gzip 压缩</span></span>
<span class="line"><span>    gzipon;</span></span>
<span class="line"><span>    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 静态资源缓存</span></span>
<span class="line"><span>    location~* \\.(js|css|png|jpg|jpeg|gif|ico|svg)$ {</span></span>
<span class="line"><span>        expires1y;</span></span>
<span class="line"><span>        add_header Cache-Control &quot;public, immutable&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # HTML 文件不缓存</span></span>
<span class="line"><span>    location~* \\.html$ {</span></span>
<span class="line"><span>        expires -1;</span></span>
<span class="line"><span>        add_header Cache-Control &quot;no-cache, no-store, must-revalidate&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 单页应用路由处理</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        root   /home/web/dist;</span></span>
<span class="line"><span>        try_files $uri $uri/ /index.html; </span></span>
<span class="line"><span>        index  index.html index.htm;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    # API 代理</span></span>
<span class="line"><span>    location /app-api/ {</span></span>
<span class="line"><span>        proxy_pass http://192.168.0.100:1800/;</span></span>
<span class="line"><span>        proxy_set_header Host $host;</span></span>
<span class="line"><span>        proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-Proto $scheme;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 安全头</span></span>
<span class="line"><span>    add_header X-Frame-Options &quot;SAMEORIGIN&quot; always;</span></span>
<span class="line"><span>    add_header X-Content-Type-Options &quot;nosniff&quot; always;</span></span>
<span class="line"><span>    add_header X-XSS-Protection &quot;1; mode=block&quot; always;</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,34)]))}const g=a(e,[["render",i]]);export{u as __pageData,g as default};
