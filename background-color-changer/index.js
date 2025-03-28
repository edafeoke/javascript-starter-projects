const body = document.getElementsByTagName('body')[0]

function changeBGColor(color) {
    body.style.backgroundColor = color
}

const getRandomColor = () => {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)
    changeBGColor(`rgb(${red}, ${green}, ${blue})`)
}