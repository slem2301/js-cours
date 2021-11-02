/* Задания на урок 30:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */



/* Задания на урок 33:

01) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

02) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

03) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

04) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

05) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };


    const reclama = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list');

    // 1)

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    // 2)
    const makeChanges = () => {
        genre.textContent = 'драма';

        //3)
        poster.style.cssText = 'background: url(img/bg.jpg)  center center/cover no-repeat';
    };

    // 4) и 5)
    const sortArr = (arr) => {
        arr.sort();
    };
    sortArr(movieDB.movies);

    const filmList = (films, parent) => {
        parent.innerHTML = "";
        // 05)
        sortArr(films);
        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">
                ${i + 1}. <strong>${film}</strong>
                <div class="delete"></div>
            </li>
            `;

            //03)
            const filmItem = document.querySelectorAll('.promo__interactive-item');
            // console.log(filmItem);
            filmItem.forEach((item, i) => {
                item.querySelector('.delete').addEventListener('click', () => {
                    if (i > -1) {
                        movieDB.movies.splice(i, 1);
                    }
                    filmList(films, parent);
                });
            });
        });
    };

    //01) и 02)
    const addForm = document.querySelector('form.add'),
        addBtn = addForm.querySelector('button'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    // let lastFilm = movieDB.movies[movieDB.movies.length - 1];
    // let lengthFilm = movieDB.movies.length - 1;


    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const newFilm = addInput.value,
            likeFilm = checkbox.checked;


        let sliced = newFilm.slice(0, 21);
        if (sliced.length < newFilm.length) {
            sliced += '...';
            movieDB.movies.push(sliced);
        }
        if (newFilm.length > 3) {
            movieDB.movies.push(newFilm);
            filmList(movieDB.movies, movieList);
        }
        //04)
        if (likeFilm) {
            console.log("Добавляем любимый фильм");
        }
        console.log(movieDB.movies);
        // likeFilm.checked = false;

        e.target.reset();
    });

    deleteAdv(reclama);
    makeChanges();
    filmList(movieDB.movies, movieList);

});