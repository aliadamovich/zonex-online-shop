

export function toCart() {
	const cart = document.querySelectorAll('.icons-header__cart span');
	const tocartButton = document.querySelectorAll('.content-block__tocart');
	console.log(cart);
	
	let counter = 0;
	tocartButton.forEach(item => {
		item.addEventListener('click', addToCart);
	})

	function addToCart(e) {
		e.preventDefault();
		counter++;
		if (counter > 0) {
			cart.forEach(el => {
				el.style.display = "inline-flex";
			})
		} else {
			el.style.display = "none";
		}
		cart.forEach(element => {
			element.textContent = counter;
		});
	}
};

