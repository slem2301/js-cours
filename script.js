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

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних фильмов', ''),
            b = prompt('На сколько оцениет его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}
// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10 && personalMovieDB){
        console.log('просмотренно довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('Вы классный зритель');
    } else if (personalMovieDB.count >= 30){
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}
// detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for(let i = 1; i <= 3; i++){
        const genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
        personalMovieDB.genres[i-1] = genre;
    }
}
writeYourGenres();