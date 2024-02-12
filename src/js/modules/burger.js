
export function burgerStart() {
	const iconMenu = document.querySelector('.menu__icon');
	const spaceCover = document.querySelectorAll('.space__cover');
	const menuBody = document.querySelector('.menu__body');

	if (iconMenu) {
		iconMenu.addEventListener("click", function (e) {
			if (menuBody.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			} else {
				document.body.classList.add('_lock');
				iconMenu.classList.add('_active');
				menuBody.classList.add('_active');
			}
		});
	}
	spaceCover.forEach(item => {
		item.addEventListener('click', () => {

			if (menuBody.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			if (asideFilter.classList.contains('_active')) {
				asideFilter.classList.remove('_active');
				document.body.classList.remove('_lock');
			}
		})
	})
}
