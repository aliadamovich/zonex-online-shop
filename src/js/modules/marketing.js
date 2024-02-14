export function marketingAd() {

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
				removeMarketing();
				e.preventDefault();
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
}