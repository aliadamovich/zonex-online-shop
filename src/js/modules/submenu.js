// export function submenuStart() {
// 	const isMobile = {
// 		Android: function () {
// 			return navigator.userAgent.match(/Android/i);
// 		},
// 		BlackBerry: function () {
// 			return navigator.userAgent.match(/BlackBerry/i);
// 		},
// 		iOS: function () {
// 			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
// 		},
// 		Opera: function () {
// 			return navigator.userAgent.match(/Opera Mini/i);
// 		},
// 		Windows: function () {
// 			return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
// 		},
// 		any: function () {
// 			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
// 		}
// 	};

// 	const menuItem = document.querySelectorAll('.menu__link');
// 	const space = document.querySelectorAll('.space__cover');

// 	if (isMobile.any()) {
// 		document.body.classList.add('_touch');
// 		if (menuItem.length > 0) {
// 			menuItem.forEach(item => {
// 				let submenu = item.nextElementSibling;
// 				if (submenu && submenu !== null) {
// 					item.addEventListener('click', (e) => {
// 						e.preventDefault();
// 						submenu.classList.toggle('sublist__active')
// 					})
// 				}
// 			})
// 		}
// 	} else {
// 		document.body.classList.add('_pc');
// 	}

// 	if (space.length > 0) {
// 		space.forEach(elem => {
// 			elem.addEventListener('click', (e) => {

// 				let nav = e.currentTarget.previousElementSibling;
// 				if (nav.querySelector('.sublist').classList.contains('sublist__active')) {
// 					nav.querySelector('.sublist').classList.remove('sublist__active')
// 				}
// 			})
// 		})
// 	}

// }