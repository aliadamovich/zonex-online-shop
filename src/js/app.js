import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

import * as stepper from "./modules/stepper.js";
stepper.stepperActivation();

import * as gallery from "./modules/card-gallery.js";
gallery.switchGallery();

import * as cardTabs from "./modules/card-tabs.js";
cardTabs.cardTabsSlider();


new SimpleBar(document.querySelector('.sliderbar__left'), { autoHide: false });
// let simpleBarInstance = null;

// function initSimpleBar() {
// 	simpleBarInstance = new SimpleBar(document.querySelector('.sliderbar__left'));
// }

// function destroySimpleBar() {
// 	if (simpleBarInstance) {
// 		simpleBarInstance.destroy();
// 		simpleBarInstance = null;
// 	}
// }

// window.addEventListener('resize', function () {
// 	if (window.innerWidth > 768) {
// 		// Инициализировать SimpleBar, если ширина больше 768px
// 		initSimpleBar();
// 	} else {
// 		// Уничтожить SimpleBar, если ширина меньше или равна 768px
// 		destroySimpleBar();
// 	}
// });

// window.addEventListener('DOMContentLoaded', () => {
// 	if (window.innerWidth > 768) {
// 		initSimpleBar();
// 	} else {
// 		destroySimpleBar();
// 	}
// })




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
	breakpoints: {
		320: {
			slidesPerView: 2,
			slidesPerGroup: 2,
		},
		600: {
			slidesPerView: 3,
			slidesPerGroup: 3,
		},
		768: {
			slidesPerView: 4,
			slidesPerView: 4,
		},
	}
});

const sliderContainer = document.querySelector('.gallery-card');
import { Slider, debounce } from "./modules/slider.js";
const uprF = () => {
	debounce(func, time = 100)
}
const debouncedFunc = debounce(uprF, 100);

new Slider(sliderContainer);

//*Promo closing
import * as promo from "./modules/promo.js";
promo.promoAppear();

//*Фильтры
import * as filters from "./modules/filters.js";
filters.changeFilters();

//*скролл фото карточки товара
import * as adaptiveCard from "./modules/card-adaptive.js";
adaptiveCard.cardAdaptive();

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
