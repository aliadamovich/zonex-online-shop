export function stepperActivation() {

	const stepperMinus = document.querySelector('.stepper__minus');
	const stepperPlus = document.querySelector('.stepper__plus');
	const stepperValue = document.querySelector('.stepper__input');
	

	function updateStepper() {
		if (stepperValue.textContent <= 1) {
			stepperMinus.classList.add('stepper__minus--disabled');
		} else {
			stepperMinus.classList.remove('stepper__minus--disabled');
		}
		if (stepperValue.textContent > 998) {
			stepperPlus.classList.add('stepper__plus--disabled');
		} else {
			stepperPlus.classList.remove('stepper__plus--disabled');
		}
	}

	stepperMinus.addEventListener('click', (e) => {
		let currentValue = parseInt(stepperValue.textContent);
		currentValue--;
		stepperValue.textContent = currentValue;
		updateStepper();
	})

	stepperPlus.addEventListener('click', (e) => {
		let currentValue = parseInt(stepperValue.textContent);
		currentValue++;
		stepperValue.textContent = currentValue;
		updateStepper();
	})

}
