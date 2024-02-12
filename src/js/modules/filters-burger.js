
export function createFiltersBurger() {

	const iconCatalog = document.querySelector('.catalog__icon');
	const asideFilter = document.querySelector('.aside-filter');
	const buttonFilter = document.querySelector('.sort-grid__button-filter');

	if (buttonFilter) {
		buttonFilter.addEventListener('click', function (e) {

			if (!asideFilter.classList.contains('_active')) {
				asideFilter.classList.add('_active');
				document.body.classList.add('_lock');
			}
		})
	}
	if (iconCatalog) {
		iconCatalog.addEventListener('click', () => {
			if (asideFilter.classList.contains('_active')) {
				asideFilter.classList.remove('_active');
				document.body.classList.remove('_lock');
			}
		})
	}
}