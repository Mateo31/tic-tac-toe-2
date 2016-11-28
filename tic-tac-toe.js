// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

var c = "0"
var currentPlayer = "Playerone"
function TLS() {
var canvas = document.getElementById("game-board")
if (currentPlayer == "Playerone" && c == "0") {
var square = document.createElementNS(namespace, "rect")
square.setAttribute("x", 115)
square.setAttribute("y", 115)
square.setAttribute("rx", 10)
square.setAttribute("width", 60)
square.setAttribute("height", 60)
square.setAttribute("fill", "teal")
canvas.appendChild(square)
c = "1"
currentPlayer = "Playertwo"
} else if (currentPlayer == "Playertwo" && c == "0"){
var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cx", 145)
circle.setAttribute("cy", 145)
circle.setAttribute("r", 30)
circle.setAttribute("fill", "teal")
canvas.appendChild(circle)
c = "1"
currentPlayer = "Playerone"
}
}

var l = "0"
function TMS() {
var canvas = document.getElementById("game-board")
if (currentPlayer == "Playerone" && l == "0") {
var square = document.createElementNS(namespace, "rect")
square.setAttribute("x", 325)
square.setAttribute("y", 115)
square.setAttribute("rx", 10)
square.setAttribute("width", 60)
square.setAttribute("height", 60)
square.setAttribute("fill", "teal")
canvas.appendChild(square)
l = "1"
currentPlayer = "Playertwo"
} else if (currentPlayer == "Playertwo" && l == "0"){
var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cx", 355)
circle.setAttribute("cy", 145)
circle.setAttribute("r", 30)
circle.setAttribute("fill", "teal")
canvas.appendChild(circle)
l = "1"
currentPlayer = "Playerone"
}
}

var i = "0"
function TRS() {
var canvas = document.getElementById("game-board")
if (currentPlayer == "Playerone" && i == "0") {
var square = document.createElementNS(namespace, "rect")
square.setAttribute("x", 535)
square.setAttribute("y", 115)
square.setAttribute("rx", 10)
square.setAttribute("width", 60)
square.setAttribute("height", 60)
square.setAttribute("fill", "teal")
canvas.appendChild(square)
i = "1"
currentPlayer = "Playertwo"
} else if (currentPlayer == "Playertwo" && i == "0"){
var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cx", 565)
circle.setAttribute("cy", 145)
circle.setAttribute("r", 30)
circle.setAttribute("fill", "teal")
canvas.appendChild(circle)
i = "1"
currentPlayer = "Playerone"
}
}

var n = "0"
function MLS() {
var canvas = document.getElementById("game-board")
if (currentPlayer == "Playerone" && n == "0") {
var square = document.createElementNS(namespace, "rect")
square.setAttribute("x", 115)
square.setAttribute("y", 325)
square.setAttribute("rx", 10)
square.setAttribute("width", 60)
square.setAttribute("height", 60)
square.setAttribute("fill", "teal")
canvas.appendChild(square)
n = "1"
currentPlayer = "Playertwo"
} else if (currentPlayer == "Playertwo" && n == "0"){
var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cx", 145)
circle.setAttribute("cy", 355)
circle.setAttribute("r", 30)
circle.setAttribute("fill", "teal")
canvas.appendChild(circle)
n = "1"
currentPlayer = "Playerone"
}
}

var t = "0"
function MMS() {
var canvas = document.getElementById("game-board")
if (currentPlayer == "Playerone" && t == "0") {
var square = document.createElementNS(namespace, "rect")
square.setAttribute("x", 325)
square.setAttribute("y", 325)
square.setAttribute("rx", 10)
square.setAttribute("width", 60)
square.setAttribute("height", 60)
square.setAttribute("fill", "teal")
canvas.appendChild(square)
t = "1"
currentPlayer = "Playertwo"
} else if (currentPlayer == "Playertwo" && t == "0"){
var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cx", 355)
circle.setAttribute("cy", 355)
circle.setAttribute("r", 30)
circle.setAttribute("fill", "teal")
canvas.appendChild(circle)
t = "1"
currentPlayer = "Playerone"
}
}

var o = "0"
function MRS() {
var canvas = document.getElementById("game-board")
if (currentPlayer == "Playerone" && o == "0") {
var square = document.createElementNS(namespace, "rect")
square.setAttribute("x", 535)
square.setAttribute("y", 325)
square.setAttribute("rx", 10)
square.setAttribute("width", 60)
square.setAttribute("height", 60)
square.setAttribute("fill", "teal")
canvas.appendChild(square)
o = "1"
currentPlayer = "Playertwo"
} else if (currentPlayer == "Playertwo" && o == "0"){
var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cx", 565)
circle.setAttribute("cy", 355)
circle.setAttribute("r", 30)
circle.setAttribute("fill", "teal")
canvas.appendChild(circle)
o = "1"
currentPlayer = "Playerone"
}
}

var s = "0"
function BLS() {
var canvas = document.getElementById("game-board")
if (currentPlayer == "Playerone" && s == "0") {
var square = document.createElementNS(namespace, "rect")
square.setAttribute("x", 115)
square.setAttribute("y", 535)
square.setAttribute("rx", 10)
square.setAttribute("width", 60)
square.setAttribute("height", 60)
square.setAttribute("fill", "teal")
canvas.appendChild(square)
s = "1"
currentPlayer = "Playertwo"
} else if (currentPlayer == "Playertwo" && s == "0"){
var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cx", 145)
circle.setAttribute("cy", 565)
circle.setAttribute("r", 30)
circle.setAttribute("fill", "teal")
canvas.appendChild(circle)
s = "1"
currentPlayer = "Playerone"
}
}

var e = "0"
function BMS() {
var canvas = document.getElementById("game-board")
if (currentPlayer == "Playerone" && e == "0") {
var square = document.createElementNS(namespace, "rect")
square.setAttribute("x", 325)
square.setAttribute("y", 535)
square.setAttribute("rx", 10)
square.setAttribute("width", 60)
square.setAttribute("height", 60)
square.setAttribute("fill", "teal")
canvas.appendChild(square)
e = "1"
currentPlayer = "Playertwo"
} else if (currentPlayer == "Playertwo" && e == "0"){
var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cx", 355)
circle.setAttribute("cy", 565)
circle.setAttribute("r", 30)
circle.setAttribute("fill", "teal")
canvas.appendChild(circle)
e = "1"
currentPlayer = "Playerone"
}
}

var x = "0"
function BRS() {
var canvas = document.getElementById("game-board")
if (currentPlayer == "Playerone" && x == "0") {
var square = document.createElementNS(namespace, "rect")
square.setAttribute("x", 535)
square.setAttribute("y", 535)
square.setAttribute("rx", 10)
square.setAttribute("width", 60)
square.setAttribute("height", 60)
square.setAttribute("fill", "teal")
canvas.appendChild(square)
x = "1"
currentPlayer = "Playertwo"
} else if (currentPlayer == "Playertwo" && x == "0"){
var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cx", 565)
circle.setAttribute("cy", 565)
circle.setAttribute("r", 30)
circle.setAttribute("fill", "teal")
canvas.appendChild(circle)
x = "1"
currentPlayer = "Playerone"
}
}

function restart(){
  location.reload()
}
