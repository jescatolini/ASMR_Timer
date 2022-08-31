import {
  video1,
  video2,
  video3,
  video4,
  card1,
  card2,
  card3,
  card4,
  forestVolume,
  rainVolume,
  coffeeshopVolume,
  fireplaceVolume,
} from "./elements.js"
export default function Timer({
  minutesDisplay,
  secondsDisplay,
  controls,
  sounds
}){
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function updateDisplay(newMinutes, seconds){
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function updateMinutes(newMinutes){
    minutes = newMinutes
  }

  function getMinutes(){
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
  }

  function countdown(){
    timerTimeOut = setTimeout(function() {
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)
      let isFinished = minutes <=0 && seconds <=0

      updateDisplay(minutes, 0)

      if (isFinished) {
        updateDisplay()
        controls.reset()
        allRemove()
        sounds.timeEnd.play()
        return
      }

      if(seconds <= 0){
        seconds = 60
        --minutes
      }

      updateDisplay(minutes, String(seconds - 1))
      
      countdown()
    }, 1000)
  }

  function addMin() {
    updateDisplay(String(minutes + 5), 0)
    minutes = Number(minutesDisplay.textContent)
  }

  function decreaseMin() {
    if(minutes <= 5){
      controls.reset()
      reset()
      allRemove()
      sounds.timeEnd.play()
      return
    }
    updateDisplay(String(minutes - 5), 0)
    minutes = Number(minutesDisplay.textContent)
  }

  function hold(){
    clearTimeout(timerTimeOut)
  }

  function reset(){
    clearTimeout(timerTimeOut)
    updateDisplay()
    }
  function allRemove(){
      video1.classList.add('hide')
      video2.classList.add('hide')
      video3.classList.add('hide')
      video4.classList.add('hide')
      card1.classList.remove('select')
      card2.classList.remove('select')
      card3.classList.remove('select')
      card4.classList.remove('select')
      forestVolume.value = 0.5
      rainVolume.value = 0.5
      coffeeshopVolume.value = 0.5
      fireplaceVolume.value = 0.5
      sounds.forestAudio.pause()
      sounds.rainAudio.pause()
      sounds.coffeeAudio.pause()
      sounds.fireAudio.pause()
    }
  return{
    countdown,
    updateMinutes,
    updateDisplay,
    getMinutes,
    hold,
    reset,
    addMin,
    decreaseMin
  }
}