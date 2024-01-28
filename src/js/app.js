import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();


//swiper
const swiper = new Swiper('.cover__swiper', {
	loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
});

//Marketing pop-up

const marketing = document.querySelector('.marketing');
const productName = document.querySelector('.info-marketing__title');
const purchasePlace = document.querySelector('.info-marketing__where');
let counter = 0;

const marketingData = [
	{
		title: 'Moms jeans',
		where: 'Buenos Aires, Argentina'
	},
	{
		title: 'Oversize t-shirt',
		where: 'New York, Usa'
	},
	{
		title: 'Black leather shoes',
		where: 'Minsk, Belarus'
	}
]

marketing.addEventListener('click', (e) => {
	if (e.target.classList.contains('marketing__close')) {
		removeMarketing()
	}
})


function removeMarketing() {
	marketing.classList.add('__closed');
	setTimeout(() => {
		addMarketing();
	}, 3000);

}

function addMarketing() {
	
	productName.innerHTML = marketingData[counter].title;
	purchasePlace.innerHTML = `15 minutes ago ${marketingData[counter].where}`;
	if (counter >= marketingData.length - 1) {
		counter = 0;
	}
	marketing.classList.remove('__closed');
	counter++;
	
}

// function changeMarketing() {
	
// 	setTimeout(() => {
// 		removeMarketing();
// 		productName.innerHTML = marketingData[counter].title;
// 		purchasePlace.innerHTML = `15 minutes ago ${marketingData[counter].where}`;
// 	}, 2000);

// 	if (counter >= marketingData.length) {
// 		counter = 0;
// 	}
// 	addMarketing();
// 	counter++;
// 	console.log(counter);
// };

// changeMarketing();