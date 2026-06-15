const body = document.body
let isClicked = false
window.addEventListener("mousedown", () => {
    isClicked = true
})

window.addEventListener("mouseup", () => {
    isClicked = false
})

let mouseX;
let mouseY

function mouseXY(event) {
    mouseX = event.clientX
    mouseY = event.clientY
}

body.addEventListener("mousemove", () => {
    if (isClicked) {
        mouseXY(event)
        let element = document.createElement("div")
        element.className = "spawn-div"
        element.style.left = mouseX + "px"
        element.style.top = mouseY + "px"
        let color = document.querySelector("#colorPicker").value
        element.style.backgroundColor = color
        element.style.zIndex = 1
        body.append(element)
    }
})

let bgColor = document.querySelector("#backgroundColorPicker")
bgColor.addEventListener("input", () => {
    body.style.backgroundColor = bgColor.value
})