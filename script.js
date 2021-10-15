// let number = 5;
// const leftBorder = 1;

// number = 10;
// const obj = {
//     a:55,
// };
// obj.a = 10;
// console.log(obj);


//практический урок 12

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

const a = prompt('Один из последних фильмов', ''),
      b =  prompt('На сколько оцениет его?', ''), 
      c =  prompt('Один из последних фильмов', ''), 
      d =  prompt('На сколько оцениет его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB.movies);