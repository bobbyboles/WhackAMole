const container = document.querySelector('.container')
const score = document.querySelector('.score')
const timer = document.querySelector('.countdown')
const span = document.querySelector(".close")
const modal = document.querySelector(".modal")
const splash = document.querySelector('.endSplash')



function startingMoles() {
  const randomStart = Math.floor(Math.random() * 3 + 1)
  for (let i = 0; i < randomStart; i++) {
    const randomNum = Math.floor(Math.random() * 9 + 1)
    const randMole = document.querySelector(`.hole${randomNum}`)
    randMole.src = 'images/mole.png'
  }
}

function randMoles() {
  const randomNum = Math.floor(Math.random() * 9 + 1)
  const randMole = document.querySelector(`.hole${randomNum}`)
  randMole.src = 'images/mole.png'
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
  console.log(e)
  console.log(e.target.baseURI)
  if (e.target.src === `${e.target.baseURI}images/mole.png`) {
    e.target.src = `${e.target.baseURI}images/hole.png`
    count++
  }
  score.textContent = count
})

let timeleft = 20;
let countdown = setInterval(function () {
  if (timeleft <= 0) {
    clearInterval(countdown);
    timer.innerHTML = 0;
    modal.style.display = 'block'
    splash.innerHTML = `Wow! You clobbered ${count} Moles!`

  } else {
    timer.innerHTML = timeleft;
  }
  timeleft -= 1;
}, 1000);



span.onclick = function () {
  modal.style.display = "none";
  location.reload();
}
