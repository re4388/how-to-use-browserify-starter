(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// main.js
var calculate = require('./utils')

function hello(params) {
  console.log(calculate(30)) // 9
}

var button = document.getElementById('my-button'); // add id="my-button" into html
button.addEventListener('click', hello);

// module.exports = hello
},{"./utils":2}],2:[function(require,module,exports){
function calculate(n) {
  return ((n * 100 + 20 - 4)) % 10 + 3  // 計算價格公式
}

module.exports = calculate // 把這個函式 export 出去
},{}]},{},[1]);
