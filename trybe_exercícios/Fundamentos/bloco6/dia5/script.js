const menu = document.getElementById('menu');
menu.addEventListener('click', function changesClass() {
    const hidden = document.getElementById('nav-menu');
    hidden.classList.toggle('menuOn');
});

const asideUm = document.querySelector('.aside-one');
asideUm.addEventListener('click', function changesClassAsideOne() {
    const hidden = document.getElementById('ul-one');
    hidden.classList.toggle('aside-one-ON');
});

const asideTwo = document.querySelector('.aside-two');
asideTwo.addEventListener('click', function changesClassAsidetwo() {
    const hidden = document.getElementById('ul-two');
    hidden.classList.toggle('aside-two-ON');
});
