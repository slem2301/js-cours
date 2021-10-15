// let number = 5;
// const leftBorder = 1;

// number = 10;
// const obj = {
//     a:55,
// };
// obj.a = 10;
// console.log(obj);

'use strict';
//практический урок 2, 18

//1
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

//2
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    pivate: false,
};

// 3



for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних фильмов', ''),
        b = prompt('На сколько оцениет его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('done');
    }

}
console.log(personalMovieDB);