$(document).ready(function () {
   $('.slider').slick({
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
      easing: 'ease',
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
      variableWidth:true,
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