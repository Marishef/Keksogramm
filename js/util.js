import { MESSAGE } from "./data.js";

// Функция, возвращающая рандомное целое число  в заданном диапазоне
function getRandomIntInclusive (min, max) {
  min = Math.abs(Math.ceil(min));
  max = Math.abs(Math.floor(max));
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

// функция по поиску случайного элемента в переданном массиве
const getRandomArrayElement = (element) => {
    return element[getRandomIntInclusive (0, element.length - 1)]
}
//функция на создание одого или двух message
const createMessage = () =>
  Array.from({ length: getRandomIntInclusive (1, 2) }, () =>
    getRandomArrayElement(MESSAGE)
  ).join(' ');

  //Функция для проверки максимальной длины строки
function checkStringLength (string, length) {
  return string.length <= length;
}

  export {
    getRandomIntInclusive,
    getRandomArrayElement,
    createMessage,
    checkStringLength
  }
