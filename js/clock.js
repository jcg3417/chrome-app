const getTime = document.getElementById("clock")

function getRealTime() {
    const date = new Date().toLocaleTimeString()
    getTime.innerText = date
}

getRealTime()
setInterval(getRealTime, 1000)
