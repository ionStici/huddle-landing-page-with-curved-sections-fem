const form = document.querySelector('.footer__form');
const input = document.querySelector('.footer__input');
const btn = document.querySelector('.footer__btn');
const message = document.querySelector('.footer__form-message');

const corr = () => (message.textContent = 'Check your email please');
const wrong = () => (message.textContent = 'Wrong email format');
const render = () => (message.style.display = 'revert');

const submit = function (e) {
    e.preventDefault();

    // corr();
    // wrong();
    // render();
};

form.addEventListener('submit', submit);
