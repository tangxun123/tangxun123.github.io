(function (win, doc) {
    const maxW = win.innerWidth;
    const maxH = win.innerHeight;
    const maxSize = 5;
    const minSize = 1;
    let isMoving = false;
    let timer = null;

    let canvas = doc.getElementById('canvas');
    canvas.width = maxW;
    canvas.height = maxH;
    let ctx = canvas.getContext('2d');

    let stars = []; // 存放作为背景使用的星星
    let move_stars = []; // 存放鼠标移动时绘制的星星

    function CanvasStar(num) {
        this.num = num;
    };

    CanvasStar.prototype = {
        render() {
            for (let i = 0; i < this.num; i++) {
                let alpha = Math.random() + 0.1;
                stars[i] = new Star(i, getOneRandom(maxW), getOneRandom(maxH), getOneRandom(maxSize, minSize), true, alpha);
            }
            animate();
        }
    };

    function Star(id, x, y, r, isCache, dot_alpha) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.r = r;
        this.dot_alpha = dot_alpha;
        this.show = .5; // 作用：控制 鼠标绘制点的隐藏
        this.direct = getOneRandom(180) + 180;
        this.isCache = isCache;
        this.cacheCanvas = doc.createElement('canvas');
        this.ctx_cache = this.cacheCanvas.getContext('2d');
        if (isCache) {
            this.cache();
        }
    };

    Star.prototype = {

        draw() {
            // 绘制一个Star
            if (!this.isCache) {
                let alpha = Math.random() + 0.1;
                ctx.save();
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
                ctx.closePath();

                ctx.shadowColor = '#fff';
                ctx.shadowBlur = 2 * this.r;
                ctx.fillStyle = `rgba(255, 255, 255, ${ this.dot_alpha })`;
                ctx.fill();
                ctx.restore();
            } else {
                ctx.drawImage(this.cacheCanvas, this.x - 3 * this.r, this.y - 3 * this.r)
            }
        },

        move() {
            this.y -= 0.25;
            if (this.y < -10) {
                this.y = maxH + 10;
            }
            this.draw();
        },

        // 使鼠标绘制的点抖动起来
        shake(arr) {
            this.show -= 0.01;
            if (this.show < 0) {
                return;
            }
            let speed = .5;
            this.x += Math.cos(this.direct * Math.PI / 180) * speed;
            this.y += Math.sin(this.direct * Math.PI / 180) * speed;
            this.draw();
            this.link();
        },

        link() {
            if (!this.id) return;
            let len = move_stars.length;
            // 关键思想：取当前id，之前的4个点，每绘制一次就向前取4个点，以此类推
            // 而不是move_stars最后的四个点，否则的话只有最后几个点会被连接起来
            let arr = move_stars.slice(this.id - 3, this.id);
            let endIdx = arr.length - 1;

            ctx.save();
            for (let i = endIdx; i >= 0; i--) {
                if (i == endIdx && !!arr[endIdx]) {
                    ctx.moveTo(arr[endIdx].x, arr[endIdx].y);
                    ctx.beginPath();
                    ctx.lineTo(this.x, this.y);
                }
                if (i != endIdx && !!arr[i] && arr[i].show > 0) ctx.lineTo(arr[i].x, arr[i].y);
            }
            ctx.closePath();

            ctx.strokeStyle = 'rgba(255, 255, 255, 0.125)';
            ctx.stroke();
            ctx.restore();
        },
        cache() {
            this.cacheCanvas.width = 6 * this.r;
            this.cacheCanvas.height = 6 * this.r;

            this.ctx_cache.save();
            this.ctx_cache.beginPath();
            this.ctx_cache.arc(this.r * 3, this.r * 3, this.r, 0, 2 * Math.PI, false);
            this.ctx_cache.closePath();

            this.ctx_cache.shadowColor = '#fff';
            this.ctx_cache.shadowBlur = 2 * this.r;
            this.ctx_cache.fillStyle = `rgba(255, 255, 255, ${this.dot_alpha})`;
            this.ctx_cache.fill();
            this.ctx_cache.restore();
        }
    };

    // 动画
    function animate() {
        ctx.clearRect(0, 0, maxW, maxH);
        let len = stars.length;
        for (let i = 0; i < len; i++) {
            stars[i].move();
        }

        let len2 = move_stars.length;
        if (isMoving) {
            for (let i = 0; i < len2; i++) {
                if (move_stars[i]) move_stars[i].shake(move_stars);
            }
        } else {
            move_stars = []
        }
        requestAnimationFrame(animate);
    };

    // 获取区间内的随机数
    function getOneRandom(max, min = 0) {
        return Math.floor(Math.random() * (max - min) + min);
    };

    // 获取正负号
    function getSign() {
        return Math.random() > .5 ? -1 : 1;
    };

    // 鼠标移动事件
    doc.addEventListener('mousemove', function (e) {
        let x = e.clientX,
            y = e.clientY;
        // 控制绘制密度 以及点之间的距离    两个重要的点
        // 密度是控制绘制的数量     dis_x = Math.abs(x - pre_star.x);
        // 距离是在已绘制的点基础上、控制点的间距

        // 控制绘制密度 和 控制点之间的距离  不是一个功能哦（需要实际操作去体会， 文字很难表述~.~）
        // 没有控制距离的话 绘制的图形，太规则了，不够分散    x = x + getSign() * getOneRandom(50)

        let len = move_stars.length;
        let dis_x, dis_y;
        if (!len) {
            move_stars.push(new Star(len, x, y, getOneRandom(maxSize, 3), true, 1));
        }

        if (move_stars[len - 1]) {
            // 当前的星还没有push到move_stars里，所以上个星是move_stars[len - 1]
            let pre_star = move_stars[len - 1];
            if (pre_star) {
                dis_x = Math.abs(x - pre_star.x);
                dis_y = Math.abs(y - pre_star.y);
            }
            x = x + getSign() * getOneRandom(50);
            y = y + getSign() * getOneRandom(50);
            if (dis_x > 5 && dis_y > 5) move_stars.push(new Star(len, x, y, getOneRandom(maxSize, minSize), true, 1));
        }

        isMoving = true;
        clearInterval(timer); // 清除上一次的定时器（此时还没触发）
        timer = setInterval(function () {
            isMoving = false;
            clearInterval(timer); // 鼠标停止再清除下定时器
        }, 500)

    }, false);

    window.CanvasStar = CanvasStar;
})(window, document);

let canvasStar = new CanvasStar(200);
canvasStar.render();