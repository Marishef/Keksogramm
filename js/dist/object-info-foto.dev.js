"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.infoFotos = void 0;

var _data = require("./data.js");

var _util = require("./util.js");

var comment = function comment(index) {
  return {
    id: index,
    avatar: "img/avatar-".concat((0, _util.getRandomIntInclusive)(1, 6), ".svg"),
    message: (0, _util.createMessage)(),
    name: (0, _util.getRandomArrayElement)(_data.NAMES)
  };
}; //создаем функцию на создание обекта информации по фото


var infoFoto = function infoFoto(index) {
  return {
    id: index,
    url: "photos/".concat(index, ".ipg"),
    descriptions: (0, _util.getRandomArrayElement)(_data.DESCRIPTION),
    likes: (0, _util.getRandomArrayElement)(15, 200),
    comments: Array.from({
      length: (0, _util.getRandomArrayElement)(0, 6)
    }, function (_, commentIndex) {
      return comment(commentIndex + 1);
    })
  };
};

var infoFotos = function infoFotos() {
  return Array.from({
    length: _data.objectsNumber
  }, function (_, fotoIndex) {
    return infoFoto(fotoIndex + 1);
  });
};

exports.infoFotos = infoFotos;
(0, _util.checkStringLength)('', 140);
//# sourceMappingURL=object-info-foto.dev.js.map
