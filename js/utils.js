'use strict';

window.utils = (function () {
  var getRandomElement = function (array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  var getRandomElementExcept = function (array, currentArrayElement) {
    var randomElement = getRandomElement(array);
    while (currentArrayElement === randomElement) {
      randomElement = getRandomElement(array);
    }
    return randomElement;
  };

  // Делаем данные функции доступными извне
  return {
    getRandomElement: getRandomElement,
    getRandomElementExcept: getRandomElementExcept
  };
})();
