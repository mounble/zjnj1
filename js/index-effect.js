
let cloudList = []
let flowerList = []
let raf = null

// 获取canvas元素
const canvas = document.querySelector('canvas');

// 设置canvas画布的宽高为浏览器视口宽高
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 使用2d的绘图方式
const ctx = canvas.getContext('2d');

// 定义花瓣的数量
const SAKURA_SUM = 40;
// 花瓣数组
const sakuraArray = [];

/**
 * 定义花瓣类
 */
class Sakura {
    // 构造方法
    constructor() {
        // 随机生成花瓣的x, y坐标
        this.x = Math.random() * canvas.width;
        this.y = (Math.random() * canvas.height * 2) - canvas.height;
        // 随机生成花瓣的宽高
        this.width = Math.random() * 15 + 25;
        this.height = Math.random() * 12 + 20;
        // 设置一个随机数，后面实现旋转角度效果时会用到
        this.rotate = Math.random();
        // 速度初始化
        this.xSpeed = Math.random()+1;
        this.ySpeed = Math.random()+1.5;
        this.rotateSpeed = Math.random() * 0.02;
    }

    // 绘制
    draw() {
        // 当花瓣超过canvas画布边界后，重新设置花瓣的坐标、速度、和转速
        if (this.x > canvas.width || this.y > canvas.height) {
            this.x = -sakuraImg.width; // 刚好藏住
            this.y = (Math.random() * canvas.height * 2) - canvas.height;
            this.rotate = Math.random();
            this.rotateSpeed = Math.random()*0.02 ;
            this.xSpeed = Math.random()+1 ;
            this.ySpeed = Math.random() + 1;
        }
        ctx.drawImage(//drawImage是canvas自带方法
            sakuraImg,
            this.x,
            this.y,
            this.width * (0.5 + (Math.abs(Math.cos(this.rotate)) / 3)),
            this.height * (0.6 + (Math.abs(Math.sin(this.rotate)) / 5))
        )
    }

    animate() {
        this.x += this.xSpeed ;
        this.y += this.ySpeed ;
        this.rotate += this.rotateSpeed;
        this.draw();
    }
}

/**
 * 定义渲染方法
 */
function render() {
    // 清除矩形内的内容 - 清空屏幕
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    sakuraArray.forEach(sakura => sakura.animate());
    // 该方法会高速浏览器在重绘之前调用指定的函数
    // 这样可以保证在浏览器的刷新频率下去更新动画；
    window.requestAnimationFrame(render);
}

// 加载花瓣图片
const sakuraImg = new Image();
sakuraImg.src = '../imgs/flower_1.png';
// 等花瓣图片加载完毕，将数目为SAKURA_SUM的花瓣实例保存到数组中
sakuraImg.addEventListener('load', () => {
    for (let i = 0; i < SAKURA_SUM; i++) {
        sakuraArray.push(new Sakura())
    }
    render();
});

// function init(){
//     setCloud()
//     cloudAnimation()
// }

// function setCloud(){
//     let left = -100 - Math.random()*350
//     let top = Math.random()*120
//     let cloud = document.createElement('img')
//     cloud.src = '../imgs/cloud1.png'
//     cloud.style.position = 'absolute'
//     cloud.style.left = left+'px'
//     cloud.style.top = top+'px'
//     cloud.id = 'cloud1'
//     cloudList.push(cloud)
//     document.getElementById('cloud').appendChild(cloud)
//     if(cloudList.length>=10){
//         window.clearTimeout(setCloud)
//     }
//     else{
//         window.setTimeout(setCloud,100)
//     }
// }
// function cloudAnimation(){
//     for(let i=0;i<cloudList.length;i++){
//         let lf = cloudList[i].offsetLeft
//         lf+=0.5
//         cloudList[i].style.left = lf+'px'
//         if(cloudList[i].offsetLeft>'1290'){
//             document.getElementById('cloud').removeChild(cloudList[i])
//             cloudList.splice(i,1)
//             setCloud()
//         }
//     }
//     raf = window.requestAnimationFrame(cloudAnimation)
// }
