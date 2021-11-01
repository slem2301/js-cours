"use strict";
// // let number = 5;
// // const leftBorder = 1;

// // number = 10;
// // const obj = {
// //     a:55,
// // };
// // obj.a = 10;
// // console.log(obj);

// 'use strict';
// //практический урок 2, 18

// //1
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// //2
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     pivate: false,
// };

// // 3



// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних фильмов', ''),
//         b = prompt('На сколько оцениет его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50){
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// if (personalMovieDB.count < 10 && personalMovieDB){
//     console.log('просмотренно довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//     console.log('Вы классный зритель');
// } else if (personalMovieDB.count >= 30){
//     console.log('Вы киноман');
// } else {
//     console.log('Произошла ошибка');
// }
// console.log(personalMovieDB);


/* Практическое занятие часть 3, 18
1) Первую часть задания повторить по уроку(функции)

2) Создать функцию shpowMyDB, которая будет проверять свойство privat. 
Если стоит в позиции false - выводить в консоль главный объект программы

3) Создать функцию writeYourGenres, в которой пользователь будет 3 раза отвечать на вопроос 
"ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных 
genres
P.S Функцию.
*/

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних фильмов', ''),
//             b = prompt('На сколько оцениет его?', '');

//         if (a != null && b != null && a != '' && b != '' && a.length < 50){
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }
// // rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10 && personalMovieDB){
//         console.log('просмотренно довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//         console.log('Вы классный зритель');
//     } else if (personalMovieDB.count >= 30){
//         console.log('Вы киноман');
//     } else {
//         console.log('Произошла ошибка');
//     }
// }
// // detectPersonalLevel();

