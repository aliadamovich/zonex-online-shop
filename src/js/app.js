import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

import * as stepper from "./modules/stepper.js";
stepper.stepperActivation();

import * as gallery from "./modules/card-gallery.js";
gallery.switchGallery();

import * as cardTabs from "./modules/card-tabs.js";
cardTabs.cardTabsSlider();

const scrollBar = document.querySelector('.sliderbar__left');
if (scrollBar) {
	new SimpleBar((scrollBar), { autoHide: false });
}


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

//submenu

const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
	},
	any: function () {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};

const menuItem = document.querySelectorAll('.menu__item');
const space = document.querySelectorAll('.sublist__spacecover');

if (isMobile.any()) {
	document.body.classList.add('_touch');
if (menuItem.length > 0) {
	menuItem.forEach(item => {
		item.addEventListener('click', (e) => {
			const sublist = item.querySelector('.sublist');
			if (e.target.classList.contains('menu__link') && sublist) {
				sublist.classList.toggle('__active');
				e.preventDefault();
			}
		})
	})
} else {
	document.body.classList.add('_pc');
}
}
	
if (space.length > 0) {
	space.forEach(elem => {
		elem.addEventListener('click', (e) => {
			// const sibling = e.target.previousElementSibling;
			// console.log(sibling);
			
			if (e.target.closest('.sublist').classList.contains('__active')){
				e.target.closest('.sublist').classList.remove('__active')
			}
		})
	})
}

