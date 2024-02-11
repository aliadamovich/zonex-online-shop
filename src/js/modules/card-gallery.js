export function switchGallery() {

	const galleryMain = document.querySelector('.gallery-card__main img');
	const previewCards = document.querySelector('.preview-card');
	
	previewCards.addEventListener('click', (e) => {
		let currentImage = e.target.closest('.preview-card__img img');
		if (currentImage) {
			let currentMainSrc = galleryMain.src;

			galleryMain.src = currentImage.src;
			currentImage.src = currentMainSrc;
		}
		e.preventDefault();
	})
}



