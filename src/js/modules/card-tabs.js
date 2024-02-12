export function cardTabsSlider() {
	const leftBar = document.querySelector('.left-slidebar');

	if ( leftBar ) {
		leftBar.addEventListener('click', (e) => {
		
			let currentLink = e.target.closest('.left-slidebar__link');
			if (currentLink) {

				document.querySelectorAll('.left-slidebar__link').forEach(el => el.classList.remove('left-slidebar__link--active'));
				document.querySelectorAll('.right-sliderbar__content').forEach(el => el.classList.remove('right-sliderbar__content--active'));

				currentLink.classList.add('left-slidebar__link--active');
				let currentAttr = currentLink.getAttribute('href');
				let right = document.querySelector(`[data-target="${currentAttr}"]`);
				right.classList.add('right-sliderbar__content--active')
			}
			e.preventDefault();
		})
	}
}