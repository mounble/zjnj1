let startX = 0
let startY = 0
let x = 0, y = 0, flag = 0
let temp=0
function init() {
    let box = document.getElementById('kun')
    box.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX
        startY = e.targetTouches[0].pageY
        x = this.offsetLeft
        y = this.offsetTop
        box.src = '../imgs/zaran/a1.png'
    })
    box.addEventListener('touchmove', function (e) {
        let moveX = e.targetTouches[0].pageX - startX
        let moveY = e.targetTouches[0].pageY - startY
        this.style.left = x + moveX + 'px'
        this.style.top = y + moveY + 'px'
        e.preventDefault()
        if(this.offsetLeft<'-7'){
            this.style.left='-7px'
        }
        if(this.offsetLeft>'570'){
            this.style.left='570px'
        }
        if(this.offsetTop<'-3'){
            this.style.top='-3px'
        }
        if(this.offsetTop>'968'){
            this.style.top='968px'
        }//限制滑动范围
        
        if (this.offsetLeft >= '420' && (this.offsetTop > '200' && this.offsetTop < '380')) {
            document.getElementById('kun').style.display = 'none'
            document.getElementById('kun2').style.display = 'block'
            document.getElementById('word').style.display = 'none'
            flag = 1
        }
        if (flag == 1) {
            document.getElementById('window').style.transform = 'scale(1)'
            document.getElementById('window').style.visibility = 'visible'
        }
    })
    box.addEventListener('touchend', function (e) {
        box.style.left = '80px'
        box.style.top = '674px'
        box.src = '../imgs/zaran/k1.png'
    })
    let box2 = document.getElementById('rope')
    box2.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX
        startY = e.targetTouches[0].pageY
        x = this.offsetLeft
        y = this.offsetTop
    })
    box2.addEventListener('touchmove', function (e) {
        let cloth = document.getElementById('cloth')
        let moveX = e.targetTouches[0].pageX - startX
        let moveY = e.targetTouches[0].pageY - startY
        this.style.left = x + moveX + 'px'
        this.style.top = y + moveY + 'px'
        e.preventDefault()
        console.log(this.offsetLeft,this.offsetTop)
        if(this.offsetLeft<'-120'){
            this.style.left='-120px'
        }
        if(this.offsetLeft>'465'){
            this.style.left='465px'
        }
        if(this.offsetTop<'-640'){
            this.style.top='-640px'
        }
        if(this.offsetTop>'340'){
            this.style.top='340px'
        }//限制滑动范围
    })
    box2.addEventListener('touchend', function (e) {
        e.preventDefault()
        if((this.offsetLeft>'65'&&this.offsetLeft<'270')&&(this.offsetTop>'-245'&&this.offsetTop<'-60')){
            this.style.left='79px'
            this.style.top='40px'
            document.getElementById('title_word').innerText='拖动染缸'
            switch(temp){
                case 1:
                    cloth.src='../imgs/zaran/k1.png'
                    cloth.style.width='150px'
                    cloth.style.height='140px'
                    break
                case 2:
                    cloth.src='../imgs/zaran/k2.png'
                    break
                case 3:
                    cloth.src='../imgs/zaran/k3.png'
                    break
                case 4:
                    cloth.src='../imgs/zaran/k4.png'
                    cloth.style.width='80px'
                    cloth.style.height='170px'
                    break
                default:
                    break
            }
            box2.style.top='40px'
            box2.style.left='79px'
        }
        else{
            box2.style.top='40px'
            box2.style.left='79px'
        }
    })
    let box3 = document.getElementById('gang')
    box3.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX
        startY = e.targetTouches[0].pageY
        x = this.offsetLeft
        y = this.offsetTop
    })
    box3.addEventListener('touchmove', function (e) {
        let moveX = e.targetTouches[0].pageX - startX
        let moveY = e.targetTouches[0].pageY - startY
        this.style.left = x + moveX + 'px'//标签原先的位置加上滑动距离位移
        this.style.top = y + moveY + 'px'
        console.log(this.offsetLeft,this.offsetTop)
        e.preventDefault()//防止页面默认滑动事件
        if(this.offsetLeft<'-147'){
            this.style.left='-147px'
        }
        if(this.offsetLeft>'450'){
            this.style.left='450px'
        }
        if(this.offsetTop<'-653'){
            this.style.top='-653px'
        }
        if(this.offsetTop>'335'){
            this.style.top='335px'
        }//限制滑动范围
    })
    box3.addEventListener('touchend', function (e) {
        if((this.offsetLeft>'65'&&this.offsetLeft<'270')&&(this.offsetTop>'-245'&&this.offsetTop<'-60')){
            document.getElementById('cloth').style.display='none'
            document.getElementById('cloth2').style.display='block'
            box3.style.left='238px'
            box3.style.top='32px'
        }
        else{
            box3.style.left='238px'
            box3.style.top='32px'
        }
    })
}
function click1() {
    document.getElementById('vo').play()
    document.getElementById('kun').src = '../imgs/zaran/a1.png'
    document.getElementById('word').style.display = 'block'
    document.getElementById('bright').style.display = 'none'
}

function click2() {//点击背景消除效果
    document.getElementById('kun').src = '../imgs/zaran/k1.png'
    document.getElementById('word').style.display = 'none'
}

function back() {
    document.getElementById('vo').play()
    document.getElementById('kun').style.display = 'block'
    document.getElementById('kun2').style.display = 'none'
    flag = 0
    document.getElementById('kun').style.left = '80px'
    document.getElementById('kun').style.top = '674px'
    document.getElementById('window').style.visibility = 'none'
    document.getElementById('window').style.transform = 'scale(0)'
}

function but(e,id) {
    temp=id
    document.getElementById('vo').play()
    let but = document.getElementsByClassName('type')
    for(let i=0;i<but.length;i++){
        but[i].src='../imgs/zaran/k'+(i+1)+'.png'
    }
    e.src='../imgs/zaran/a'+id+'.png'
}

function click3(){
    console.log(temp)
    document.getElementById('vo').play()
    document.getElementById('window').style.display='none'
    document.getElementById('cloth').style.display='block'
    document.getElementById('btn').style.display='block'
    document.getElementById('next').style.visibility='visible'
    document.getElementById('window2').style.visibility='visible'
}
function back2(){
    document.getElementById('window2').style.visibility='hidden'
    document.getElementById('cloth').style.display='none'
    document.getElementById('cloth2').style.display='none'
    document.getElementById('cloth').style.width='200px'
    document.getElementById('cloth').style.height='200px'
    document.getElementById('cloth').src='../imgs/jia/cloth.png'
    document.getElementById('title_word').innerText='拖动绳子到布的位置'
    document.getElementById('window').style.display='block'

}

function clickRet2(){
    document.location.href='../html/index2.html'
}

let tag = -1
function music(){
    let audio=document.getElementById('vo2')
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

