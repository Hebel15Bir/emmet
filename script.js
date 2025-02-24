const hamMenu = document.querySelector('.hamburger');

const navLists = document.querySelector('.navlinks');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    navLists.classList.toggle('active');
})