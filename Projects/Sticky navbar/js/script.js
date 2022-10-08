'use strict'; 

const headerBox = document.querySelector('.header__container');

window.addEventListener('scroll', function () {
	this.scrollY > 20 ? headerBox.classList.add('sticky') : headerBox.classList.remove('sticky');
});