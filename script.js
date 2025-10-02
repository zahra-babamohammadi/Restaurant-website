/*****************************************
Nav
*****************************************/
const navlinks = document.querySelector('.nav__links');
const menu = document.querySelector('.hamburger__menu');
const close = menu.querySelector('i')


menu.addEventListener('click', () => {
    navlinks.classList.toggle('show');

    const isopen = navlinks.classList.contains('show');

    close.setAttribute('class', isopen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars')
});
/*****************************************
Scroll Nav
*****************************************/
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
/*****************************************
Menu Filter
*****************************************/
const filterbtn = document.querySelectorAll('.filter-btn');
const filtercard = document.querySelectorAll('.filter__card');

filterbtn.forEach(filter => {
    filter.addEventListener('click', () => {
        const datafilter = filter.dataset.filter;

        filterbtn.forEach(btn => btn.classList.remove('active'));

        filter.classList.add('active');


        filtercard.forEach(card => {
            const cardname = card.dataset.name;

            if (datafilter === 'all' || datafilter === cardname) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

/*****************************************
Scroll
*****************************************/
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
}

ScrollReveal().reveal('.home__img', {
    ...scrollRevealOption,
    delay: 300,
});

ScrollReveal().reveal('.home__text', {
    ...scrollRevealOption,
    delay: 600,
});


ScrollReveal().reveal('.buttons', {
    ...scrollRevealOption,
    delay: 700,
});


ScrollReveal().reveal('.head__title', {
    ...scrollRevealOption,
    delay: 900,
});


ScrollReveal().reveal('.menu__container', {
    ...scrollRevealOption,
    delay: 1200,
});


ScrollReveal().reveal('.filter__btns', {
    ...scrollRevealOption,
    delay: 1100,
});

ScrollReveal().reveal('.filter__card', {
    ...scrollRevealOption,
    delay: 1200,
});


ScrollReveal().reveal('.about__box', {
    ...scrollRevealOption,
    delay: 1200,
});


ScrollReveal().reveal('.about__text', {
    ...scrollRevealOption,
    delay: 1400,
});


ScrollReveal().reveal('.team__card', {
    ...scrollRevealOption,
    delay: 1200,
});

ScrollReveal().reveal('.contact__container', {
    ...scrollRevealOption,
    delay: 1400,
});
