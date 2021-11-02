// события на мобильных браузерах
//touchstart начало касания
// touchmove событие на движение пальца
// touchend событе на конец прикосновения
// touchenter как только палец зашел на элемент
// touchleave когда палец вышел за пределы элемента
// touchcancel когда палец вышел за пределы браузера

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log(e.touches);

    });
});

// touches дает список всех пальцев, которые сейчас взаимодействуют