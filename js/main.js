$(document).ready(function () {
	// первый слайдер
	const hotelSlider = new Swiper(".hotel-slider", {
		loop: true,
		navigation: {
			nextEl: ".hotel-slider__button_next",
			prevEl: ".hotel-slider__button_prev",
		},

		keyboard: {
			enabled: true,
			onlyInViewport: true,
		},
	});

	
});
