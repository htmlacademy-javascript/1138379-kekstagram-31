/* eslint-disable no-console */

// Функция для проверки длины строки.

const stringCheck = (string, length) => {
  if (string.length <= length) {
    console.log(`Ожидаю: ${length} кодовых значений.
Ответ: Функция является true, количество значений в строковом формате ${string.length} символов.`);
  } else {
    console.log(`Ожидаю: ${length} кодовых значений.
Ответ: Функция является false, количество значений в строковом формате ${string.length} символов.`);
  }
};

stringCheck('проверяемая строка', 20);
stringCheck('проверяемая строка', 18);
stringCheck('проверяемая строка', 10);

// Функция для проверки, является ли строка палиндромом.

const palindromeTest = (string) => {
  const palindrome = string.replaceAll(' ', '').toLowerCase();

  let result = '';

  for (let i = palindrome.length - 1; i >= 0; i--) {
    result += palindrome[i];
  }

  if (palindrome === result) {
    console.log(`Входящие данные: Строка "${string}".
Ответ: Строка является палиндромом true.
Результат: "${result}".`);
  } else {
    console.log(`Входящие данные: Строка "${string}".
Ответ: Строка не является палиндромом false.
Результат: "${result}".`);
  }

  return palindrome === result;
};

palindromeTest('топот');
palindromeTest('ДовОд');
palindromeTest('Кекс');
palindromeTest('Лёша на полке клопа нашёл ');

// Функция для извлечения содержащихся цифр.

const extractNumber = (string) => {
  let convertString = string.toString();

  let result = '';

  for (const index in convertString) {
    convertString = parseInt(string[index], 10);
    if (!Number.isNaN(convertString)) {
      result += convertString;
    }
  }

  return result > 0 ? result : NaN;
};

extractNumber('2023 год'); // 2023
extractNumber('ECMAScript 2022'); // 2022
extractNumber('1 кефир, 0.5 батона'); // 105
extractNumber('агент 007'); // 7
extractNumber('а я томат'); // NaN
extractNumber(2023); // 2023
extractNumber(-1); // 1
extractNumber(1.5); // 15
