'use strict';

window.colorizeElement = function (element, colors, property) {

  var getCurrentColor = function (elem, prop) {
    return window.getComputedStyle(elem)[prop];
  };

  var changeCurrentColor = function () {
    var currentColor = getCurrentColor(element, property);
    var newColor = window.utils.getRandomElementExcept(colors, currentColor);
    element.style[property] = newColor;
  };

  element.addEventListener('click', changeCurrentColor);
  element.addEventListener('keydown', function (event) {
    if (event.keyCode === window.ENTER_KEY_CODE) {
      changeCurrentColor();
    }
  });
};
