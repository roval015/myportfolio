const menu = document.querySelector('.menu');
const navigation = document.querySelector('.navigation');
const link = document.querySelector('.navigation li');

menu.addEventListener("click", () => {
    navigation.classList.toggle("open");
})