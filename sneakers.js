
outtput = document.querySelector('#output')
var increment = document.querySelector('#increment')
increment.addEventListener('click', increase)
var decrement = document.querySelector('#decrement')
decrement.addEventListener('click', decrease)


var pic = document.querySelector('#pic')

pic.addEventListener('click', firstSneaker)




function firstSneaker() {
    document.querySelector('#shoe').src = 'pic1.jpg'
    document.querySelector('#price').innerHTML = '<p>$125.00 <span>50%</span></p>'
    document.querySelector('#money').innerText = '$250.00'

}


var secondPic = document.querySelector('#second-pic')
secondPic.addEventListener('click', secondSneaker)

function secondSneaker() {
    document.querySelector('#shoe').src = 'pic2.jpg'
    document.querySelector('#price').innerHTML = '<p>$150.00 <span>50%</span></p>'
    document.querySelector('#money').innerText = '$300.00'

}


var thirdPic = document.querySelector('#third-pic')
thirdPic.addEventListener('click', thirdSneaker)

function thirdSneaker() {
    document.querySelector('#shoe').src = 'pic3.jpg'
    document.querySelector('#price').innerHTML = '<p>$100.00 <span>50%</span></p>'
    document.querySelector('#money').innerText = '$200.00'
}


var fourthPic = document.querySelector('#fourth-pic')
fourthPic.addEventListener('click', fourthSneaker)

function fourthSneaker() {
    document.querySelector('#shoe').src = 'pic4.jpg'
    document.querySelector('#price').innerHTML = '<p>$100.00 <span>50%</span></p>'
    document.querySelector('#money').innerText = '$200.00'
}






var count = 0

function increase() {
    count++
    output.innerText = count
}

function decrease() {
    count--
    output.innerText = count
}


var navigate = document.getElementById('navigate')
var menu = document.getElementById('menu')
menu.addEventListener('click', function () {


    navigate.classList.toggle('show')
})
