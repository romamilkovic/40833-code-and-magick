'use strict';

window.setup = (function () {
  var setupWindow = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupOpenIcon = document.querySelector('.setup-open-icon');
  var setupClose = setupWindow.querySelector('.setup-close');
  var setupSubmit = setupWindow.querySelector('.setup-submit');
  var inputName = setupWindow.querySelector('.setup-user-name');
  var wizardCoat = setupWindow.querySelector('#wizard-coat');
  var wizardEyes = setupWindow.querySelector('#wizard-eyes');
  var fireball = setupWindow.querySelector('.setup-fireball-wrap');
  var wizardCoatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117,)',
    'rgb(215, 210, 55,)',
    'rgb(0, 0, 0)'
  ];
  var wizardEyesColors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];
  var fireballColors = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var ENTER_KEY_CODE = 13;
  var ESCAPE_KEY_CODE = 27;

  // Делаем инпут обязательным
  inputName.required = true;

  // Ограничиваем макс. кол-во символов
  inputName.maxlength = 50;

  // Метод для открытия диалога
  var setupWindowShow = function () {
    setupWindow.classList.remove('invisible');
    setupWindow.setAttribute('aria-hidden', false);
    setupOpenIcon.setAttribute('aria-pressed', true);
    setupClose.setAttribute('aria-pressed', false);
    document.addEventListener('keydown', setupWindowKeyDownHandler);
  };

  // Метод для закрытия диалога
  var setupWindowClose = function () {
    setupWindow.classList.add('invisible');
    setupWindow.setAttribute('aria-hidden', true);
    setupOpenIcon.setAttribute('aria-pressed', false);
    setupClose.setAttribute('aria-pressed', true);
    document.removeEventListener('keydown', setupWindowKeyDownHandler);
  };

  // Метод который слушает событие на кнопку ESCAPE, если событие произошло – закрывает диалог
  var setupWindowKeyDownHandler = function (event) {
    if (event.keyCode === ESCAPE_KEY_CODE) {
      setupWindow.classList.add('invisible');
    }
  };

  // Метод который слушает событие на кнопку ENTER, если событие произошло – закрывает диалог отменяет действие по умолчанию, например Submit в форме
  var setupWindowCloseKeyDownEventHandler = function () {
    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      setupWindowClose();
    }
  };

  var setupWindowShowKeyDownEventHandler = function () {
    if (event.keyCode === ENTER_KEY_CODE) {
      setupWindowShow();
    }
  };

  // Вещаем слушатели на элементы
  setupOpen.addEventListener('click', setupWindowShow);
  setupOpen.addEventListener('keydown', setupWindowShowKeyDownEventHandler);

  setupClose.addEventListener('click', setupWindowClose);
  setupClose.addEventListener('keydown', setupWindowCloseKeyDownEventHandler);

  setupSubmit.addEventListener('click', setupWindowClose);
  setupSubmit.addEventListener('keydown', setupWindowCloseKeyDownEventHandler);

  // Красим элементы волшебника по клику и нажатию на Enter рандомным цветом
  window.colorizeElement(wizardCoat, wizardCoatColors, 'fill');
  window.colorizeElement(wizardEyes, wizardEyesColors, 'fill');
  window.colorizeElement(fireball, fireballColors, 'background');
})();
