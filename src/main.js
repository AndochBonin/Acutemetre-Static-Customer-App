let selectedRow = 0

function getIndex(x) {
    console.log(x.rowIndex)
    selectedRow = x.rowIndex
}

function openStatus() {
    if (selectedRow == 1) window.location.href = "./Status/1236AB.html"
    else if (selectedRow == 2) window.location.href = "./Status/FE154.html"
    else if (selectedRow == 3) window.location.href = "./Status/11607B.html"
}

function openHistory() {
    if (selectedRow == 1) window.location.href = "./History/1236AB.html"
    else if (selectedRow == 2) window.location.href = "./History/FE154.html"
    else if (selectedRow == 3) window.location.href = "./History/11607B.html"
}

function openSettings() {
    if (selectedRow == 1) window.location.href = "./Settings/1236AB.html"
    else if (selectedRow == 2) window.location.href = "./Settings/FE154.html"
    else if (selectedRow == 3) window.location.href = "./Settings/11607B.html"
}