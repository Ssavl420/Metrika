$(document).ready(function () {
  $(".slider").slick({
    //--Стрелки прокрутки--//
    arrows: true,
    //--Точки прокрутки--//
    dots: false,
    //--Адаптивная высота. при True нужно еще кое-что менять--//
    adaptiveHeight: false,
    //--Количество слайдов которое показывается--//
    slidesToShow: 1,
    //--Количество слайдов на которое листает кнопка--//
    slidesToScroll: 1,
    //--Скорость смены--//
    speed: 1000,
    //--Стиль смены слайдов--//
    easing: "ease",
    //--Круговая прокрутка (разрешена/запрещена)--//
    infinite: true,
    //--Стартовый слайд--//
    initialSlide: 0,
    //--Автоматически проигрывать слайды--//
    autoplay: false,
    //--Период авто прокрутки (по умолчанию "3000" это 3 сек.)--//
    autoplaySpeed: 5000,
    //--Пауза при наведении мышки--//
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    //--Свайпанье на ПК--//
    draggable: true,
    //--Свайпание для тач скринов--//
    swipe: true,
    //--Расстояние которое нужно просвайпать для смены слайда--//
    touchThreshold: 15,
    touchMove: true,
    //--При нажатии на боковые кнопки ожидание анимации--//
    waitForAnimate: true,
    //--Центрирование слайда--//
    centerMode: true,
    variableWidth: true,
    //--Строки--//
    rows: 1,
    slidesPerRow: 1,
    //--Вертикальный слайдер--//
    vertical: false,
    verticalSwiping: false,
    //--Смена слайдов всплыванием--//
    fade: false,
    //--Связать два слайдера между собой--//
    //--asNavFor:".Стиль слайдера", указать двум слайдерам друг друга--//
  });
});

("use strict");

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) {
  document.body.classList.add("_touch");
} else {
  document.body.classList.add("_pc");
}

const burgerMenu = document.querySelector(".burger__icon");
const burgerClose = document.querySelector(".burger__close");
const burgerItem = document.querySelector(".burger__menu");
const burgerContacts = document.querySelector(".burger__footer");

if (burgerMenu) {
  const burger = document.querySelector(".burger");
  burgerMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("body-lock");
    burger.classList.toggle("burger-active");
  });
  burgerClose.addEventListener("click", function (e) {
    document.body.classList.toggle("body-lock");
    burger.classList.toggle("burger-active");
    e.preventDefault();
  });
  burgerItem.addEventListener("click", function (e) {
    document.body.classList.toggle("body-lock");
    burger.classList.toggle("burger-active");
  });
  burgerContacts.addEventListener("click", function (e) {
    document.body.classList.toggle("body-lock");
    burger.classList.toggle("burger-active");
  });
  burger.addEventListener("click", function (e) {
    if (!e.target.closest(".burger__body")) {
      document.body.classList.toggle("body-lock");
      burger.classList.toggle("burger-active");
    }
  });
}

// Обработка ссылок с data-goto, чтобы в адресной строке не было ничего лишнего.
const Links = document.querySelectorAll(".link[data-goto]");
if (Links.length > 0) {
  Links.forEach((Links) => {
    Links.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const Links = e.target;
    if (Links.dataset.goto && document.querySelector(Links.dataset.goto)) {
      const gotoBlock = document.querySelector(Links.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;
      // - document.querySelector('header').offsetHeight
      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}

// Анимированное появление блоков при скролле
const animItems = document.querySelectorAll('._anim-items');
if(animItems.length > 0){
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index ++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if(animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - animItemHeight / animStart;
      }

      if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
        animItem.classList.add("_active");
      } else {
        if(!animItem.classList.contains("_anim-no-hide")) {
        animItem.classList.remove("_active");
      }
    }
  }
}
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }
  setTimeout(() => {
    animOnScroll();
  }, 300);
}
// ------------------------------------------------------------------