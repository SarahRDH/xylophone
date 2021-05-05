
window.addEventListener("keydown", playSound);

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);//give us all the audio elements that have data-keys with any keyCode event attached to them
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);//grab all the individual keys that are associated with keyCodes.
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    console.log(key);
    key.classList.add("playing");
}

const colorKeys = document.querySelectorAll(".key"); //grabs all the key representations to change visuals on them

colorKeys.forEach(key => key.addEventListener('transitionend', removeTransform));

function removeTransform(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing"); //this refers to key which had the event listener applied to it for THIS function
    console.log(e.propertyName);
}
