alert('hello world')
// 1. Написать программу, которая вычисляет сумму чисел от 1 до n. Значение n вводится с клавиатуры.
// Проверить число n на корректность (чтобы это было число, чтобы оно не было меньше 1, чтобы это было не null).
// let n = prompt('enter');
// if(n === null || isNaN(n) || n <= 1) {
//     alert('cancel');
// } else {
//     let sum = 0;
//     for(let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     alert(sum)
// }

// 2. Написать программу, которая определяет количество
// положительных, отрицательных чисел и нулей. В
// начале программы, пользователь самостоятельно
// задает какое количество чисел будет вводить, затем
// вводит сами числа.
// Пример вывода:
// «Положительных: 2 шт.
// Отрицательных: 5 шт.
// Нулей: 3 шт.»
// const amount = prompt('amountNumber');
// let pos = 0;
// let neg = 0;
// let zer = 0;
// if(amount === null || isNaN(amount) || amount <= 1) {
//     alert('cancel');
// } else {
//     for(let i = 0; i < amount; i++) {
//         let number = prompt('введите число')
//         if (number > 0) {
//             pos = ++pos;
//         }
//         if (number < 0) {
//             neg = ++neg;
//         }
//         if (number === 0) {
//             zer = ++zer
//         }
//     }
//     alert("Положительных: " + pos + " Отрицательных: " + neg + " Нулей: " + zer)
// }

// 3. Написать программу, которая выводит на экран
// двузначные числа, которые делятся на 4, но не
// делятся на 6.
// for(let i = 10; i < 100; i++) {
//     if(i%4 === 0 && i%6 !== 0){
//         console.log(i)
//     }
// }

// 4. Написать программу, которая выводит среднее
// арифметическое n чисел введенных пользователем.
// Ввод чисел прекращается
// тогда, когда нажали «отмена», после чего выводится
// среднее арифметическое.
// let n = 0;
// let sum = 0;
// for(let i = 0; i < Infinity; i++) {
//     let currentNum = prompt('enter ur num');
//     if (currentNum === null || isNaN(currentNum) || currentNum < 0 || currentNum === undefined) {
//         break
//     }
//     n++;
//     sum += +currentNum;
// }
// let result = sum/n;
// alert(result);

// 5. Проверка на таблицу умножения
// Пользователь вводит два случайных числа
// После чего вводит еще одно число, которое должно являться произведением 
// первых двух
// Если пользователь ввел правильное произведение вывести собщение что он молодец!
// Если нет, выводим пользователю правильный ответ.


// 6.
// Под диваном живет 100 хомячков.
// Пользователь вводит число хомячков,
// которое он хочет достать из-под дивана.
// Если число оставшихся хомячков меньше
// чем число, которое ввел пользователь
// вывести сообщение.
// let hamsters = 100;
// for(let i = 0; i<Infinity ;i++) {
//     let countOfHamsters = +prompt("Введите кол-во хомячков");
//     if(countOfHamsters < hamsters) {
//         hamsters = hamsters - countOfHamsters;
//     } else if (countOfHamsters === hamsters) {
//         alert("достали всех хомячков");
//         break;
//     } else {
//         alert("много!")
//     }
// }


// 7. Пользователь вводит два числа n и m, с помощью цикла вывести квадраты всех
// чисел от n до m.
// Например:
// Ввели число 2
// Ввели число 5
// выводим: 2*2 потом 3*3 потом 4*4 потом 5*5
// let n = +prompt('firstNum');
// let m = +prompt('secondNum');
// for(let i = n; i <= m; i++) {
//     console.log(i*i)
// }

// 8. Пользователь вводит число n. Написать цикл, который выводит все числа от n до 0.
// let n = +prompt('number');
// for(let i = n; i >= 0; i--) {
//     console.log(i)
// }

// 9. Написать программу, в которой пользователя просят ввести числа 5 раз. Причем
// каждое последующее число должно быть больше предыдущего, иначе вывести
// ошибку.
// let number
// let preNum
// for(let i = 0; i < 5; i++) {
//     preNum = number
//     number = +prompt('enter your num')
//     if(number <= preNum) {
//         alert('error')
//         break
//     }
// }

// 10. Написать программу-заику. Пользователь вводит число. Вывести количество "за"
// (в слове "заика") равное этому числу.
// Например:
// Вводим 3
// Программа выводит "зазазаика"
// Вводим 5
// Программа выводит "зазазазазаика"
// let za = +prompt('amount of za');
// let result = ''
// for(let i = 0; i < za; i++) {
//     result = result + 'за'
// }
// result = result + 'ика';
// alert(result)

// 1. Пользователь вводит год своего рождения
// вывести в консоль инфу сколько пользователю было в разные года до текущего
// например: 
// вводим 2003:
// выводим: в 2003 было 1 год
// в 2004 было 2 год
// в 2005 было 3 год 
// и тд
// в 2022 было 19 год
// let age = +prompt("enter ur born year");
// let currentAge = 0;
//     for(let i = age; i<=2022; i++) {
//         console.log("В " + i + " было " + currentAge);
//         currentAge++;
//     }

// 2. Пользователь вводит свой возраст. Вывести в консоль 
// сколько лет юудет пользователю каждый год до 2030
// например вводим 14:
// выводим:
// в 2023 будет 15
// в 2024 будет 16
// и тд
// в 2030 будет 22
// let age2 = +prompt("enter ur age");
// for (let i = 2022; i <= 2030; i++) {
//     console.log("В " + i + " будет " + age);
//     age++
// }

// 3. Пользователя спрашивают пароль
// если пароль введен неправильно, спрашивать еще раз
// если правильно вывести "добро пожаловать"
// если отмена вывести "вход отменен"
// let password = prompt("create pswrd");
// let answer;
// for (let i = 0;; i++) {
//     answer = prompt("enter ur pswrd");
//     if (answer === password) {
//         alert("welcome");
//         break;
//     } else if (answer === null) {
//         alert("enter was cancel");
//         break;
//     }
//     alert("wrong pswrd")
// }

// 4. Пользователь вводит число n, вывести на экран все четные числа от 1 до n
// let n = prompt("Введите ваше число");
// for (let i = 2; i <= n; i += 2) {
//     console.log(i);
// }
