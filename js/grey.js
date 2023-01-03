let startX = 0
let startY = 0
let x = 0, y = 0,flag=0

function init() {
    let box = document.getElementById('pen')
    box.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX
        startY = e.targetTouches[0].pageY
        x = this.offsetLeft
        y = this.offsetTop
        box.src = '../imgs/pen.png'
    })
    box.addEventListener('touchmove', function (e) {
        let moveX = e.targetTouches[0].pageX - startX
        let moveY = e.targetTouches[0].pageY - startY
        this.style.left = x + moveX + 'px'
        this.style.top = y + moveY + 'px'
        console.log(this.offsetTop, this.offsetLeft)
        e.preventDefault()
        if (this.offsetLeft >= '420' && (this.offsetTop > '200' && this.offsetTop < '380')) {
            document.getElementById('pen').style.display = 'none'
            document.getElementById('pen2').style.display = 'block'
			document.getElementById('pen1').style.display = 'none'
            flag1=1
        }
    })
    box.addEventListener('touchend', function (e) {
        box.src = '../imgs/pen.png'
    })
}
function click1(){
	document.getElementById('pen1').style.display = 'block'
}

function init1() {
    let box = document.getElementById('paint')
    box.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX
        startY = e.targetTouches[0].pageY
        x = this.offsetLeft
        y = this.offsetTop
        box.src = '../imgs/paint(1).png'
    })
    box.addEventListener('touchmove', function (e) {
        let moveX = e.targetTouches[0].pageX - startX
        let moveY = e.targetTouches[0].pageY - startY
        this.style.left = x + moveX + 'px'
        this.style.top = y + moveY + 'px'
        console.log(this.offsetTop, this.offsetLeft)
        e.preventDefault()
        if (this.offsetLeft >= '420' && (this.offsetTop > '200' && this.offsetTop < '380')) {
            document.getElementById('paint').style.display = 'none'
            document.getElementById('paint2').style.display = 'block'
			document.getElementById('paint1').style.display = 'none'
            flag2=1
        }
    })
    box.addEventListener('touchend', function (e) {
        box.src = '../imgs/paint(1).png'
    })
}
function click2(){
	document.getElementById('paint1').style.display = 'block'
}

function init2() {
    let box = document.getElementById('vat')
    box.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX
        startY = e.targetTouches[0].pageY
        x = this.offsetLeft
        y = this.offsetTop
        box.src = '../imgs/vat(1).png'
    })
    box.addEventListener('touchmove', function (e) {
        let moveX = e.targetTouches[0].pageX - startX
        let moveY = e.targetTouches[0].pageY - startY
        this.style.left = x + moveX + 'px'
        this.style.top = y + moveY + 'px'
        console.log(this.offsetTop, this.offsetLeft)
        e.preventDefault()
        if (this.offsetLeft >= '420' && (this.offsetTop > '200' && this.offsetTop < '380')) {
            document.getElementById('vat').style.display = 'none'
            document.getElementById('vat2').style.display = 'block'
            flag3=1
        }
    })
    box.addEventListener('touchend', function (e) {
        box.src = '../imgs/vat(1).png'
    })
}
function skip1(){
	if(flag1==1 && flag2==1 && flag3==1){
		document.getElementById('quit').style.display = 'block'
	}
}
function skip2(){
	if(flag1==1 && flag2==1 && flag3==1){
	window.location.href="../html/灰1.html";
	}
	else{
		alert("还欠缺工具");
	}
}