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
  }, 

  allowTouchMove: 'true'

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

  keyboard: {
    enabled: true,
    pageUpDown: true
  },

  allowTouchMove: 'true'

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

// Обработка формы
  $(".form").each(function() {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Name's length must be bigger than 2",
      },
        email: {
          required: "We need your email address",
          email: "Your email address must be in the format of name@domain.com"
      },
        phone: {
          required: "You must enter number",
      }
    }})
  });

$(document).ready(function(){
  $('#phone').mask('+7 (999) 999-99-99');
  $('#phone-1').mask('+7 (999) 999-99-99');
});

AOS.init({
  disable: function() {
    var maxWidth = 992;
    return window.innerWidth < maxWidth;
  }
});

});
