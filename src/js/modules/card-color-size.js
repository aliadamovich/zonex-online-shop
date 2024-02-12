//выбор цвета 

export function chooseColor() {
	const colorBlock = document.querySelector('.color-info');

	if (colorBlock) {

		colorBlock.addEventListener('click', (e) => {

			const colorButtons = colorBlock.querySelectorAll('.color-info__button');

			colorButtons.forEach(item => {
				item.classList.remove('color-info__button--selected');
			})
			if (e.target.classList.contains('color-info__button')) {
				e.target.classList.add('color-info__button--selected');
				let textColor = e.target.dataset.color;
				colorBlock.querySelector('.color-info__span').textContent = textColor;
			}
		})
	}
}

//выбор размера
export function chooseSize() {
	const sizeBlock = document.querySelector('.size-info');

	if (sizeBlock) {

		sizeBlock.addEventListener('click', (e) => {
			const sizeButtons = sizeBlock.querySelectorAll('.size-info__button');

			sizeButtons.forEach(item => {
				item.classList.remove('size-info__button--selected');
			})
			if (e.target.classList.contains('size-info__button')) {
				e.target.classList.add('size-info__button--selected');
				let textSize = e.target.textContent;
				sizeBlock.querySelector('.size-info__span').textContent = textSize;
			}
			const sizeReset = sizeBlock.querySelector('.size-info__clear');
			if (e.target.classList.contains('size-info__clear')) {
				sizeButtons.forEach(item => {
					item.classList.remove('size-info__button--selected');
					sizeBlock.querySelector('.size-info__span').textContent = 'select a size';
				})
			}
		})
	}
}


