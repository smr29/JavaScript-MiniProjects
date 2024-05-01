const timeDisplay = document.querySelector('.time-display')
const startButton = document.querySelector('.start-button')
const pauseButton = document.querySelector('.pause-button')
const resetButton = document.querySelector('.reset-button')
const lightModeButton = document.querySelector('.mode-button')
const img = document.querySelector('.mode-img')
const body = document.body

let startTime = 0
let elapsedTime = 0
let currentTime = 0
let paused = true
let intervalID
let hrs = 0
let mins = 0
let secs = 0
let mil = 0

//start button functionality
startButton.addEventListener('click', () => {
    //starting the timer
    if(paused === true){
        paused = false
        startButton.innerHTML = 'Stop'
        startTime = Date.now() - elapsedTime
        intervalID = setInterval(() => {
            updateTime()
        }, 1)
    }
    //pausing the timer
    else if(!paused){
        paused = true
        startButton.innerHTML = 'Start'
        elapsedTime = Date.now() - startTime
        clearInterval(intervalID)
    }
})

//reset button functionality
resetButton.addEventListener('click', () => {
    paused = true
    clearInterval(intervalID)
    startTime = 0
    elapsedTime = 0
    currentTime = 0
    hrs = 0
    mins = 0
    secs = 0
    mil = 0
    timeDisplay.innerHTML = '00:00:00:00'
    startButton.innerHTML = 'Start'
})

//time updation and display
function updateTime(){
    elapsedTime = Date.now() - startTime;
    mil = Math.floor((elapsedTime%1000)/10).toString().padStart(2, "0")
    secs = Math.floor((elapsedTime/1000)%60).toString().padStart(2, "0")
    mins = Math.floor((elapsedTime/(1000*60)%60)).toString().padStart(2, "0")
    hrs = Math.floor((elapsedTime/(1000*60*60))%60).toString().padStart(2, "0")

    timeDisplay.textContent = `${hrs}:${mins}:${secs}:${mil}`
}

//dark mode functionality
lightModeButton.addEventListener('click', () => {
    if(body.classList.contains('dark-mode')){  
        img.src = 'images/sun.png'
        body.classList.remove('dark-mode')    
    }
    else {
        img.src = 'images/moon.png'
        body.classList.add('dark-mode')  
    }
})




























// let time = 0
// let interval
// let startTime
// let elapsedTime
// const startStopButton = document.querySelector('.js-start-stop-button')
// const resetButton = document.querySelector('.js-reset-button')
// const displayTime = document.querySelector('.js-time')

// startStopButton.addEventListener('click', () => {
//     if(interval)
//     stopTimer()
//     else
//     startTimer()
// })

// resetButton.addEventListener('click', () => {
//     resetTimer()
// })



// function startTimer() {
//     startStopButton.innerHTML = 'Stop'
//     if(interval)
//     clearInterval(interval)
//     interval = setInterval(() => {
//         time += 1
//         displayTime.innerHTML = Math.floor(time/3600).toString().padStart(2, "0") + ":" + Math.floor((time%3600)/60).toString().padStart(2, "0") + ":" + Math.floor(time%60).toString().padStart(2, "0") + ":" + Math.floor(time%60).toString().padStart(2, "0")
//     }, 1000)
// }

// function stopTimer() {
//     startStopButton.innerHTML = 'Start'
//     if(interval)
//     clearInterval(interval)
//     interval = null
// }

// function resetTimer() {
//     startStopButton.innerHTML = 'Start'
//     displayTime.innerHTML = '00:00:00:00'
//     if(interval)
//     clearInterval(interval)
//     interval = null
//     time = 0
// }