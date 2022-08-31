import Timer from "./timer.js";
import Events from "./events.js";
import Controls from "./controls.js";
import Audios from "./audios.js"

import { 
  minutesDisplay,
  secondsDisplay,
 } from "./elements.js";

 const sounds = Audios()

 const controls = Controls()

 const timer = Timer({
  minutesDisplay, secondsDisplay, controls, sounds
})
const events = Events({
 controls, timer, sounds
})