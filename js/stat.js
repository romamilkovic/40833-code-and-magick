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

  var cloudPadding = 30;

  var messageTextCongrats = 'Ура вы победили!';
  var messageTextInfo = 'Список результатов:';
  var messageTextX = startX + cloudPadding;
  var messageTextY = startY + cloudPadding;

  var fontFamily = 'PT Mono';
  var fontSize = 16;
  var fontColor = '#000';
  var fontLineHeight = 1.2 * fontSize;

  // Функция для отрисовки облака
  function cloudDraw(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height)
  }

  // Функция для вывода текстового сообщения
  function printText(text, x, y) {
    ctx.fillStyle = fontColor;
    ctx.font = fontSize + 'px ' + fontFamily;
    ctx.fillText(text, x, y);
  }

  // Отрисовываем сперва тень от облака
  cloudDraw(startX + cloudShadowWidth, startY + cloudShadowWidth, cloudWidth, cloudHeight, cloudShadowColor);

  // Отрисовываем облако
  cloudDraw(startX, startY, cloudWidth, cloudHeight, cloudColor);

  // Выводим текстовое сообщение
  printText(messageTextCongrats, messageTextX, messageTextY);
  printText(messageTextInfo, messageTextX, messageTextY + fontLineHeight);

  // Отрисовываем колонки
  var histoHeight = 150;
  var histoX = startX + cloudPadding;
  var histoY = 100;

  var columnWidth = 40;
  var columnGutter = 50;

  var maxValue = Math.max.apply(Math, times);

  function getColumnHeight(val) {
    return histoHeight * val / maxValue;
  }

  function drawColumn(ctx, idx, color) {
    var columnHeight = getColumnHeight(times[idx]);

    var labelOffset = 10;
    var nameOffset = 20;

    var x = histoX + idx * (columnWidth + columnGutter);
    var yBar = histoY + histoHeight - columnHeight;
    var yLabel = yBar - labelOffset;
    var textLabel = times[idx].toFixed(0);
    var yName = histoY + histoHeight + nameOffset;
    var name = names[i];

    ctx.fillStyle = color;
    ctx.fillRect(x, yBar, columnWidth, columnHeight);
    ctx.fillStyle = fontColor;
    ctx.fillText(textLabel, x, yLabel);
    ctx.fillText(name, x, yName);
  }

  for (var i = 0; i < times.length; i++) {
    var columnColor = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + Math.random() + ')';
    drawColumn(ctx, i, columnColor);
  }
}
