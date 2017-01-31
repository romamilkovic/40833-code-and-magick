var setupWindow = document.querySelector('.setup');
var setupToggle = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var inputName = document.querySelector('.setup-user-name');
var wizardCoat = document.querySelector('#wizard-coat');
var wizardEyes = document.querySelector('#wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');
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

// Функция для открытия окна
var setupWindowShow = function () {
  setupWindow.classList.remove('invisible');
}

// Функция для закрытия окна
var setupWindowClose = function () {
  setupWindow.classList.add('invisible');
}

// По клику открываем окно
setupToggle.addEventListener('click', setupWindowShow);

// По клику удаляем окно
setupClose.addEventListener('click', setupWindowClose);

// Делаем инпут обязательным
inputName.required = true;

// Меняем цвет накидки мага по клику
wizardCoat.addEventListener('click', function () {
  var colorNumber = Math.floor(Math.random() * wizardCoatColors.length);
  wizardCoat.style.fill = wizardCoatColors[colorNumber];
});

// Меняем цвет глаз мага по клику
wizardEyes.addEventListener('click', function () {
  var colorNumber = Math.floor(Math.random() * wizardEyesColors.length);
  wizardEyes.style.fill = wizardEyesColors[colorNumber];
});

// Меняем цвет фаерболла по клику
fireball.addEventListener('click', function () {
  var colorNumber = Math.floor(Math.random() * fireballColors.length);
  fireball.style.background = fireballColors[colorNumber];
});
