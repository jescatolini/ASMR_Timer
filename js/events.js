import { 
  buttonAdd,
  buttonDecrease,
  buttonLight,
  buttonDark,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  card1,
  card2,
  card3,
  card4,
  video1,
  video2,
  video3,
  video4,
  forestVolume,
  rainVolume,
  coffeeshopVolume,
  fireplaceVolume
 } from "./elements.js";

 export default function Events({controls, timer, sounds}){ 
 
  buttonLight.addEventListener('click', function() {
  controls.light()

 })

 buttonDark.addEventListener('click', function() {
  controls.moon()
})


 buttonPlay.addEventListener('click', function() {
  controls.play()
  timer.countdown()
 })
 
 buttonPause.addEventListener('click', function(){
  controls.pause()
  timer.hold()
 })
 
 
 buttonStop.addEventListener('click', function(){
  controls.reset()
  timer.reset()
  allRemove()
 })
 
 buttonAdd.addEventListener('click', function() {
   timer.addMin()
  })
  
  buttonDecrease.addEventListener('click', function(){
    timer.decreaseMin()
  })
  
  buttonSet.addEventListener('click', function() {
    let newMinutes = prompt("Quantos minutos?")
    
    if (!newMinutes) {
      timer.getMinutes()
      return
    }
    
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })
  
  
  
  card1.addEventListener('click', function(){
    controls.select(card1,card2,card3,card4)
    controls.video(video1,video3,video2,video4)
    sounds.forestAudio.play()
    sounds.rainAudio.pause()
    sounds.coffeeAudio.pause()
    sounds.fireAudio.pause()
  })

  card2.addEventListener('click', function(){
    controls.select(card2,card1,card3,card4)
    controls.video(video2,video3,video1,video4)
    sounds.forestAudio.pause()
    sounds.rainAudio.play()
    sounds.coffeeAudio.pause()
    sounds.fireAudio.pause()
  })
  
  card3.addEventListener('click', function(){
    controls.select(card3,card1,card2,card4)
    controls.video(video3,video2,video1,video4)
    sounds.forestAudio.pause()
    sounds.rainAudio.pause()
    sounds.coffeeAudio.play()
    sounds.fireAudio.pause()
  })
  
  card4.addEventListener('click', function(){
    sounds.forestAudio.pause()
    sounds.rainAudio.pause()
    sounds.coffeeAudio.pause()
    sounds.fireAudio.play()
    controls.select(card4,card1,card2,card3)
    controls.video(video4,video3,video2,video1)
  })
  
  forestVolume.addEventListener('change', function(){
    sounds.forestAudio.volume = this.value
  })
  
  rainVolume.addEventListener('change', function(){
    sounds.rainAudio.volume = this.value
  })
  
 coffeeshopVolume.addEventListener('change', function(){
  sounds.coffeeAudio.volume = this.value
})

fireplaceVolume.addEventListener('change', function(){
  sounds.fireAudio.volume = this.value
})


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
}