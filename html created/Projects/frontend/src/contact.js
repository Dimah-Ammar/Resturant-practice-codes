const menuIcon = document.getElementById('menuIcon');
const navLinks =document.getElementById('nav-links');

menuIcon.addEventListener('click',()=>
{
    navLinks.classList.toggle('active');
});