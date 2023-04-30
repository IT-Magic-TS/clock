const clock = document.querySelector('.clock')
const minEl = document.querySelector('.min')
const secEl = document.querySelector('.sec')
const hourEl = document.querySelector('.hour')

const btnBlue = document.getElementById('btn-blue')
const btnGreen = document.getElementById('btn-green')
const btnBrick = document.getElementById('btn-brick')
const btnRed = document.getElementById('btn-red')
const btnBrown = document.getElementById('btn-brown')
const btnSand = document.getElementById('btn-sand')
const btnBrick2 = document.getElementById('btn-brick2')
const btnBlack = document.getElementById('btn-black')

const clockImg = clock.firstElementChild

btnBlue.addEventListener('click', () => clockImg.src = './imgs/clock-blue.png')
btnGreen.addEventListener('click', () => clockImg.src = './imgs/clock-green.png')
btnBrick.addEventListener('click', () => clockImg.src = './imgs/clock-brick.png')
btnRed.addEventListener('click', () => clockImg.src = './imgs/clock-red.png')
btnBrown.addEventListener('click', () => clockImg.src = './imgs/clock-brown.png')
btnSand.addEventListener('click', () => clockImg.src = './imgs/clock-sand.png')
btnBrick2.addEventListener('click', () => clockImg.src = './imgs/clock-bricks2.png')
btnBlack.addEventListener('click', () => clockImg.src = './imgs/clock-black.png')

setInterval(() => {
  const date = new Date

  const h = date.getHours()
  const min = date.getMinutes()
  const sec = date.getSeconds()

  let difH = 0
  let difMin = 0

  if (min === 60) {
    difH = 0
  } else {
    difH = min / 2
  }

  if (sec === 60) {
    difMin = 0
  } else {
    difMin = sec / 12
  }

  const secDeg = sec / 60 * 360
  const minDeg = min / 60 * 360 - 92 + difMin
  const hoursDeg = h / 12 * 360 - 90 + difH
  secEl.style.transform = `rotate(${secDeg}deg)`
  minEl.style.transform = `rotate(${minDeg}deg)`
  hourEl.style.transform = `rotate(${hoursDeg}deg)`
}, 1000)