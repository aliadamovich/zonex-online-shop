export function promoAppear() {
	const promo = document.querySelector('.promo-catalog');

	if (promo) {
		promo.addEventListener('click', (e) => {
			if (e.target.closest('.promo-catalog__close') && !e.currentTarget.classList.contains('promo-catalog__closed')) {
				e.currentTarget.classList.add('promo-catalog__closed');
				document.querySelector('.cover-catalog').style.paddingTop = '90px';
				document.querySelector('.catalog-wrapper .header .container--catalog').style.marginTop = '0';
			}
		})
	}
}