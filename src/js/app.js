import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();


//swiper
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
});

//Marketing pop-up
const marketing = document.querySelector('.marketing');

if (marketing) {

	let counter = 0;
	let delay = 10000;

	const marketingData = [
		{
			photo: '../img/coat.png',
			title: 'Faux shearling double-breasted coat',
			where: 'London, Great Britain',
			when: '15'
		},
		{
			photo: '../img/oversize.png',
			title: 'Oversize t-shirt',
			where: 'New York, Usa',
			when: '10'
		},
		{
			photo: '../img/leather_shoes.png',
			title: 'Black leather shoes',
			where: 'Rome, Italy',
			when: '7'
		}
	]

	marketing.addEventListener('click', (e) => {
		if (e.target.classList.contains('marketing__close')) {
			removeMarketing()
		}
	})


	function removeMarketing() {
		marketing.classList.add('__closed');
	}

	function changeMarketing() {

		if (!marketing.classList.contains('__closed')) {
			removeMarketing();
		};

		setTimeout(() => {
			const productImage = document.querySelector('.img-marketing');
			const productName = document.querySelector('.info-marketing__title');
			const purchaseTime = document.querySelector('.info-marketing__when');
			const purchasePlace = document.querySelector('.info-marketing__where');

			productImage.src = marketingData[counter].photo;
			productName.innerHTML = marketingData[counter].title;
			purchaseTime.innerHTML = `${marketingData[counter].when} minutes ago`;
			purchasePlace.innerHTML = `${marketingData[counter].where}`;

			counter++;
			if (counter >= marketingData.length) {
				counter = 0;
			}
			marketing.classList.remove('__closed');
		}, delay - (delay - 500));

	}

	changeMarketing();
	// setInterval(changeMarketing, delay);
}


//catalog filters accordeon 

const filterBlock = document.querySelectorAll('.categories-filter__item');
const hideFilters = document.querySelector('.hide-filter__btn');

filterBlock.forEach(item => {
	item.addEventListener('click', (e) => {
		if (e.target.closest('.categories-filter__head')) {
			item.classList.toggle('open');
		}
	})
})

hideFilters.addEventListener('click', (e) => {
	filterBlock.forEach(item => {
		item.classList.remove('open');
	})
} )

//products grid change on button click

const gridButtons = document.querySelector('.sort-grid__numbers');
const filterProducts = document.querySelector('.grid-filter__products');

gridButtons.addEventListener('click', function(e) {
	const targetButton = e.target.closest('.sort-grid__btn');
	const buttons = document.querySelectorAll('.sort-grid__btn');
	buttons.forEach(button => {
		button.classList.remove('sort-grid__btn--current', 'nav__link--current')
	})
	if (targetButton) {
		targetButton.classList.add('sort-grid__btn--current', 'nav__link--current');
		let dataBtn = targetButton.dataset.gridbtn;
		filterProducts.dataset.gridcolumns = dataBtn;

	}
	e.preventDefault();
})
