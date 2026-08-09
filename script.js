const a = document.getElementsByClassName("a")[0]
const b = document.getElementsByClassName("b")[0]
const c = document.getElementsByClassName("c")[0]
const d = document.getElementsByClassName("d")[0]
const h = document.getElementsByClassName("h")[0]



const aSound = new Audio("./alphabets/a.mp3")
const bSound = new Audio("./alphabets/b.mp3")
const cSound = new Audio("./alphabets/c.mp3")
const dSound = new Audio("./alphabets/d.mp3")
const hSound = new Audio("./alphabets/h.mp3")


a.onclick = function () {
    aSound.currentTime = 0
    aSound.play()
}


b.onclick = function () {
    bSound.currentTime = 0
    bSound.play()
}

c.onclick = function () {
    cSound.currentTime = 0
    cSound.play()
}

d.onclick = function () {
    dSound.currentTime = 0
    dSound.play()
}

h.onclick = function () {
    hSound.currentTime = 0
    hSound.play()
}
