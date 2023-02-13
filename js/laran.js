let startX = 0
let startY = 0
let x = 0, y = 0, flag1 = 0, flag2 = 0, k = 0
function init(item) {
    let box = document.getElementById(item)
    box.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX
        startY = e.targetTouches[0].pageY
        x = this.offsetLeft
        y = this.offsetTop
        box.src = '../imgs/laran/' + item + '.png'
    })
    box.addEventListener('touchmove', function (e) {
        if (item == "la") {
            document.getElementById("intro1").style.display = "none"
            document.getElementById("shadow1").style.display = "none"
        }
        if (item == "soybean") {
            document.getElementById("intro2").style.display = "none"
            document.getElementById("shadow2").style.display = "none"
        }
        let moveX = e.targetTouches[0].pageX - startX
        let moveY = e.targetTouches[0].pageY - startY
        this.style.left = x + moveX + 'px'
        this.style.top = y + moveY + 'px'
        console.log(this.offsetTop, this.offsetLeft)
        e.preventDefault()
        if (this.offsetLeft >= '420' && (this.offsetTop > '120' && this.offsetTop < '380')) {
            document.getElementById(item).style.display = 'none'
            document.getElementById(item + '2').style.display = 'block'
            if (item == "la") {
                flag1 = 1
                document.getElementById("intro1").style.display = "none"
            }
            if (item == "soybean") {
                flag2 = 1
                document.getElementById("intro2").style.display = "none"
            }
        }
    })
    box.addEventListener('touchend', function (e) {
        box.src = '../imgs/laran/' + item + '.png'
        this.style.left = x + 'px'
        this.style.top = y + 'px'

    })
    if (flag1 == 1 && flag2 == 1) {
        change()
        k = 1
    }
}

function click1() {
    document.getElementById('vo').play()
    document.getElementById("intro1").style.display = "block"
}
function click2() {
    document.getElementById('vo').play()
    document.getElementById("intro2").style.display = "block"
}
function click3(){
    document.getElementById('vo').play()
    document.getElementById('intro1').style.display = 'none'
    document.getElementById('intro2').style.display = 'none'
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

function init_2(item) {
    let box = document.getElementById(item + "3")
    box.addEventListener('touchstart', function (e) {
        box.style.opacity = "100%"
        startX = e.targetTouches[0].pageX
        startY = e.targetTouches[0].pageY
        x = this.offsetLeft
        y = this.offsetTop
        box.src = '../imgs/laran/' + item + '.png'
    })
    box.addEventListener('touchmove', function (e) {
        let moveX = e.targetTouches[0].pageX - startX
        let moveY = e.targetTouches[0].pageY - startY
        this.style.left = x + moveX + 'px'
        this.style.top = y + moveY + 'px'
        console.log(this.offsetTop, this.offsetLeft)
        e.preventDefault()
        if ((this.offsetLeft >= '200' && this.offsetLeft < '350') && (this.offsetTop > '350' && this.offsetTop < '500')) {
            if (k == 1 && item == 'la') {
                document.getElementById("handle").src = '../imgs/laran/操作2.png'
                k = 2
                document.getElementById(item + '3').style.display = 'none'
            }
            if (k == 2 && item == 'soybean') {
                document.getElementById("handle").src = '../imgs/laran/操作3.png'
                k = 3
                document.getElementById(item + '3').style.display = 'none'
            }
            if (k == 3 && item == 'vat') {
                document.getElementById("handle").src = '../imgs/laran/成品.png'
                k = 4
                document.getElementById(item + '3').style.display = 'none'
            }
        }
    })
    box.addEventListener('touchend', function (e) {
        box.src = '../imgs/laran/' + item + '.png'
        this.style.left = x + 'px'
        this.style.top = y + 'px'
        box.style.opacity = "0%"
    })
}

function change() {
    document.getElementById("taskbar").style.opacity = "0%"

    document.getElementById("la2").style.display = "none"
    document.getElementById("soybean2").style.display = "none"

    document.getElementById("handle").style.display = "block"
    document.getElementById("handle").style.opacity = "100%"
    document.getElementById("bt_return").style.display = "block"

    document.getElementById("soybean3").style.display = "block"
    document.getElementById("la3").style.display = "block"
    document.getElementById("vat3").style.display = "block"
}

function click_return_this() {
    //返回键 
    document.getElementById('vo').play()
    document.getElementById("la").style.display = "block"
    document.getElementById("soybean").style.display = "block"
    document.getElementById("shadow1").style.display = "block"
    document.getElementById("shadow2").style.display = "block"
    document.getElementById("taskbar").style.opacity = "100%"
    document.getElementById("handle").style.display = "none"
    flag1=0
    flag2=0
    document.getElementById("handle").src = '../imgs/laran/操作1.png'
    document.getElementById("bt_return").style.display = "none"
    k=0
}
function click_return_index() {
    //返回键 
    document.getElementById('vo').play()
    window.location.href = "../html/index2.html"
}
