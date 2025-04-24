#!/bin/bash

# Транспилируем через Babel
echo "Запускаем Babel..."
npx babel src --out-dir lib || { echo "Неполадки при запуске Babel"; exit 1; }

# Собираем бандл через Webpack
echo "Запускаем Webpack..."
npx webpack || { echo "Неполадки при запуске Webpack"; exit 1; }

# Создаём index.html
node build-html.js

echo "React-приложение готово для запуска на веб-сервере"