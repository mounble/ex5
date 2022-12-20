let startX = 0
let startY = 0
let x = 0, y = 0,flag=0

function init() {
    let box = document.getElementById('kun')
    box.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX
        startY = e.targetTouches[0].pageY
        x = this.offsetLeft
        y = this.offsetTop
        box.src = '../imgs/zaran/kun2.png'
    })
    box.addEventListener('touchmove', function (e) {
        let moveX = e.targetTouches[0].pageX - startX
        let moveY = e.targetTouches[0].pageY - startY
        this.style.left = x + moveX + 'px'
        this.style.top = y + moveY + 'px'
        console.log(this.offsetTop, this.offsetLeft)
        e.preventDefault()
        if (this.offsetLeft >= '420' && (this.offsetTop > '200' && this.offsetTop < '380')) {
            document.getElementById('kun').style.display = 'none'
            document.getElementById('kun2').style.display = 'block'
            flag=1
        }
        if(flag==1){
            document.getElementById('bg2').style.display='block'
        }
    })
    box.addEventListener('touchend', function (e) {
        box.src = '../imgs/zaran/kun.png'
    })
}
function click1() {
    document.getElementById('kun').src = '../imgs/zaran/kun2.png'
    document.getElementById('word').style.display = 'block'
}

function click2() {//点击背景消除效果
    document.getElementById('kun').src = '../imgs/zaran/kun.png'
    document.getElementById('word').style.display = 'none'
}

