let opc = 0, opc2 = 0
function init() {
    let f = document.getElementById('font')
    f.addEventListener('animationend',overAni,false)
}
function overAni(){
    setTimeout(function jump(){
        window.location.href = 'html/index2.html'
    },3000)
    
}
// function createWord() {
//     word1 = document.createElement('div')
//     word1.innerHTML = '指尖凝结 |'
//     document.body.appendChild(word1)
//     word1.className = 'word1'
//     word2 = document.createElement('div')
//     word2.innerHTML = '中国传统印染技艺'
//     document.body.appendChild(word2)
//     word2.className = 'word1'
//     word2.style.left = '350px'
//     word2.style.top = '330px'
// }
// setTimeout(function word1Animation() {
//     let wd1 = document.getElementsByClassName('word1')
//     wd1[0].style.opacity = opc1
//     opc1 += 0.1
//     if (opc1 >= 1) {
//         window.clearTimeout(word1Animation)
//     }
//     else {
//         window.setTimeout(word1Animation, 100)
//     }
// }, 1000) //控制‘指尖凝结’四个字先出现
// setTimeout(function word2Animation() {
//     let wd = document.getElementsByClassName('word1')
//     for (let i = 1; i < wd.length; i++) {
//         wd[i].style.opacity = opc2
//         opc2 += 0.1
//     }
//     if (opc2 >= 1) {
//         window.clearTimeout(word2Animation)
//         setTimeout(function shift() {
//             for (let i = 0; i < wd.length; i++) {
//                 wd[i].style.opacity = opc
//                 opc -= 0.1
//                 console.log(opc)
//             }
//             if (wd[1].style.opacity <= 0) {
//                 window.clearTimeout(shift)
//             }
//             else {
//                 window.setTimeout(shift, 100)
//             }
//         }, 4000)
//     }
//     else {
//         window.setTimeout(word2Animation, 100)
//     }
// }, 3000)
// setTimeout(function jump(){
//     // window.location.href = 'html/index2.html'
// },10000)

// setTimeout(function font(){
//     let f = document.getElementById('font')
    
//     f.style.opacity = opc
//     console.log(opc)
//     opc += 0.1
//     if (opc >= 1) {
//         window.clearTimeout(font)
//     }
//     else {
//         window.setTimeout(font, 70)
//     }
// },1000)