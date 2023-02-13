let startX = 0
let startY = 0
let x1 = 0,x2 = 0
let x = 0, y = 0,flag=0


function init() {
    let box = document.getElementById('pen')
    box.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX
        startY = e.targetTouches[0].pageY
        x = this.offsetLeft
        y = this.offsetTop
        box.src = '../imgs/grey/pen(2).png'
    })
    box.addEventListener('touchmove', function (e) {
        let moveX = e.targetTouches[0].pageX - startX
        let moveY = e.targetTouches[0].pageY - startY
        this.style.left = x + moveX + 'px'
        this.style.top = y + moveY + 'px'
        console.log(this.offsetTop, this.offsetLeft)
        e.preventDefault()
        if (this.offsetLeft >= '420' && (this.offsetTop > '200' && this.offsetTop < '380')) {
            document.getElementById('pen2').style.display = 'block'
			document.getElementById('pen1').style.display = 'none'
			document.getElementById('penb').style.display = 'none'
			this.style.left = x + 'px'
			this.style.top = y + 'px'
			document.getElementById('penb').style.display = 'none'
            flag1=1
        }
    })
    box.addEventListener('touchend', function (e) {
        box.src = '../imgs/grey/pen(2).png'
		if(flag1==1 && flag2==1){
		document.getElementById('workbench').style.display = 'block'
		document.getElementById('wpen').style.display = 'block'
		document.getElementById('wpaint').style.display = 'block'
		document.getElementById('wvat').style.display = 'block'
		document.getElementById('return').style.display = 'block'
			flag1 = 0
			flag2 = 0
	}
    })
}
function click1(){
	document.getElementById('vo').play()
	document.getElementById('pen1').style.display = 'block'
}

let tag = -1
function music(){
    let audio=document.getElementById('vo2')
    tag=-tag
    console.log(tag)
    if(tag==1){
        audio.play()
        document.getElementById('control').src='../imgs/control.png'
    }
    else{
        audio.pause()
        document.getElementById('control').src='../imgs/pause.png'
    }
}

