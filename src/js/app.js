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


//!catalog filters accordeon 

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
		item.dataset.counter = 0;
		item.querySelector('.quantity').style.display = 'none';
	})
} )

//!products grid change on button click


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


//! categories check-boxes
const categoryContainer = document.querySelector('.categories-filter');
const categoryChosen = document.querySelector('.grid-filter__choice');

categoryContainer.addEventListener('change', (e) => {
	
		let closestItem = e.target.closest('.content-category__item');
	
		if (closestItem) {
			let checkedInput = closestItem.querySelector('input').checked; 
			let spanText = closestItem.querySelector('.content-category__name').textContent;

			const closestParent = closestItem.closest('.categories-filter__item');
			const counterButton = closestParent.querySelector('.quantity');

			if (!closestParent.dataset.counter) {
				closestParent.dataset.counter = 0;
			}

			let counter = parseInt(closestParent.dataset.counter);

			

			if (checkedInput && spanText) {
				
				addButton(categoryChosen, spanText);
				counter++;
				if (counter > 0) {
					counterButton.style.display = 'inline-flex';
				}
				counterButton.textContent = counter;
			
				closestParent.dataset.counter = counter;
			} else {
				autoRemoveButton(categoryChosen, spanText);
				counter--;
				counterButton.textContent = counter;
				if (counter == 0) {
					counterButton.style.display = 'none';
				}
				closestParent.dataset.counter = counter;
			}
		}
	})

	// function addCounters() {

	// 		this.counter++;
	// 		if (this.counter > 0) {
	// 			this.counterButton.style.display = 'inline-flex';
	// 		}
	// 		this.counterButton.textContent = this.counter;
	// 		this.closestParent.dataset.counter = this.counter;
	// }

	// function removeCounters() {
	// 	this.counter--;
	// 	this.counterButton.textContent = this.counter;
	// 	if (this.counter == 0) {
	// 		this.counterButton.style.display = 'none';
	// 	}
	// 	this.closestParent.dataset.counter = this.counter;
	// }
	

//удаление выбранных категорий по нажатию на крестик и кнопку clear
categoryChosen.addEventListener('click', removeButtonOnClick);

//ф-ция для добавления в HTML кнопок категорий
function addButton(parent, text) {
	parent.style.display = 'flex';

	parent.insertAdjacentHTML(
		'afterbegin',
		`<button class="choice-filter__btn">
	${text}
		<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
					/>
		</svg>
	</button>`)
}



function removeButtonOnClick(event) {
	if (event.target.classList.contains('choice-filter__btn')) {
		event.target.remove();

		let text = event.target.textContent.trim();
		const relatedCheckbox = document.querySelector(`[data-category="${text}"]`);
		relatedCheckbox.querySelector('input').checked = false;
	}

	let children = Array.from(event.currentTarget.children);

	if (event.target.classList.contains('choice-filter__clear')) {
		if (children.length > 0) {
			children.forEach(child => {
				if (!child.classList.contains('choice-filter__clear'))
				child.remove();
				event.currentTarget.style.display = 'none';

				const boxes = categoryContainer.querySelectorAll('input');
				boxes.forEach(el => {
					el.checked = false
				})
			})
		}
		event.currentTarget.style.display = 'none';
	}

	if (event.currentTarget.children.length === 1) {
		event.currentTarget.style.display = 'none';
	}

}

// удаление кнопок при отщелкивании чекбокса
function autoRemoveButton (parent, text) {
	let catButton = Array.from(parent.querySelectorAll('.choice-filter__btn'));
	if (catButton.length > 0) {
		catButton.forEach(button => {
			let buttonData = button.textContent.trimLeft().trimRight();
			if (buttonData === text) {
				button.remove();
			}
		})
	}
	if (catButton.length === 1) {
		parent.style.display = 'none';
	}
}


// class CategoryFilter {
// 	constructor() {
// 		this.categoryContainer = document.querySelector('.categories-filter');
// 		this.categoryChosen = document.querySelector('.grid-filter__choice');

// 		this.categoryContainer.addEventListener('change', this.handleCategoryChange.bind(this));
// 		this.categoryChosen.addEventListener('click', this.removeButton.bind(this));
// 	}

// 	handleCategoryChange(e) {
// 		let closest = e.target.closest('.content-category__item');

// 		if (closest) {
// 			let checkedInput = closest.querySelector('input').checked;
// 			let spanText = closest.querySelector('.content-category__name');

// 			if (checkedInput && spanText) {
// 				console.log(checkedInput);
				
// 				this.addButton(this.categoryChosen, spanText.textContent);
// 				// closest.querySelector('input').classList.add('active');
// 			} else {
// 				console.log(checkedInput);
				
// 				// closest.querySelector('input').classList.remove('active');
// 				this.removeB(this.categoryChosen, spanText.textContent)
// 			}
// 		}
// 	}

// 	addButton(parent, text) {
// 		parent.style.display = 'flex';

// 		parent.insertAdjacentHTML(
// 			'afterbegin',
// 			`<button class="choice-filter__btn">
//                 ${text}
//                 <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"/>
//                 </svg>
//             </button>`);
// 	}

// 	removeButton(event) {
// 		if (event.target.classList.contains('choice-filter__btn')) {
// 			event.target.remove();
// 		}

// 		let children = Array.from(event.currentTarget.children);

// 		if (event.target.classList.contains('choice-filter__clear')) {
// 			children.forEach(child => {
// 				if (!child.classList.contains('choice-filter__clear'))
// 					child.remove();
// 				event.currentTarget.style.display = 'none';
// 			});
// 		}

// 		if (event.currentTarget.children.length === 1) {
// 			event.currentTarget.style.display = 'none';
// 		}
// 	}

// 	removeB (parent, text) {
// 		let catButton = Array.from(parent.querySelectorAll('.choice-filter__btn'));
// 		if (catButton.length > 0) {
// 			catButton.forEach(button => {
// 				if (button.textContent.trim() == text) {
// 					button.remove()
// 				}
// 			})
// 		}
// 	}
// }

// // Использование класса
// const categoryFilter = new CategoryFilter();
