const container = document.querySelector('.container')
const score = document.querySelector('.score')
const timer = document.querySelector('.countdown')

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
  if (randMole.src ==="http://127.0.0.1:5501/images/mole.png" ) {
    randMoles()
  } else {
    randMole.src = 'images/mole.png'
  }
}

startingMoles()

let count = 0
container.addEventListener('click', function (e) {
  console.log(e)
  if (e.target.src === "http://127.0.0.1:5501/images/mole.png") {
    randMoles()
    e.target.src = "http://127.0.0.1:5501/images/hole.png"
    count++
  }
  score.textContent = count
})


