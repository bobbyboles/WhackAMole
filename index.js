const container = document.querySelector('.container')
const score = document.querySelector('.score')


/*This function creates a random mole and if there is
another mole already in the spot, it calls itself to try again
*/
function randMoles(string){
  //random number 1-9
  const randomNum = Math.floor(Math.random()*9+1)
  //randMole is equal to the image tag with the random number inserted into class using template literals
  const randMole = document.querySelector(`.hole${randomNum}`)
    //if passed in string already contains the mole: call it self to try again else assign the random class the mole.png
    if(randMole.className === string){
      randMoles(string)
    }else {
    randMole.src ='images/mole.png'
    }
}
//call randMoles to have a mole randomly on page load.
randMoles()

let count = 0 
//listen on click for the entire container of holes and moles
container.addEventListener('click', function(e){
  // if click contains a mole, assigns clear to target Class name and passes that into randMoles to ensure same hole isn't selected.
  //sets target source to an empty hole img and increases count
    if(e.target.src==="http://127.0.0.1:5500/images/mole.png"){
        let clear = e.target.className
        randMoles(clear)
        e.target.src = "http://127.0.0.1:5500/images/hole.png"
        count++
    }
    //pushes count to score div
    score.textContent = count
})


