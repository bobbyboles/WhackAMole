const container = document.querySelector('.container')
const score = document.querySelector('.score')
const timer = document.querySelector('.countdown')
const span = document.querySelector(".close")
const modal = document.querySelector(".modal")
const splash = document.querySelector('.endSplash')
const themeSong = new Audio('star-wars-theme-song.mp3')
const vaderNo = new Audio('no.mp3')
const vader = new Audio('vaderIntro.mp3')

themeSong.play()
vader.play()

function startingMoles() {
  const randomStart = Math.floor(Math.random() * 3 + 1)
  for (let i = 0; i < randomStart; i++) {
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
}

function randMoles() {
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

const intervalMole = setInterval(randMoles, 250)

function removeMoles() {
  const randomNum = Math.floor(Math.random() * 9 + 1)
  const randMole = document.querySelector(`.hole${randomNum}`)
  randMole.src = 'images/hole.png'
}

const intervalRemove = setInterval(removeMoles, 400)

startingMoles()

var count = 0
container.addEventListener('click', function (e) {
  if (e.target.src === `${e.target.baseURI}images/tie_fighter1.webp`) {
    e.target.src = `${e.target.baseURI}images/hole.png`
    count++
    const pew = new Audio('pew.mp3')
    pew.play()
  } else if (e.target.src === `${e.target.baseURI}images/tie_fighter2.webp`) {
    e.target.src = `${e.target.baseURI}images/hole.png`
    count++
    const pew = new Audio('pew.mp3')
    pew.play()

  } else if (e.target.src === `${e.target.baseURI}images/darth.webp`) {
    e.target.src = `${e.target.baseURI}images/hole.png`
    count += 10
    const pew = new Audio('pew.mp3')
    pew.play()
    vaderNo.play()

  } else if (e.target.src === `${e.target.baseURI}images/xwing.webp`) {
    e.target.src = `${e.target.baseURI}images/hole.png`
    count -= 10
    const pew = new Audio('pew.mp3')
    pew.play()
    const luke = new Audio('luke.mp3')
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
    const force = new Audio('forceBeWithYou.mp3')
    force.play()
    splash.innerHTML = `Rebel Scum! Your Score: ${count}`
  } else {
    timer.innerHTML = `Time Left: ${timeleft}`;
  }
  timeleft -= 1;
}, 1000);



span.onclick = function () {
  modal.style.display = "none";
  location.reload();
}
