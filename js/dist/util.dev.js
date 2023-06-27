"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandomIntInclusive = getRandomIntInclusive;
exports.checkStringLength = checkStringLength;
exports.createMessage = exports.getRandomArrayElement = void 0;

var _data = require("./data.js");

// Функция, возвращающая рандомное целое число  в заданном диапазоне
function getRandomIntInclusive(min, max) {
  min = Math.abs(Math.ceil(min));
  max = Math.abs(Math.floor(max));
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
} // функция по поиску случайного элемента в переданном массиве


var getRandomArrayElement = function getRandomArrayElement(element) {
  return element[getRandomIntInclusive(0, element.length - 1)];
}; //функция на создание одого или двух message


exports.getRandomArrayElement = getRandomArrayElement;

var createMessage = function createMessage() {
  return Array.from({
    length: getRandomIntInclusive(1, 2)
  }, function () {
    return getRandomArrayElement(_data.MESSAGE);
  }).join(' ');
}; //Функция для проверки максимальной длины строки


exports.createMessage = createMessage;

function checkStringLength(string, length) {
  return string.length <= length;
}
//# sourceMappingURL=util.dev.js.map
