// main.js
var calculate = require('./utils')

function hello(params) {
  console.log(calculate(30)) // 9
}

var button = document.getElementById('my-button'); // add id="my-button" into html
button.addEventListener('click', hello);

// module.exports = hello