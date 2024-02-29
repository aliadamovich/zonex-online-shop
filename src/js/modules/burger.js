
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
		item.addEventListener('click', (e) => {

			if (menuBody.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}
			let nav = e.currentTarget.previousElementSibling;
			if (nav.querySelector('.sublist').classList.contains('sublist__active')) {
				nav.querySelector('.sublist').classList.remove('sublist__active');
				iconMenu.style.display = 'block';
			}
			document.body.classList.remove('_lock');
			// if (asideFilter.classList.contains('_active')) {
			// 	asideFilter.classList.remove('_active');
			// 	document.body.classList.remove('_lock');
			// }
		})
	})

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

	const menuItem = document.querySelectorAll('.menu__link');
	const submenu = document.querySelector('.sublist');
	if (isMobile.any() || window.innerWidth < 992) {
		document.body.classList.add('_touch');
		if (menuItem.length > 0) {
			menuItem.forEach(item => {
				let submenu = item.nextElementSibling;
				if (submenu && submenu !== null) {
					item.addEventListener('click', (e) => {
						e.preventDefault();
						submenu.classList.toggle('sublist__active')
						if (menuBody.classList.contains('_active')) {
							// document.body.classList.remove('_lock');
							iconMenu.classList.remove('_active');
							menuBody.classList.remove('_active');
							iconMenu.style.display = 'none';
						}
					})
				}
			})
		}
	} else {
		document.body.classList.add('_pc');
	}

const sublistArrow = document.querySelectorAll('.menu-sublist__arrow');
sublistArrow.forEach(arrow => {
	arrow.addEventListener('click', () => {
		if (!menuBody.classList.contains('_active')) {
			// document.body.classList.remove('_lock');
			// iconMenu.classList.remove('_active');
			submenu.classList.remove('sublist__active');
			menuBody.classList.add('_active');
			iconMenu.style.display = 'block';
		}
	})
})
}
