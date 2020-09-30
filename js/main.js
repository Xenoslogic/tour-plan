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

	// второй слайдер
	const reviewsSlider = new Swiper(".reviews-slider", {
		loop: true,
		navigation: {
			nextEl: ".reviews-slider__button_next",
			prevEl: ".reviews-slider__button_prev",
		},

		keyboard: {
			enabled: true,
			onlyInViewport: true,
		},
	});

	AOS.init();

	// параллакс в newsletter
	$(".parallax-window").parallax({
		imageSrc: "img/newsletter-bg.jpg",
	});

// мобильное меню
	const menuButton = document.querySelector(".menu-button");
	menuButton.addEventListener("click", () => {
		document.querySelector(".navbar-menu").classList.toggle("navbar-menu_visible");

		const srcImage = document.querySelector(".menu-button__image").src;

		if (srcImage === window.location.href.toString() + "img/three-bars.svg") {
			changeImage("img/x.svg");
		} else if (srcImage === window.location.href.toString() + "img/x.svg") {
			changeImage("img/three-bars.svg");
		}
	});

	function changeImage(pathImg) {
		document.querySelector(".menu-button__image").src = pathImg;
	}


	// валидация
	$("[name=phone]").mask("+7(000) 000-00-00");
	$("[name=footer_phone]").mask("+7(000) 000-00-00");

	//обработка форм
	$(".form").each(function () {
		$(this).validate({
			errorClass: "form__error",
			rules: {
				name: {
					required: true,
					minlength: 2,
				},
				footer_name: {
					required: true,
					minlength: 2,
				},
				email: {
					required: true,
					email: true,
				},
				newsletter_email: {
					required: true,
					email: true,
				},
				phone: {
					required: true,
					minlength: 17,
				},
				footer_phone: {
					required: true,
					minlength: 17,
				},
			},
			messages: {
				name: {
					required: "Please specify your name",
					minlength: "The name is too short",
				},
				footer_name: {
					required: "Please specify your name",
					minlength: "The name is too short",
				},
				email: {
					required: "Required field",
					email: "Incorrect format (expected name@domain.com)",
				},
				newsletter_email: {
					required: "Required field",
					email: "Incorrect format (expected name@domain.com)",
				},
				phone: {
					required: "Required field",
					minlength: "The phone number is too short",
				},
				footer_phone: {
					required: "Required field",
					minlength: "The phone number is too short",
				},
			},
		});
	});

	
});
