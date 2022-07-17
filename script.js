"use strict";

// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
const sumNum = 0.1 + 0.2;
alert(sumNum.toFixed(1));

// додавання рядка "1" і цифри 2, добийся математично правильної відповіді.
const valueString = +'1';
const valueNumber = 2;
alert(valueString + valueNumber);

/*Користувач вказує обсяг флешки в Гб.
Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.*/

const sizeFlash = prompt('Enter the size of your flash drive Gb', '');
alert(`number of files of size - 820 Mb  ( ${Math.floor(1000 * sizeFlash / 820)} )`);

// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

const amountMoney = prompt('Enter the amount of money', '');
const productPrice = prompt('Enter the price of chocolate', '');
const amountProduct = Math.floor(amountMoney / productPrice);
const changeForProduct = amountMoney - productPrice * amountProduct ;
alert(`You can buy ${amountProduct} pcs. Your change ${changeForProduct.toFixed(2)}`);

// Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

const numThreeDigit = prompt('Enter a three-digit number', '');
const num3Digit = numThreeDigit % 10;
const num2Digit = Math.floor(numThreeDigit / 10) % 10;
const num1Digit = Math.floor(numThreeDigit  /100) % 10;
alert ('' + num3Digit + num2Digit + num1Digit);



// Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.

const deposit = prompt('Enter deposit amount', '');
const numberMonth = prompt('Enter number month', '');
const amountPercentForMonth = 5 / 12;
const amountPercentMoneyForMonth = (amountPercentForMonth * deposit / 100).toFixed(2);
const sumDepositPercent = deposit + amountPercentMoneyForMonth * numberMonth;
alert (`Your percent for ${numberMonth} months ( ${amountPercentMoneyForMonth * numberMonth} )
Your deposit with percent for ${numberMonth}  months  ( ${sumDepositPercent} )`)