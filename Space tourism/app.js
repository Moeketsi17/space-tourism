const burger = document.querySelector('.burger');
const links = document.querySelector('.nav-links');
const line = document.querySelectorAll('.line')


burger.addEventListener('click', () => {
    links.classList.toggle('active');

    burger.classList.toggle('open')
})






