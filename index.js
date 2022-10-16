const container = document.querySelector('.container')
const score = document.querySelector('.score')
const timer = document.querySelector('.countdown')
const span = document.querySelector(".close")
const modal = document.querySelector(".modal")
const splash = document.querySelector('.endSplash')
const themeSong = new Audio('/sounds/star-wars-theme-song.mp3')
const vaderNo = new Audio('/sounds/no.mp3')
const vader = new Audio('/sounds/vaderIntro.mp3')
const trap = new Audio('/sounds/trap.wav')
const what = new Audio('/sounds/what.wav')
const force = new Audio('/sounds/forceBeWithYou.mp3')
const r2d2 = new Audio('/sounds/r2d2.mp3')
const battle = new Audio('/sounds/battle_sfx.wav')
const chewy = new Audio('/sounds/chewy.wav')

themeSong.play()
vader.play()

function randomFighters() {
  const randomNum = Math.floor(Math.random() * 9 + 1)
  const randMole = document.querySelector(`.hole${randomNum}`)
  const randomFighter = Math.floor(Math.random() * 11 + 1)
  if (randomFighter < 5) {
    randMole.src = 'images/tie_fighter1.webp'
  } else if (randomFighter < 9 && randomFighter > 4) {
    randMole.src = 'images/tie_fighter2.webp'
  } else if (randomFighter == 10) {
    randMole.src = 'images/darth.webp'
  } else if (randomFighter == 11) {
    randMole.src = 'images/xwing.webp'
  }
}

const intervalAdd = setInterval(randomFighters, 250)

function removeFighters() {
  const randomNum = Math.floor(Math.random() * 9 + 1)
  const randMole = document.querySelector(`.hole${randomNum}`)
  randMole.src = 'images/hole.png'
}

const intervalRemove = setInterval(removeFighters, 400)


var count = 0
container.addEventListener('click', function (e) {
  if (e.target.src === `${e.target.baseURI}images/tie_fighter1.webp`) {
    e.target.src = `${e.target.baseURI}images/hole.png`
    count++
    const pew = new Audio('/sounds/pew.mp3')
    pew.play()

  } else if (e.target.src === `${e.target.baseURI}images/tie_fighter2.webp`) {
    e.target.src = `${e.target.baseURI}images/hole.png`
    count++
    const pew = new Audio('/sounds/pew.mp3')
    pew.play()

  } else if (e.target.src === `${e.target.baseURI}images/darth.webp`) {
    e.target.src = `${e.target.baseURI}images/hole.png`
    count += 10
    const pew = new Audio('/sounds/pew.mp3')
    pew.play()
    vaderNo.play()

  } else if (e.target.src === `${e.target.baseURI}images/xwing.webp`) {
    e.target.src = `${e.target.baseURI}images/hole.png`
    count -= 10
    const pew = new Audio('/sounds/pew.mp3')
    pew.play()
    const luke = new Audio('/sounds/luke.mp3')
    luke.play()
  }
  score.textContent = `Score: ${count}`
})

let timeleft = 20;
let countdown = setInterval(function () {
  if (timeleft <= 0) {
    clearInterval(countdown);
    themeSong.pause()
    timer.innerHTML = `Time Left: 0`;
    modal.style.display = 'block'
    force.play()
    splash.innerHTML = `Rebel Scum! Your Score: ${count}`
  } else if (timeleft==18){
    trap.play()
    timer.innerHTML = `Time Left: ${timeleft}`
  } else if (timeleft ==16){
    what.play()
    timer.innerHTML = `Time Left: ${timeleft}`
  }else if (timeleft == 14){
    r2d2.play()
    timer.innerHTML = `Time Left: ${timeleft}`
  }else if (timeleft == 12){
    battle.play()
    timer.innerHTML = `Time Left: ${timeleft}`
  }else if (timeleft == 6){
    chewy.play()
    timer.innerHTML = `Time Left: ${timeleft}`
  }else {
    timer.innerHTML = `Time Left: ${timeleft}`;
  }
  timeleft -= 1;
}, 1000);

span.onclick = function () {
  modal.style.display = "none";
  location.reload();
}
