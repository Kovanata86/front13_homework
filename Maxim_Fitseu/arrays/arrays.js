// 1. Создать массив из 10ти элементов и вывести на 
// экран сумму всех элементов массива.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }

// console.log(sum);

// 2. Найти среднее арифметическое значение 
// элементов массива, которые стоят на четных местах.

// const arr = [3, 88, 6, 116, 22, 778, 32, 988];

// let sum = 0;
// let avg = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//         sum += arr[i];
//         avg++;
//     }
// }

// console.log(sum / avg);

// 3. Создать массив, элементы которого равны 
// элементам исходного массива, но с 
// противоположными знаками. (Длина исходного 
// массива должна быть не меньше 10ти элементов)

// const arr = [3, -6, 8, -15, 9, -30, 80, -65, 77, -19];

// const reversedArr = [];


// for (let i = 0; i < arr.length; i++) {
//     reversedArr[i] = -arr[i];
// }


// console.log(arr);
// console.log(reversedArr);

// 1. Автоматически заполнить массив нулями, кроме 
// первого и последнего элементов, которые должны 
// быть единицами. (Количество элементов массива: 8)

// const arr = [];

// for (let i = 0; i < 8; i++) {
//     arr[i] = 0;
//     arr[0] = 1;
//     arr[7] = 1;
// }

// console.log(arr);

///// 

// for (let i = 0; arr.length !==  8; i++) {
//     arr[i] = i === 0 || i === 7 ? 1 : 0;
// }


// 2. Заполнить массив нулями и единицами, при этом 
// данные значения чередуются, начиная с нуля.

// const arr = [];
// arr.length = 8;

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = 1;
//     if (i % 2 === 0) {
//         arr[i] = 0;
//     }
// }

// console.log(arr);

// arr[i] = i % 2 === 0 ? 0 : 1;


// 3. Заполнить массив последовательными нечетными 
// числами начиная с единицы. (Количество элементов 
// массива: 8)

// const arr = [];

// for (let i = 0; arr.length !== 8; i++) {
//     if (i % 2 !== 0) {
//         arr[arr.length] = i;
//     }
    
// }

// console.log(arr);

// 4. Сформировать массив из чисел, которые делятся на 
// 3 (Количество элементов массива: 8)

// const arr = [];
// for (let i = 0; arr.length !== 8; i++) {
//     arr[arr.length] = i * 3;
// }
// console.log(arr);

//////////

// 1. С помощью цикла создать массив, каждый элемент 
// которого равен квадрату своего номера.

// const arr = [];

// for (let i = 0; arr.length !== 8; i++) {
//     arr[i] = i**2;
// }
// console.log(arr);

// 2. С помощью цикла создать массив, который 
// одинаково читается как слева направо, так и справа 
// налево (Количество элементов массива: 9).

// const arr = [];
// for (let i = 0; arr.length !== 9; ) {
//     if (arr.length < 4) {
//         arr [arr.length] = i++;
//     } else {
//         arr [arr.length] = i--;
//     }
// }
// console.log(arr)

// 3. Создать массив из 10 чисел. Вывести на экран 
// количество четных чисел из этого массива.

// const arr = [15, 12, 432, 1312, 44, 2311, 34, 55, 19, 778];
// let res = 0;

// for (let i = 0; i < 10; i++) {
//     if (arr[i] % 2 === 0) {
//         res++;
//     }
// }

// console.log(arr);
// console.log(res);


// 4. Создать массив из 10 чисел. Вывести на экран 
// наибольшее число из этого массива

const arr = [87, 68, -1231, 15, 10, 1, 0, 123, 43, 34];
let result = arr[0];

    for (i = 0; i < 10; i++) {
        if (result < arr[i]) {
            result = arr[i];
        }
    }

console.log(result);

