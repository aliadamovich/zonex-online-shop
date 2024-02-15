class Slider {
	constructor(element) {
		if (!element) {
			return;
		}
		this.sliderSpace = element;
		this.slideWidth = null;

		if (window.innerWidth <= 768) {
			this.sliderLine = element.querySelector('.slider__line');
			this.sliderImages = element.querySelectorAll('.slide');
			this.buttonNext = element.querySelector('.next');
			this.buttonPrev = element.querySelector('.prev');
			this.dotContainer = element.querySelector('.dots');
			this.dot = element.querySelectorAll('.dot');
			this.countSlide = 0;

			this.setParameters();
			this.setEvents();
		}
		
	}

	setParameters() {
		this.slideWidth = this.sliderSpace.offsetWidth;
		this.sliderLine.style.width = this.slideWidth * (this.sliderImages.length) + 'px';
		this.sliderImages.forEach((item => {
			item.style.width = this.slideWidth + 'px';
			item.style.height = 'auto';
		}));

		this.rollSlider();

	}

	setEvents() {
		window.addEventListener('resize', debounce(this.resizeGalery));

		if (this.buttonNext) {
			this.buttonNext.addEventListener('click', (e) => {
				this.moveNextSlide(e);
			});
		}
		
		if (this.buttonPrev) {
			this.buttonPrev.addEventListener('click', (e) => {
				this.movePrevSlide(e);
			});
		}
		
		if (this.dotContainer) {
			this.dotContainer.addEventListener('click', (e) => {
				this.clickDots(e);
			});
		}
	}
	
	resizeGalery = () => {
		this.setParameters();
		
	};
	

	moveNextSlide(e) {
		if (this.countSlide >= this.sliderImages.length - 1) {
			return
		}
		this.countSlide++;
		this.rollSlider();
	}

	movePrevSlide(e) {
		if (this.countSlide <= 0) {
			return;
		}
		this.countSlide--;
		this.rollSlider();
	}

	clickDots(e) {
		
		const dotTarget = e.target.closest('button');
		if (!dotTarget) {
			return;
		}
		let dotNumber;
		for (let i = 0; i < this.dot.length; i++) {
			if (this.dot[i] === dotTarget) {
				dotNumber = i;
				break;
			}
		}
		if (dotNumber === this.countSlide) {
			return;
		}
		this.countSlide = dotNumber;
		this.rollSlider();
		console.log(dotNumber);
		
	}

	disableButtons() {
		if (this.buttonPrev && this.buttonNext) {
			if (this.countSlide <= 0) {
				this.buttonPrev.classList.add('disable');
			} else {
				this.buttonPrev.classList.remove('disable');
			}
			if (this.countSlide >= this.sliderImages.length - 1) {
				this.buttonNext.classList.add('disable');
			} else {
				this.buttonNext.classList.remove('disable');
			}
		}

	}

	changeActiveDoteClass() {
		for (let i = 0; i < this.dot.length; i++) {
			this.dot[i].classList.remove('active')
		}
		this.dot[this.countSlide].classList.add('active');
	}

	rollSlider() {
		this.sliderLine.style.transform = `translate(-${this.countSlide * this.slideWidth}px)`;
		this.sliderLine.style.transition = 'transform 0.5s ease-in-out';
		this.disableButtons();
		this.changeActiveDoteClass();
		}

};



function debounce(func, time = 100) {
	let timer;
	return function (e) {
		clearTimeout(timer);
		timer = setTimeout(func, time, e)
	}
}

export { Slider, debounce };