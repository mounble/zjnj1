let moveTime = ''
let moveDistanceX = ''
let startDistanceX = ''
let endDistanceX = ''
let box = document.querySelector('body')
let house = document.getElementsByClassName('click')
let intro = document.getElementsByClassName('introduction')
let width = []
let height = []//获取标签原来的宽高值
let isClicked = 0
let cloudList = []
let raf = null
let audio=document.getElementById('vo')
let tag = -1
function music(){
    tag=-tag
    if(tag==1){
        audio.play()
        document.getElementById('control').src='../imgs/control.png'
    }
    else{
        audio.pause()
        document.getElementById('control').src='../imgs/pause.png'
    }
}

function setCloud(){
    let left = -100 - Math.random()*350
    let top = Math.random()*120
    let cloud = document.createElement('img')
    cloud.src = '../imgs/cloud1.png'
    cloud.style.position = 'absolute'
    cloud.style.left = left+'px'
    cloud.style.top = top+'px'
    cloud.id = 'cloud1'
    cloudList.push(cloud)
    document.getElementById('cloud').appendChild(cloud)
    if(cloudList.length>=10){
        window.clearTimeout(setCloud)
    }
    else{
        window.setTimeout(setCloud,100)
    }
}
function cloudAnimation(){
    for(let i=0;i<cloudList.length;i++){
        let lf = cloudList[i].offsetLeft
        lf+=0.5
        cloudList[i].style.left = lf+'px'
        if(cloudList[i].offsetLeft>'1290'){
            document.getElementById('cloud').removeChild(cloudList[i])
            cloudList.splice(i,1)
            setCloud()
        }
    }
    raf = window.requestAnimationFrame(cloudAnimation)
}
function setWh(){
    for(let i=0;i<house.length;i++){
        width[i] = house[i].offsetWidth//宽高属性通过选择器设置，只能用这个或缺
        height[i] = house[i].offsetHeight
    }
}


window.onload=function(){
    setCloud()
    cloudAnimation()
    setTh()
    setSakura()
    flowerAnimate()
    box.addEventListener('touchstart', (e) => {
        startTime = new Date().getTime()
        stratDistanceX = e.touches[0].screenX
    })//获取触摸坐标
    box.addEventListener('touchend', (e) => {
        endTime = new Date().getTime()
        endDistanceX = e.changedTouches[0].screenX
        moveTime = endTime - startTime
        moveDistanceX = stratDistanceX - endDistanceX//计算滑动距离
        if (Math.abs(moveDistanceX) > 40 && moveTime < 500) {//设置滑动判断条件,产生对应效果
            for(let i=0;i<house.length;i++){
                house[i].style.filter = 'drop-shadow(0 0 20px black)'
            }    
        }
    })
} 

function clickHouse(e,id) {
    if(isClicked==0){
        for(let i=0;i<house.length;i++){
            width[i] = house[i].offsetWidth//宽高属性通过选择器设置，只能用这个获取
            height[i] = house[i].offsetHeight
        }
        isClicked++
    }
    //第一次点击的时候生成保存了最初宽高值数据的数组
    width1 = e.offsetWidth
    height1 = e.offsetHeight
    for(let i=0;i<house.length;i++){
        house[i].src = '../imgs/house'+(i+1)+'.png'
        house[i].style.width = width[i]+'px'
        house[i].style.height = height[i]+'px'
        house[i].style.filter = ''
        intro[i].style.display = 'none'
        document.getElementById('btn'+(i+1)).style.display = 'none'
    }//点击其他房子的时候，消除目前点击效果
    e.style.width = width[id-1]*1.05+'px'
    e.src = '../imgs/house'+id+'-1.png'
    e.style.height = height[id-1]*1.05+'px'
    intro[id-1].style.display = 'block'
    document.getElementById('btn'+id).style.display = 'block'
    //点击房子生成对应效果
}
function clickBg(){
    for (let i = 0; i < house.length; i++) {
        house[i].src = '../imgs/house'+(i+1)+'.png'
        house[i].style.width = width[i]+'px'
        house[i].style.height = height[i]+'px'
        house[i].style.filter = ''
        intro[i].style.display = 'none'
        document.getElementById('btn'+(i+1)).style.display = 'none'
    }//点击在空白区域则消除目前效果
}

function shift(e,id) {
    console.log(id)
    window.location.href = '../html/next'+id+'.html'
    e.style.filter = 'drop-shadow(0 0 10px yellow)'
}
// const canvas = document.querySelector('canvas');

// //设置canvas画布的宽高为浏览器视口宽高
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// // 使用2d的绘图方式
// const ctx = canvas.getContext('2d');

// // 定义花瓣的数量
// const SAKURA_SUM = 40;
// // 花瓣数组
// const sakuraArray = [];

// /**
//  * 定义花瓣类
//  */
// class Sakura {
//      // 构造方法
//     constructor() {
//         // 随机生成花瓣的x, y坐标
//         this.x = Math.random() * canvas.width;
//          this.y = (Math.random() * canvas.height * 2) - canvas.height;
//          // 随机生成花瓣的宽高
//          this.width = Math.random() * 15 + 25;
//         this.height = Math.random() * 12 + 20;
//          // 设置一个随机数，后面实现旋转角度效果时会用到
//          this.rotate = Math.random();
//         // 速度初始化
//          this.xSpeed = Math.random()+1;
//          this.ySpeed = Math.random()+1.5;
//          this.rotateSpeed = Math.random() * 0.02;
//      }

