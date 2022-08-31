
export default function(){  
  const forestAudio = new Audio("./audio/forest.wav")
  const rainAudio = new Audio("./audio/rain.wav")
  const coffeeAudio = new Audio("./audio/coffeeshop.wav")
  const fireAudio = new Audio("./audio/fireplace.wav")

  forestAudio.loop = true
  rainAudio.loop = true
  coffeeAudio.loop = true
  fireAudio.loop = true

  const timeEnd = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  )

  return{
    forestAudio,
    rainAudio,
    coffeeAudio,
    fireAudio,
    timeEnd
  }

}