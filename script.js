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

// *Play A sound when A is pressed on keyboard
a.onclick = function () {
  aSound.currentTime = 0
  aSound.play()
}

/**
 * * Play A sound on click
 */
document.addEventListener("keydown", function (e) {
  if (e.key === "a") {
    a.click()
  }
})

// *Play B sound when B is pressed on keyboard
b.onclick = function () {
  bSound.currentTime = 0
  bSound.play()
}
/**
 * * Play B sound on click
 */
document.addEventListener("keydown", function (e) {
  if (e.key === "b") {
    b.click()
  }
})

// * Play C sound when C is pressed on keyboard
c.onclick = function () {
  cSound.currentTime = 0
  cSound.play()
}

/**
 * * Play C sound on click
 */
document.addEventListener("keydown", function (e) {
  if (e.key === "c") {
    c.click()
  }
})

// * Play D sound when D is pressed on keyboard
d.onclick = function () {
  dSound.currentTime = 0
  dSound.play()
}
/**
 * * Play D sound on click
 */
document.addEventListener("keydown", function (e) {
  if (e.key === "d") {
    d.click()
  }
})

// * Play H sound when H is pressed on keyboard
h.onclick = function () {
  hSound.currentTime = 0
  hSound.play()
}

/**
 * * Play H sound on click
 */
document.addEventListener("keydown", function (e) {
  if (e.key === "h") {
    h.click()
  }
})