//      // 绘制
//      draw() {
//          // 当花瓣超过canvas画布边界后，重新设置花瓣的坐标、速度、和转速
//          if (this.x > canvas.width || this.y > canvas.height) {
//             this.x = -sakuraImg.width; // 刚好藏住
//             this.y = (Math.random() * canvas.height * 2) - canvas.height;
//              this.rotate = Math.random();
//             this.rotateSpeed = Math.random()*0.02 ;
//              this.xSpeed = Math.random()+1 ;
//             this.ySpeed = Math.random() + 1;
//          }
//          ctx.drawImage(//drawImage是canvas自带方法
//              sakuraImg,
//              this.x,
//             this.y,
//              this.width * (0.6 + (Math.abs(Math.cos(this.rotate)) / 3)),
//              this.height * (0.8 + (Math.abs(Math.sin(this.rotate)) / 5))
//          )
//      }

//      animate() {
//          this.x += this.xSpeed ;
//          this.y += this.ySpeed ;
//         this.rotate += this.rotateSpeed;
//          this.draw();
//      }
//  }

// // /**
// //  * 定义渲染方法
// //  */
//  function render() {
//      // 清除矩形内的内容 - 清空屏幕
//      ctx.clearRect(0, 0, canvas.width, canvas.height);
//      sakuraArray.forEach(sakura => sakura.animate());
//      // 该方法会高速浏览器在重绘之前调用指定的函数
//      // 这样可以保证在浏览器的刷新频率下去更新动画；
//      window.requestAnimationFrame(render);
//  }

// // 加载花瓣图片
// const sakuraImg = new Image();
// sakuraImg.src = '../imgs/flower_1.png';
//  // 等花瓣图片加载完毕，将数目为SAKURA_SUM的花瓣实例保存到数组中
// sakuraImg.addEventListener('load', () => {
//      for (let i = 0; i < SAKURA_SUM; i++) {
//          sakuraArray.push(new Sakura())
//      }
//      render();
// });
const sum = 40
const flower = []
let sakuraArray = []
let raf2 = null
let rotate = []
let xSpeed = []
let ySpeed = []
let rotateSpeed = []
function setTh(){
    for(let i=0;i<40;i++){
        // rotate[i] = Math.random()
        xSpeed[i] = Math.random()+1
        ySpeed[i] = Math.random()+1.5
        rotateSpeed[i] = Math.random()*0.5
    }
}
function setSakura(){
    let x = Math.random()*document.body.clientWidth
    let y = (Math.random()*document.body.clientHeight*2)-document.body.clientHeight
    let width = Math.random()*25+30
    let height = Math.random()*15+20
    let sakura = document.createElement('img')
    sakura.src = '../imgs/flower_1.png'
    sakura.style.width = width+'px'
    sakura.style.height = height+'px'
    sakura.style.position = 'absolute'
    sakura.style.left = x+'px'
    // console.log(x)
    sakura.style.top = y +'px'
    sakura.style.zIndex = '7'
    flower.push(sakura)
    document.getElementById('flower').appendChild(sakura)
    if(flower.length>=30){
        window.clearTimeout(setSakura)
    }
    else{
        window.setTimeout(setSakura,100)
    }
    
}
function flowerAnimate(){
    for(let i =0;i<flower.length;i++){
        let lf = flower[i].offsetLeft
        let tf = flower[i].offsetTop
        lf += xSpeed[i]*0.5
        tf += ySpeed[i]*0.6
        flower[i].style.left = lf+'px'
        flower[i].style.top = tf+'px'
        rotateSpeed[i]+=rotateSpeed[i]
        // console.log(rotate[i])
        flower[i].style.transform = 'rotateY('+(rotateSpeed[i])+'deg)'
        if(flower[i].offsetLeft>'1200'||flower[i].offsetTop>'1000'){
            document.getElementById('flower').removeChild(flower[i])
            flower.splice(i,1)
            setSakura()
        }
    }
    raf2 = window.requestAnimationFrame(flowerAnimate)
}
// class Sakura{
//     constructor(){
//         //随机生成花瓣的x，y坐标
//         this.x =  Math.random()*1290
//         this.y = Matn.random()*60
//         //随机生成花瓣的宽高
//         this.width = Math.random()*15+25
//         this.height = Math.random()*12+20
//         this.rotate = Math.random()
//         this.xSpeed = Math.random()+1
//         this.ySpeed = Math.random()+1.5
//         this.rotateSpeed = Math.random()*0.02
//     }
//     draw() {
//         // 当花瓣超过canvas画布边界后，重新设置花瓣的坐标、速度、和转速
//         if (this.x > canvas.width || this.y > canvas.height) {
//             this.x = -sakuraImg.width; // 刚好藏住
//             this.y = (Math.random() * canvas.height * 2) - canvas.height;
//             this.rotate = Math.random();
//             this.rotateSpeed = Math.random()*0.02 ;
//             this.xSpeed = Math.random()+1 ;
//             this.ySpeed = Math.random() + 1;
//         }
//     }
//     animate(){
//         this.x += this.xSpeed ;
//         this.y += this.ySpeed ;
//         this.rotate += this.rotateSpeed;
//         this.draw();
//     }
// }
// function render() {
//     // 清除矩形内的内容 - 清空屏幕
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     sakuraArray.forEach(sakura => sakura.animate());
//     // 该方法会高速浏览器在重绘之前调用指定的函数
//     // 这样可以保证在浏览器的刷新频率下去更新动画；
//     window.requestAnimationFrame(render);
// }

// // 加载花瓣图片
// const sakuraImg = new Image();
// sakuraImg.src = '../imgs/flower_1.png';
// // 等花瓣图片加载完毕，将数目为SAKURA_SUM的花瓣实例保存到数组中
// sakuraImg.addEventListener('load', () => {
//     for (let i = 0; i < sum; i++) {
//         sakuraArray.push(new Sakura())
//     }
//     render();
// });
