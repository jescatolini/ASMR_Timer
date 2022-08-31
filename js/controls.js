import { 
  buttonLight,
  buttonDark,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet
 } from "./elements.js";
import Audios from "./audios.js"

const sounds = Audios()

export default function Controls() {

function light() {
  buttonLight.classList.add('hide')
  buttonDark.classList.remove('hide')
  changeDarkmode().screen()
}

function moon(){
  buttonLight.classList.remove('hide')
  buttonDark.classList.add('hide')
  changeDarkmode().screen()
}

function play(){
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')
}

function pause(){
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
}

function reset(){
  buttonStop.classList.add('hide')
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  buttonSet.classList.remove('hide')
}

function changeDarkmode() {
  const body = document.querySelector("body")

  function screen(){
  body.classList.toggle('darkmode')
  }

 return {
  screen
 }

}

function select (card1, card2, card3, card4){
  card1.classList.add('select')
  card2.classList.remove('select')
  card3.classList.remove('select')
  card4.classList.remove('select')
}

function video(video1, video2, video3, video4){
  video1.classList.remove('hide')
  video2.classList.add('hide')
  video3.classList.add('hide')
  video4.classList.add('hide')
}

return{
  light,
  moon,
  play,
  pause,
  reset,
  changeDarkmode,
  select,
  video
}
}