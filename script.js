

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);//give us all the audio elements that have data-keys with any keyCode event attached to them
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);//grab all the individual keys that are associated with keyCodes.
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
}

function removeTransition(e) {
    console.log(e);
    if (e.propertyName !== "border-top-color") return; //for some reason, recognizing that "transform" for a property name was not working to reset the transition, so I just changed the propertyName to something else in the object. Now it works.
    this.classList.remove("playing"); //this refers to key which had the event listener applied to it for THIS function
    console.log("does this work");
}

const colorKeys = document.querySelectorAll(".key"); //grabs all the key representations to change visuals on them
colorKeys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener("keydown", playSound);
