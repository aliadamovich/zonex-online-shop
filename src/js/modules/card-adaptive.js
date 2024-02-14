
// export function cardAdaptive() {

// 	const imageContainer = document.querySelector('.gallery-card');
// 	const previewImages = document.querySelector('.preview-card');
// 	const mainImage = document.querySelector('.gallery-card__main img');

// 	document.addEventListener('DOMContentLoaded', function() {
	
// 		window.addEventListener('scroll', scrollImage)

// 		function scrollImage() {
// 			let containerHeight = imageContainer.clientHeight;
// 			let imageHeight = mainImage.clientHeight;

// 			let scrollPosition = window.scrollY;
// 			let maxTop = containerHeight - imageHeight;

// 			if (scrollPosition > maxTop) {
// 				scrollPosition = maxTop;
// 			}
// 			mainImage.style.transform = `translateY(+${scrollPosition}px)`
// 			previewImages.style.transform = `translateY(+${scrollPosition}px)`
// 		}
// 		window.addEventListener('resize', scrollImage)
// 		scrollImage()
// 	})
// }
