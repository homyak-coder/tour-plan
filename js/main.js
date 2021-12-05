$(document).ready(function () {
  const hotelSwiper = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

  effect: "coverFlow",

  keyboard: {
    enabled: true,
    pageUpDown: true
  }

});
const reviewsSwiper = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },

  effect: "coverFlow",

  autoHeight: 'true',

  keyboard: {
    enabled: true,
    pageUpDown: true
  }

});

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener('click', function() {
  console.log('Клик по кнопке меню')
  document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible");
});

var modalButton = $("[data-toggle=modal]");
var closeModalButton = $(".modal__close");
modalButton.on('click', openModal);
closeModalButton.on('click', closeModal)

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
    $('body').css('overflow', 'hidden');
  }
  function closeModal(event) {
    event.preventDefault();
    $('body').css('overflow', 'auto');
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }

$(".modal__dialog").on('click', function() {
$(this).toggleClass("on");
$('.menu-section').toggleClass("on");
$("nav ul").toggleClass('hidden');  
});

$(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
      }
});

});
