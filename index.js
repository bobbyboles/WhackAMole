// setting variables for classes

const container = document.querySelector('.container')
const score = document.querySelector('.score')
const timer = document.querySelector('.countdown')
const span = document.querySelector(".close")
const modal = document.querySelector(".modal")
const splash = document.querySelector('.endSplash')

// setting variables for sounds

const themeSong = new Audio('/sounds/star-wars-theme-song.mp3')
const vaderNo = new Audio('/sounds/no.mp3')
const vader = new Audio('/sounds/vaderIntro.mp3')
const trap = new Audio('/sounds/trap.wav')
const what = new Audio('/sounds/what.wav')
const force = new Audio('/sounds/forceBeWithYou.mp3')
const r2d2 = new Audio('/sounds/r2d2.mp3')
const battle = new Audio('/sounds/battle_sfx.wav')
const chewy = new Audio('/sounds/chewy.wav')

// playing the theme song and vaders intro on load

themeSong.play()
vader.play()


/*Function creates two random numbers, one for the random space class
and the other for the random fighter spawn and assigns the random fighter to the random 
space class*/

function randomFighters() {
  const randomNum = Math.floor(Math.random() * 9 + 1)
  const randomSpace = document.querySelector(`.space${randomNum}`)
  const randomFighter = Math.floor(Math.random() * 11 + 1)
  if (randomFighter < 5) {
    randomSpace.src = 'images/tie_fighter1.webp'
  } else if (randomFighter < 9 && randomFighter > 4) {
    randomSpace.src = 'images/tie_fighter2.webp'
  } else if (randomFighter == 10) {
    randomSpace.src = 'images/darth.webp'
  } else if (randomFighter == 11) {
    randomSpace.src = 'images/xwing.webp'
  }
}

// Interval for randomFighters so there is always fighters to shoot

const intervalAdd = setInterval(randomFighters, 250)

/* Function creates a random number and assigns it to a random space class
then sets the source of the image to an empty string*/

function removeFighters() {
  const randomNum = Math.floor(Math.random() * 9 + 1)
  const randomSpace = document.querySelector(`.space${randomNum}`)
  randomSpace.src = ''
}

//Interval for removing fighters so fighters pop in and out of the game

const intervalRemove = setInterval(removeFighters, 400)

/*Count is global for Modal later in the script*/

var count = 0

/*Listener on the container of fighters with control flow dictating what happens when each
fighter is clicked. Vader has increased points, Xwing Decreases points, pew sounds are played
on each click and created inside the control flow so that they are played reguardless if the previous
pew is finished. At the end the score is reflected in  the score class*/

/*There is a bug where if e.taget.baseURI ends with .html when its locally hosted, this will not work and 
must be reloaded until e.target.baseURI ends with the port. It's pretty infrequent but I'm going to submit with this bug.
The way around it would be to find a different target in the click event*/

container.addEventListener('click', function (e) {
  console.log(e)
  console.log(e.target.attributes[1])
  console.log(e.target.src)
  if (e.target.src === `${e.target.baseURI}images/tie_fighter1.webp`) {
    e.target.src = ``
    count++
    const pew = new Audio('/sounds/pew.mp3')
    pew.play()

  } else if (e.target.src === `${e.target.baseURI}images/tie_fighter2.webp`) {
    e.target.src = ``
    count++
    const pew = new Audio('/sounds/pew.mp3')
    pew.play()

  } else if (e.target.src === `${e.target.baseURI}images/darth.webp`) {
    e.target.src = ``
    count += 10
    const pew = new Audio('/sounds/pew.mp3')
    pew.play()
    vaderNo.play()

  } else if (e.target.src === `${e.target.baseURI}images/xwing.webp`) {
    e.target.src = ``
    count -= 10
    const pew = new Audio('/sounds/pew.mp3')
    pew.play()
    const luke = new Audio('/sounds/luke.mp3')
    luke.play()
  }
  score.textContent = `Score: ${count}`
})

/*20 second timer with sounds played at certain intervals to increase immersion
at zero seconds the modal is displayed with final score as well as pausing the main 
theme song and clearing the countdown so it stops*/

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

//reloads the game upon hitting the x on the modal and rehides the modal

span.onclick = function () {
  modal.style.display = "none";
  location.reload();
}
