let stupne = Number(prompt("Zadej stupně Fahrenheit:"))
let prevod = (5*(stupne-32))/9

document.body.innerHTML = "<h1>" + "Kalkulačka pro převod stupňů Fahrenheita na Celsiovu stupnici"
document.body.innerHTML += "<p>" + "Zadaná teplota ve stupních Fahrenheit: " + stupne + "</p>"
document.body.innerHTML += "<p>" + "Teplota na Celsiově stupnici: " + prevod + "</p>"

