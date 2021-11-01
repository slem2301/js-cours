const btn = document.querySelector('#btn');

// btn.addEventListener('click', () => {
//     alert('click');
// });

// btn.addEventListener('mouseenter', (e) => {
//     console.log(e);
//     // console.log('second click');
//     e.target.remove();
// });

let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    i++;
    if (i == 1){
        btn.removeEventListener('click', deleteElement);
    }
};

btn.addEventListener('click', deleteElement);