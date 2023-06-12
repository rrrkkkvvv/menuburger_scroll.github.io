"use strict"


//скроллы
const header = document.querySelector('.header');
const menuLinks = document.querySelectorAll('.menu__link[data-goto]')
document.addEventListener('click', documentActions)

function documentActions(e) {
    const targetElement = e.target;

    if (targetElement.closest('.menu__icon')) {
        header.classList.toggle('_active')
    }


    if (targetElement.closest('[data-goto]')) {

        if (header.classList.contains('_active')) {
            header.classList.remove('_active')
        }

        const goTo = targetElement.closest('[data-goto]').dataset.goto;
        const goToElement = document.querySelector(goTo);
        const headerHeight = document.querySelector('.header').offsetHeight
        if (goToElement) {
            window.scrollTo({
                top: goToElement.offsetTop - (headerHeight),
                behavior: 'smooth'
            })
        }
        e.preventDefault()
    }
}

//


