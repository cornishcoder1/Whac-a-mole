const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.getElementById('time-left')
const score = document.getElementById('score')

let hitPosition


function startGame() {

    let result = 0
    let currentTime = 20
    let timerId = null
    

    function randomSquare() {
        squares.forEach(square => {
            square.classList.remove('mole')
        })

        
        let randomSquare = squares[Math.floor(Math.random() * 9)]
        // console.log(randomPosition)
        // console.log(Math.floor(Math.random() * 9))
        randomSquare.classList.add('mole')

        hitPosition = randomSquare.id
    }

    squares.forEach(square => {
        square.addEventListener('mousedown', () => {
            if (square.id == hitPosition) {
                result++
                score.textContent = result
                hitPosition = null
            }
        })    
    })

    function moveMole() {
        timerId = setInterval(randomSquare, 500)
    }

    //TASK Attach to a button
    moveMole()

    function countDown() {
        currentTime--
        timeLeft.textContent = currentTime
    
        if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result)
        }
    
    }

    let countDownTimerId = setInterval(countDown, 1000)
}
document.getElementById('startGame').addEventListener('click', startGame);


