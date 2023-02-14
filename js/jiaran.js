let startX = 0
let startY = 0
let x = 0, y = 0, flag = 0,flag2=0
// let imgs = document.querySelector('cloth').querySelectorAll('img')
function loadf() {
    
    let box = document.getElementById('ban')
    box.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX
        startY = e.targetTouches[0].pageY
        x = this.offsetLeft
        y = this.offsetTop
        document.getElementById('ban').src = '../imgs/jia/ban2.png'
    })
    box.addEventListener('touchmove', function (e) {
        let moveX = e.targetTouches[0].pageX - startX
        let moveY = e.targetTouches[0].pageY - startY
        this.style.left = x + moveX + 'px'//标签原先的位置加上滑动距离位移
        this.style.top = y + moveY + 'px'
        e.preventDefault()//防止页面默认滑动事件
        if (this.offsetLeft >= '370' && (this.offsetTop > '200' && this.offsetTop < '310')) {
            document.getElementById('ban').style.display = 'none'
            document.getElementById('ban2').style.display = 'block'
            document.getElementById('word').style.display='none'
            flag = 1
        }
        if(this.offsetLeft<'0'){
            this.style.left='0px'
        }
        if(this.offsetLeft>'520'){
            this.style.left='520px'
        }
        if(this.offsetTop<'0'){
            this.style.top='0px'
        }
        if(this.offsetTop>'960'){
            this.style.top='960px'
        }//限制滑动范围
        if (flag == 1) {
            let bg2 = document.getElementById('bg2')
            bg2.style.visibility='visible'
            bg2.style.transform='scale(1)'
        }
        
    })
    box.addEventListener('touchend', function (e) {
        this.style.top='727px'
        this.style.left='275px'
        document.getElementById('ban').src = '../imgs/jia/ban.png'
    })

    let box1 = document.getElementById('jiazi')//夹子的事件
    let h1 = box1.offsetHeight, w1 = box1.offsetWidth
    // 夹子的滑动
    box1.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX
        startY = e.targetTouches[0].pageY
        x = this.offsetLeft
        y = this.offsetTop
        box1.style.height = h1 * 1.2 + 'px'
        box1.style.width = w1 * 1.2 + 'px'//点击放大
    })
    box1.addEventListener('touchmove', function (e) {
        let moveX = e.targetTouches[0].pageX - startX
        let moveY = e.targetTouches[0].pageY - startY
        this.style.left = x + moveX + 'px'//标签原先的位置加上滑动距离位移
        this.style.top = y + moveY + 'px'
        e.preventDefault()//防止页面默认滑动事件
        if(this.offsetLeft<'0'){
            this.style.left='0px'
        }
        else if(this.offsetLeft>'410'){
            this.style.left='410px'
        }
        else if(this.offsetTop<'0'){
            this.style.top='0px'
        }
        else if(this.offsetTop>'615'){
            this.style.top='615px'
        }//限制滑动范围
    })
    box1.addEventListener('touchend', function (e) {
        let text = document.getElementById('title_word')
        box1.style.height = h1 + 'px'
        box1.style.width = w1 + 'px'
        if(this.offsetLeft>'65'&&(this.offsetTop>'140'&&this.offsetTop<'360')){
            flag2++
            switch(flag2){
                case 1: document.getElementById('cloth').style.display='none'
                        document.getElementById('cloth1').style.display='block'
                        text.innerText='夹子(1/3)'
                        break
                case 2: 
                        document.getElementById('cloth1').style.display='none'
                        document.getElementById('cloth2').style.display='block'
                        text.innerText='夹子(2/3)'
                        break
                case 3:
                        document.getElementById('cloth2').style.display='none'
                        document.getElementById('cloth3').style.display='block'
                        text.innerText='请拖动染缸进行浸染'
                        break
            }
            box1.style.left='117px'
            box1.style.top='493px'
        }
        else{
            box1.style.left='117px'
            box1.style.top='493px' //手指离开屏幕则取消放大 
        }
    })
    let box2 = document.getElementById('gang')//染缸的事件
    let h2 = box2.offsetHeight, w2 = box2.offsetWidth
    //缸的滑动
    box2.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX
        startY = e.targetTouches[0].pageY
        x = this.offsetLeft
        y = this.offsetTop
        box2.style.height = h2 * 1.2 + 'px'
        box2.style.width = w2 * 1.2 + 'px'
    })
    box2.addEventListener('touchmove', function (e) {
        let moveX = e.targetTouches[0].pageX - startX
        let moveY = e.targetTouches[0].pageY - startY
        this.style.left = x + moveX + 'px'//标签原先的位置加上滑动距离位移
        this.style.top = y + moveY + 'px'
        e.preventDefault()//防止页面默认滑动事件
        if(this.offsetLeft<'0'){
            this.style.left='0px'
        }
        else if(this.offsetLeft>'403'){
            this.style.left='403px'
        }
        else if(this.offsetTop<'0'){
            this.style.top='0px'
        }
        else if(this.offsetTop>'615'){
            this.style.top='615px'
        }//限制滑动范围
    })
    box2.addEventListener('touchend', function (e) {
        box2.style.height = h2 + 'px'
        box2.style.width = w2 + 'px'
        if(this.offsetLeft>'65'&&(this.offsetTop>'140'&&this.offsetTop<'360')){
            document.getElementById('cloth4').style.display='block'
            document.getElementById('cloth3').style.display='none'
            box2.style.left='290px'
            box2.style.top='493px'   
            flag=2
            setTimeout(function cloth(){
                document.getElementById('cloth4').className='clo'
                document.getElementById('cloth5').className='clo2'
                document.getElementById('cloth5').style.opacity='1'
            },1000)
        box2.style.width='88px'
        box2.style.height='75px'
        }
        else{
            box2.style.left='290px'
            box2.style.top='493px'
        }
    })
}

function click1() {
    document.getElementById('vo').play()
    document.getElementById('ban').src = '../imgs/jia/ban2.png'
    document.getElementById('word').style.display = 'block'
    document.getElementById('bright').style.display = 'none'
}

function click2() {
    document.getElementById('ban').src = '../imgs/jia/ban.png'
    document.getElementById('word').style.display = 'none'
}

function clickRet() {
    document.getElementById('vo').play()
    document.getElementById('bg2').style.visibility = 'hidden'
    document.getElementById('bg2').style.transform = 'scale(0)'
    document.getElementById('ban2').style.display = 'none'//有光圈的布
    document.getElementById('ban').style.display = 'block'//没有光圈的布
    document.getElementById('ban').style.left = '275px'
    document.getElementById('ban').style.top = '727px'//重置布的摆放位置
    flag = 0
}

function clickRet2(){
    document.location.href='../html/index2.html'
}

let tag = -1
function music(){
    let audio=document.getElementById('vo2')
    console.log(tag)
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