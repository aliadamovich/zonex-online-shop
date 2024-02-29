export function fadeProduct() {
	const blockProducts = document.querySelectorAll('.block-products__img');

	if (blockProducts.length > 0) {
		blockProducts.forEach(item => {
			item.addEventListener('mouseenter', function () {
				imageFade(item)
			})

		})
		blockProducts.forEach(item => {
			item.addEventListener('mouseleave', function () {
				imageFade(item)
			})
		})
	}

	function imageFade(block) {
		let innerImages = block.querySelectorAll('img');

		innerImages.forEach(el => {
			el.classList.toggle('fadein');
			el.classList.toggle('fadeout');
		})
	}
}