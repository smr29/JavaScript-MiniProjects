let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
}; 

updateScore()

function pickCompMove(){    
const randNum = Math.random()   
let compMove = ''     
if(randNum >= 0 && randNum<=1/3){
    compMove = ('rock')
}
else if(randNum>1/3 && randNum<=2/3){
    compMove = ('paper')
}
else if(randNum>2/3 && randNum<=1){
    compMove = ('scissors')
}
return compMove;
}

let isAutoPlaying = false
let intervalId;

function autoPlay(){
    if(!isAutoPlaying){
        intervalId = setInterval(() => {
            const playerMove = pickCompMove()
            playGame(playerMove)
        }, 1000)
        document.querySelector('.js-auto-play-button').innerHTML = 'Stop Playing'
        isAutoPlaying = true
    }
    else {
        clearInterval(intervalId)
        document.querySelector('.js-auto-play-button').innerHTML = 'Auto Play'
        isAutoPlaying = false
    }
}

document.querySelector('.js-rock-button').addEventListener('click', () => {
    playGame('rock')
})

document.querySelector('.js-paper-button').addEventListener('click', () => {
    playGame('paper')
})

document.querySelector('.js-scissors-button').addEventListener('click', () => {
    playGame('scissors')
})

document.querySelector('.js-reset-button').addEventListener('click', () => {
    resetScore()
})

document.querySelector('.js-auto-play-button').addEventListener('click', () => {
    autoPlay()
})

document.body.addEventListener('keydown', (event) => {
    console.log(event.key)
    if(event.key === 'r')
    playGame('rock')
    else if(event.key === 'p')
    playGame('paper')
    else if(event.key === 's')
    playGame('scissors')
    else if(event.key ==='a')
    autoPlay()
    else if(event.key==='Backspace')
    resetScore()
})

function playGame(playerMove){
const compMove = pickCompMove();
let result = ''
if(playerMove==='rock'){
    if(compMove==='rock'){
    result = "It's a tie"
    } 
    else if(compMove==='paper'){
        result = 'You lose'
    }
    else if(compMove==='scissors'){
        result = 'You win'
    }
}

else if(playerMove==='paper'){
    if(compMove==='paper'){
    result = "It's a tie"
    } 
    else if(compMove==='scissors'){
        result = 'You lose'
    }
    else if(compMove==='rock'){
            result = 'You win'
    }
}

else if(playerMove==='scissors'){
    if(compMove==='scissors'){
    result = "It's a tie"
    } 
    else if(compMove==='rock'){
        result = 'You lose'
    }
    else if(compMove==='paper'){
        result = 'You win'
    }
}    

if(result === 'You win')   
    score.wins += 1;
else if(result === 'You lose')
    score.losses += 1;
else if(result === "It's a tie")   
    score.ties += 1; 

localStorage.setItem('score', JSON.stringify(score))

document.querySelector('.js-result').innerHTML = result
document.querySelector('.js-moves').innerHTML = `You: <img class="game-image" src="${playerMove}-emoji.png"> - Computer: <img class="game-image" src="${compMove}-emoji.png">`
updateScore()
}

function updateScore() {
document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
}

const yesNoPara = document.querySelector('.js-yes-no-para')

function resetScore() {
    yesNoPara.innerHTML = `Are you sure you want to reset the score?
                <button class="yes-button">Yes</button>
                <button class="no-button">No</button>`
    document.querySelector('.yes-button').addEventListener('click', () => {   
        yesNoPara.innerHTML = ''
        score.wins = 0; 
        score.losses= 0; 
        score.ties = 0;
        localStorage.removeItem('score'); 
        updateScore()        
    })
    document.querySelector('.no-button').addEventListener('click', () => {
        yesNoPara.innerHTML = ''
    })    
}