export function switchGallery() {

	const galleryMain = document.querySelector('.gallery-card__main img');
	const previewCards = document.querySelector('.preview-card');

	if (!galleryMain || !previewCards) {
		return;
	}
	
	previewCards.addEventListener('click', (e) => {
		let currentImage = e.target.closest('.preview-card__img img');
		if (currentImage) {
			previewCards.querySelectorAll('.preview-card__img').forEach(item => {
				item.classList.remove('preview-card__img--chosen');
				
			})
			currentImage.closest('.preview-card__img').classList.add('preview-card__img--chosen');
			galleryMain.src = currentImage.src;
		}
		e.preventDefault();
	})
}



