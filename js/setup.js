'use strict';

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

// Создаем функцию для вычисления рандомного цвета
function getRandomColor(colors) {
  var randomNumber = Math.floor(Math.random() * colors.length);
  return colors[randomNumber];
}

// Меняем цвет накидки мага по клику
wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getRandomColor(wizardCoatColors);
});

// Меняем цвет глаз мага по клику
wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getRandomColor(wizardEyesColors);
});

// Меняем цвет фаерболла по клику
fireball.addEventListener('click', function () {
  fireball.style.background = getRandomColor(fireballColors);
});

// Проверяем было ли нажатие
var isActivateEvent = function (event) {
  return event.keyCode && event.keyCode === ENTER_KEY_CODE;
};

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

setupOpen.addEventListener('click', setupWindowShow);
setupOpen.addEventListener('keydown', function (event) {
  if (isActivateEvent(event)) {
    setupWindowShow();
  }
});

setupClose.addEventListener('click', setupWindowClose);
setupClose.addEventListener('keydown', function (event) {
  if (isActivateEvent(event)) {
    setupWindowClose();
  }
});

setupSubmit.addEventListener('click', setupWindowClose);
setupSubmit.addEventListener('keydown', function (event) {
  if (isActivateEvent(event)) {
    event.preventDefault();
    setupWindowClose();
  }
});
