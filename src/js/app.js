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

const gridPr = document.querySelector('.block-products__img');

gridPr.addEventListener('mouseenter', (e) => {
	let imgF = gridPr.querySelectorAll('img');

	imgF.forEach(item => {
		item.classList.toggle('fadein');
		item.classList.toggle('fadeout');
	})


	// setTimeout(function() {
	// 	gridPr.setAttribute('src', 'img/22.jpg');
	// 	gridPr.style.opacity = 1;
	// }, 100)
})

gridPr.addEventListener('mouseleave', (e) => {
	let imgF = gridPr.querySelectorAll('img');

	imgF.forEach(item => {
		item.classList.toggle('fadein');
		item.classList.toggle('fadeout');
	})


	// setTimeout(function() {
	// 	gridPr.setAttribute('src', 'img/22.jpg');
	// 	gridPr.style.opacity = 1;
	// }, 100)
})
// gridPr.addEventListener('mouseleave', (e) => {
// 	gridPr.classList.toggle('fadein');
// 	gridPr.classList.toggle('fadeout');

// 	// setTimeout(function () {
// 	// 	gridPr.setAttribute('src', 'img/21.jpg');
// 	// 	gridPr.style.opacity = 1;
// 	// }, 100)
// })
