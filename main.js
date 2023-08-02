
const Welcome = document.getElementById("Welcome");

var language = require('./language.json')
console.log(language)

const Witam = document.createElement("h1")
const text  = document.createTextNode(language.pl.hello)
Witam.appendChild(text)
Welcome.appendChild(Witam)