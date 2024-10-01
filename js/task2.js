let bulbImage = document.getElementById("bulb-img")
let catImage = document.getElementById("cat-img")
let switchStatus = document.getElementById("ss")
let offBtn = document.getElementById("off")
let onBtn = document.getElementById("on")

function switchOn(){
    bulbImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    catImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
    switchStatus.textContent = "Switched on"
    onBtn.style.backgroundColor="gray"
    offBtn.style.backgroundColor="red"
    onBtn.style.cursor = "no-drop"
}

function switchOff(){
    bulbImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    catImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    switchStatus.textContent = "Switched off"
    offBtn.style.backgroundColor="gray"
    onBtn.style.backgroundColor="green"
    offBtn.style.cursor = "no-drop"
}