// function showMyDB(hidden) {
//     if(!hidden){
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for(let i = 1; i <= 3; i++){
//         const genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
//         personalMovieDB.genres[i-1] = genre;
//     }
// }
// writeYourGenres();


// //урок 20

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function () {   // метод объекта
//         console.log("Test");
//     }
// };

// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// }



//Урок 21 массивы

// const arr = [32, 3, 44, 5, 27, 8,];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b){
//     return a - b;
// }

// // arr.forEach(function(item, i, arr){
// //     console.log(`${i}: ${item} внутри массива ${arr}`)
// // });

// // Урок 22 

// const a = {
//     x: 5,
//     y: 7
// };

// const b = a; // копирование ссылки на объект, но не всего объекта

// function copy(mainObj){
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 10,
//     x: 20,
//     c: {
//         y: 40,
//         z: 8
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 5;

// console.log(newNumbers);
// console.log(numbers);
// // Это поверхностная копия объекта, не копирует вложенные объекты




// Урок 23 основы ООП

// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));   строка 
// console.log(typeof(strObj));   Объект

// console.dir([1,2,3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello() {
//         console.log("Hello");
//     } 
// };

// // const john = {
// //     health: 100
// // };

// const john = Object.create(soldier); // устанавливаем прототип в момент создания объекта

// // john.__proto__ = soldier; // это старый способ применения прототипов

// // Object.setPrototypeOf(john, soldier);
//  // первый аргумент которому хотим назначить прототип, второй - объект, прототип которого мы ставим

// // console.log(john.armor);

// john.sayHello();


/*
Урок 24. Практическое занятие часть 4.

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, 
что перед вами стоит задача переписать его так, чтобы все функции стали методами объекта 
personalMovieDB
Такое случаетмся в реальных продуктах при смене технологий или подхода к архитектуре программы.

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat.
Если оно false - он переключает его в true, если true - переключает в false.
Протестировать с showMyDB

3) в методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять
пустую строку.
Если он это сделал - возвращать его к этому же вопросу. После того как все жанры введены - 
при помощи метода foreEach() вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это название из массива"
*/

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start() {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },
//     rememberMyFilms() {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних фильмов', ''),
//                 b = prompt('На сколько оцениет его?', '');
    
//             if (a != null && b != null && a != '' && b != '' && a.length < 50){
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel() {
//         if (personalMovieDB.count < 10 && personalMovieDB){
//             console.log('просмотренно довольно мало фильмов');
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//             console.log('Вы классный зритель');
//         } else if (personalMovieDB.count >= 30){
//             console.log('Вы киноман');
//         } else {
//             console.log('Произошла ошибка');
//         }
//     },
//     showMyDB(hidden) {
//         if(!hidden){
//             console.log(personalMovieDB);
//         }
//     },
//     writeYourGenres() {
//         for(let i = 1; i <= 3; i++){
//             let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
            
//             if (genre === '' || genre == null){
//                 console.log('Вы ввели некорректные данные или не ввели их вообще');
//                 i--;
//             } else {
//                 personalMovieDB.genres[i-1] = genre;
//             }
//         }
//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
//     },
//     toggleVisibleMyDB() {
//         if (personalMovieDB.privat){
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     }
// };


// // personalMovieDB.rememberMyFilms();
// // personalMovieDB.detectPersonalLevel();
// // personalMovieDB.showMyDB();
// // personalMovieDB.writeYourGenres();
// // personalMovieDB.start();
// personalMovieDB.toggleVisibleMyDB();
// // personalMovieDB.showMyDB();



// Урок 27, задачи на собеседования

// 1) let x = 5; alert( x++ ); // выведет 5
// 2) [ ] + false - null + true
// console.log([ ] + false); // выведет "false" строку, динамическая типизация приводит к строковому типу
// console.log([ ] + false - null); // NaN
// console.log([ ] + false - null + true); // NaN

// // 3) 
// let y = 1; 
// let x = y = 2; 
// console.log(x);

// 4)
// console.log([] + 1 + 2); //"12", пусто массив приводится к пустой строке, и последующие цифры преобразуются в строки

// 5) 
// console.log("1"[0]); // "1". элемент строки по индексу 0

// 6)
// console.log(2 && 1 && null && 0 && undefined); // как только оператор и && встречает ложное условие
//, он выводит его значение. запинается на лжи

// 7)

// console.log(!!( 1 && 2) === (1 && 2));  // выведет false, потому что оператор !! превращает выр в булиновое

// 8)
// console.log(null || 2 && 3 || 4); // выведет 3. && имеет более высокий приоритет
// поэтому && выполняется первым. а оператор || запинается на правдивом выражении.

// 9) 
// const a = [1, 2, 3], b = [1, 2, 3];
// console.log(a == b);// false массивы никогда не равны друг другу, как и объекты.

//10)
// alert(+"Infinity");// выведет Infinity, тип числовой(бесконечность)

//11) 
// console.log("Ёжик" > "яблоко"); // false, посимвольное сравнение, смотреть надо через таблицу юникода

// //12)
// console.log(0 || "" || 2 || undefined || true || false); // 2( || запнется на правде)




//Урок 29

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: black; width: 500px;';

btns[1].style.borderRadius = '100%';

// for (let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'black';
// }
hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
const text = document.createTextNode('Тут был Я');

div.classList.add('black');

wrapper.append(div);  //вставить в конец элемента
// wrapper.appendChild(div); старый вариант

//wrapper.prepend(div);  // вставить в начало элемента
// hearts[0].before(div); //вставить перед элементом
// hearts[0].after(div);  //вставить после элемента
// wrapper.insertBefore(div, hearts[2]); //старый вариант вставки перед элементом



// // circles[0].remove(); удалает элемент
// // wrapper.removeChild(hearts[2]);//удалает элемент старый вариант

// // hearts[0].replaceWith(circles[0]); // заменяет
// wrapper.replaceChild(circles[0], hearts[0]);// заменяет элемент, старый вариант

div.innerHTML = "<h1>Hello, world!</h1>"; // помещает html код в структуру страницы
// div.textContent = "<h1>Hello, world!</h1>"; // помещает текст в структуру страницы

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>'); // позволяет вставлять html код в различные места от блока