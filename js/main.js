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

	// Модальные окна
	const closeModalButton = $(".modal__close");
	closeModalButton.on("click", closeModal);
	$(document).keyup((e) => {
		if (e.key === "Escape") {
			closeModal(e);
		}
	});

	function closeModal(event) {
		event.preventDefault();
		$(".modal__overlay").removeClass("modal__overlay_visible");
		$(".modal__dialog").removeClass("modal__dialog_visible");
	}

	let modalButton = $("[data-toggle=modal]");
	modalButton.on("click", openModal);

	function openModal() {
		let targetModal = $(this).attr("data-href");

		$(targetModal).find(".modal__overlay").addClass("modal__overlay_visible");
		$(targetModal).find(".modal__dialog").addClass("modal__dialog_visible");
	}


	// валидация
	$("[name=phone]").mask("+7(000) 000-00-00");
	

	//обработка форм
	$(".form").each(function () {
		$(this).validate({
			errorClass: "form__error",
			rules: {
				name: {
					required: true,
					minlength: 2,
				},
	
				email: {
					required: true,
					email: true,
				},
			
				phone: {
					required: true,
					minlength: 17,
				},
			
			},
			messages: {
				name: {
					required: "Please specify your name",
					minlength: "The name is too short",
				},
			
				email: {
					required: "Required field",
					email: "Incorrect format",
				},
			
				phone: {
					required: "Required field",
					minlength: "The phone number is too short",
				},
			
			},
		});
	});
// карты
	$(".hotel-about").on("mousemove", function () {
		$(".map__frame").attr(
			"src",
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.0413263625383!2d98.29254741537973!3d7.890745494315375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30503b7bfcd9f903%3A0xf7065fac1e3d7c48!2sDoubleTree%20by%20Hilton%20Phuket%20Banthai%20Resort!5e0!3m2!1sru!2sru!4v1602067964749!5m2!1sru!2sru"
		);
		$(".hotel-about").off("mousemove");
		$(".map__image").css("display", "none");
	});
	
});
