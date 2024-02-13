import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

import * as stepper from "./modules/stepper.js";
stepper.stepperActivation();

import * as gallery from "./modules/card-gallery.js";
gallery.switchGallery();

import * as cardTabs from "./modules/card-tabs.js";
cardTabs.cardTabsSlider();

// new SimpleBar(document.querySelector('.slidebar__left'));

//*burger
import * as burger from "./modules/burger.js";
burger.burgerStart();

//*Marketing pop-up
import * as marketing from "./modules/marketing.js";
marketing.marketingAd();

//*catalog-burger
import * as filterBurger from "./modules/filters-burger.js";
filterBurger.createFiltersBurger();


//*swiper
const swiperMain = new Swiper('.cover__swiper', {
	loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
});

const swiperCatalog = new Swiper('.cover-catalog__slider', {
	loop: true,
	navigation: {
		nextEl: '#nav-right',
		prevEl: '#nav-left',
	},
	pagination: {
		el: '.cover-catalog__pag',
	},
});

const swiperCard = new Swiper('.related__body', {
	loop: true,
	slidesPerView: 4,
	spaceBetween: 30,
	slidesPerGroup: 4,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});



//*Promo closing
import * as promo from "./modules/promo.js";
promo.promoAppear();

//*Фильтры
import * as filters from "./modules/filters.js";
filters.changeFilters();


//*Картчока товара
import * as cardBlock from "./modules/card-color-size.js";
cardBlock.chooseColor();
cardBlock.chooseSize();

//*to-top
const toTop = document.querySelectorAll('.to-top');
if (toTop.length > 0) {
	toTop.forEach(item => {
		item.addEventListener('click', (e) => {
			e.preventDefault();
			console.log(item);
			
			const coverBlock = document.querySelector('.cover-catalog');
			if (coverBlock) {
				console.log(coverBlock);
				
				coverBlock.scrollIntoView({behavior:'smooth'})
			}
		})
	})
}

//*product fade
const blockProducts = document.querySelectorAll('.block-products__img');

blockProducts.forEach(item => {
	item.addEventListener('mouseenter', function () {
		imageFade(item)
	})
	
})
blockProducts.forEach(item => {
	item.addEventListener('mouseleave', function() {
	 imageFade(item)
	})
})

function imageFade (block) {

	let innerImages = block.querySelectorAll('img');
	
	innerImages.forEach(el => {
		el.classList.toggle('fadein');
		el.classList.toggle('fadeout');
	})
}

// document.addEventListener('DOMContentLoaded', function () {
// 	const imageContainer = document.querySelector('.copycard__image-cont');

// 	window.addEventListener('scroll', function () {
// 		const scrollPosition = window.scrollY;
// 		imageContainer.style.transform = 'translateY(' + scrollPosition + 'px)';
// 	});
// });

document.addEventListener('DOMContentLoaded', function () {
	var imageContainer = document.querySelector('.copycard__image-cont');
	var gridContainer = document.querySelector('.copycard__container');

	window.addEventListener('scroll', function () {
		const containerTop = gridContainer.getBoundingClientRect().top;
		console.log(containerTop);
		// console.log(window.scrollY);
		
		var scrollPosition = window.scrollY - containerTop;
		// console.log(scrollPosition);
		
		var containerHeight = document.querySelector('.copycard__container').offsetHeight;
		var imageHeight = document.querySelector('.copycard__image-cont img').offsetHeight;
		var maxTop = containerHeight - imageHeight;
		// console.log(maxTop);

		if (scrollPosition > maxTop) {
			scrollPosition = maxTop;
		}

		imageContainer.style.transform = 'translateY(' + scrollPosition + 'px)';
	});
});
