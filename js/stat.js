'use strict';

window.renderStatistics = function(ctx, names, times) {

  // Объявляем необходимые переменные
  var startX = 100;
  var startY = 10;

  var cloudColor = '#fff';
  var cloudWidth = 420;
  var cloudHeight = 270;

  var cloudShadowWidth = 10;
  var cloudShadowColor = 'rgba(0, 0, 0, 0.7)';

  var cloudPadding = 40;

  var messageText = 'Ура вы победили!\nСписок результатов:';
  var messageTextX = startX + cloudPadding;
  var messageTextY = startY + cloudPadding;

  var fontFamily = 'PT Mono';
  var fontSize = 16;
  var fontColor = '#000';
  var fontLineHeight = 1.6 * fontSize;

  // Функция для отрисовки облака
  function cloudDraw(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height)
  }

  // Функция для вывода текстового сообщения
  function printText(text, x, y) {
    ctx.fillStyle = fontColor;
    ctx.font = fontSize + fontFamily;
    ctx.fillText(text, x, y);
  }

  // Отрисовываем сперва тень от облака
  cloudDraw(startX + cloudShadowWidth, startY + cloudShadowWidth, cloudWidth, cloudHeight, cloudShadowColor);

  // Отрисовываем облако
  cloudDraw(startX, startY, cloudWidth, cloudHeight, cloudColor);

  // Выводим текстовое сообщение
  printText(messageText, messageTextX, messageTextY);

  // Отрисовываем колонки
  var max = -1;

  for(var i = 0 ; i < times.length; i++ ) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histoHeight = 150;
  var histoX = startX + cloudPadding;

  var columnWidth = 40;
  var columnGutter = 80;

  var step = histoHeight / -max;

  for (var i = 0; i < times.length; i++) {
    var name = names[i];
    var time = times[i].toFixed(0);

    var columnColor = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + Math.random() + ')';

    var columnHeight = step * time;

    printText(time, histoX + columnGutter * i, 100);
    cloudDraw(histoX + columnGutter * i, histoX + 100, columnWidth, columnHeight, columnColor);
    printText(name, histoX + columnGutter * i, 100 + histoHeight + 10);
  }
}