function init1() {
    let box = document.getElementById('paint')
    box.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX
        startY = e.targetTouches[0].pageY
        x = this.offsetLeft
        y = this.offsetTop
        box.src = '../imgs/grey/paint(2).png'
    })
    box.addEventListener('touchmove', function (e) {
        let moveX = e.targetTouches[0].pageX - startX
        let moveY = e.targetTouches[0].pageY - startY
        this.style.left = x + moveX + 'px'
        this.style.top = y + moveY + 'px'
        console.log(this.offsetTop, this.offsetLeft)
        e.preventDefault()
        if (this.offsetLeft >= '420' && (this.offsetTop > '200' && this.offsetTop < '380')) {
            document.getElementById('paint2').style.display = 'block'
			document.getElementById('paint1').style.display = 'none'
			document.getElementById('paintb').style.display = 'none'
            flag2=1
			this.style.left = x + 'px'
			this.style.top = y + 'px'
			document.getElementById('paintb').style.display = 'none'
			
        }
    })
    box.addEventListener('touchend', function (e) {
        box.src = '../imgs/grey/paint(2).png'
		if(flag1==1 && flag2==1){
			document.getElementById('workbench').style.display = 'block'
			document.getElementById('wpen').style.display = 'block'
			document.getElementById('wpaint').style.display = 'block'
			document.getElementById('wvat').style.display = 'block'
			document.getElementById('return').style.display = 'block'
			flag1 = 0
			flag2 = 0
	}
    })
}
function click2(){
	document.getElementById('vo').play()
	document.getElementById('paint1').style.display = 'block'
}
function click3(){
	document.getElementById('vo').play()
	document.getElementById('paint1').style.display = 'none'
	document.getElementById('pen1').style.display = 'none'
	
}
function wpen1() {
    let box = document.getElementById('wpen')
    box.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX
        startY = e.targetTouches[0].pageY
        x = this.offsetLeft
        y = this.offsetTop
        box.src = '../imgs/grey/pen(1).png'
    })
    box.addEventListener('touchmove', function (e) {
        let moveX = e.targetTouches[0].pageX - startX
        let moveY = e.targetTouches[0].pageY - startY
        this.style.left = x + moveX + 'px'
        this.style.top = y + moveY + 'px'
        console.log(this.offsetTop, this.offsetLeft)
        e.preventDefault()
        if (this.offsetLeft>'135'&&(this.offsetTop>'445'&&this.offsetTop<'620')) {
            document.getElementById('stage1').style.display = 'block'
			document.getElementById('stage2').style.display = 'none'
			document.getElementById('stage3').style.display = 'none'
			this.style.left = x + 'px'
			this.style.top = y + 'px'
        }
    })
    box.addEventListener('touchend', function (e) {
        box.src = '../imgs/grey/pen(1).png'
    })
}
function wpaint1() {
    let box = document.getElementById('wpaint')
    box.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX
        startY = e.targetTouches[0].pageY
        x = this.offsetLeft
        y = this.offsetTop
        box.src = '../imgs/grey/paint(1).png'
    })
    box.addEventListener('touchmove', function (e) {
        let moveX = e.targetTouches[0].pageX - startX
        let moveY = e.targetTouches[0].pageY - startY
        this.style.left = x + moveX + 'px'
        this.style.top = y + moveY + 'px'
        console.log(this.offsetTop, this.offsetLeft)
        e.preventDefault()
        if (this.offsetLeft>'135'&&(this.offsetTop>'445'&&this.offsetTop<'620')) {
            document.getElementById('stage2').style.display = 'block'
			document.getElementById('stage3').style.display = 'none'
			document.getElementById('stage1').style.display = 'none'
			this.style.left = x + 'px'
			this.style.top = y + 'px'
        }
    })
    box.addEventListener('touchend', function (e) {
        box.src = '../imgs/grey/paint(1).png'
    })
}
function wvat1() {
    let box = document.getElementById('wvat')
    box.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX
        startY = e.targetTouches[0].pageY
        x = this.offsetLeft
        y = this.offsetTop
        box.src = '../imgs/grey/vat(1).png'
    })
    box.addEventListener('touchmove', function (e) {
        let moveX = e.targetTouches[0].pageX - startX
        let moveY = e.targetTouches[0].pageY - startY
        this.style.left = x + moveX + 'px'
        this.style.top = y + moveY + 'px'
        console.log(this.offsetTop, this.offsetLeft)
        e.preventDefault()
        if (this.offsetLeft>'135'&&(this.offsetTop>'445'&&this.offsetTop<'620')) {
            document.getElementById('stage3').style.display = 'block'
			document.getElementById('stage2').style.display = 'none'
			document.getElementById('stage1').style.display = 'none'
			this.style.left = x + 'px'
			this.style.top = y + 'px'
        }
    })
    box.addEventListener('touchend', function (e) {
        box.src = '../imgs/grey/vat(1).png'
    })
}
function return1(){
		document.getElementById('vo').play()
		document.getElementById('workbench').style.display = 'none'
		document.getElementById('stage3').style.display = 'none'
		document.getElementById('stage2').style.display = 'none'
		document.getElementById('stage1').style.display = 'none'
		document.getElementById('wpen').style.display = 'none'
		document.getElementById('wpaint').style.display = 'none'
		document.getElementById('wvat').style.display = 'none'
		document.getElementById('pen2').style.display = 'none'
		document.getElementById('return').style.display = 'none'
		document.getElementById('paint2').style.display = 'none'
		document.getElementById('paint').style.display = 'block'
		document.getElementById('pen').style.display = 'block'
		document.getElementById('paintb').style.display = 'block'
		document.getElementById('penb').style.display = 'block'
}
function ret(){
	window.location.href="../html/index2.html";
}
