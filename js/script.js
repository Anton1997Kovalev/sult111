"use strict";

let iconMenu = document.querySelector('.menu__icon');
let menuBody = document.querySelector('.menu__body');
let bodyBlock = document.querySelector('body');
function openBurgerMenu() {
	iconMenu.addEventListener('click', function () {
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		bodyBlock.classList.toggle('_active');
	});
}
openBurgerMenu();

function slider() {
	$(document).ready(function () {
		$('.slider').slick({
			dots: false,
			arrows: true,
			slidesToShow: 1,
			autoplay: false,
			speed: 1000,
			autoplaySpeed: 800,
			prevArrow: $('.reviews__btn-arrow-left'),
			nextArrow: $('.reviews__btn-arrow-right'),
		});
	});
}
slider();

let popup = document.querySelector('.popup');
function openVideoPopup() {
	popup.classList.add('_active');
}

function closeVideoPopup() {
	let video = document.getElementById('myVideo');
	popup.classList.remove('_active');

	video.pause();
}
