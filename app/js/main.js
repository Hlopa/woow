'use scrict';

document.addEventListener("DOMContentLoaded", () => {
  //Функция для смены стилей хедера при скролле
  $(window).on("scroll", function () {
    $('.header').toggleClass("active", $(this).scrollTop() > 200);
  });

  //sliders
  $('.reviews-slider').slick({
    slidesToShow: 3.4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    accessibility: false,
    responsive: [
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1.5,
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 0.7,
        }
      },
    ]
  });

  $('.tastes_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: false,
    prevArrow: '<div class="arrow arrow-left"><img class="slider-arrows slider-arrows__left tastes-slider-arrows" src="images/tastes/prev-arrow.svg" alt=""></img></div>',
    nextArrow: '<div class="arrow arrow-right"><img class="slider-arrows slider-arrows__right tastes-slider-arrows" src="images/tastes/next-arrow.svg" alt=""></img></div>',
    // responsive: [
    //   {
    //     breakpoint: 1380,
    //     settings: {
    //       slidesToShow: 2,
    //     }
    //   },
    //   {
    //     breakpoint: 800,
    //     settings: {
    //       slidesToShow: 1.5,
    //     }
    //   },
    //   {
    //     breakpoint: 620,
    //     settings: {
    //       slidesToShow: 1,
    //     }
    //   },
    //   {
    //     breakpoint: 400,
    //     settings: {
    //       slidesToShow: 0.7,
    //     }
    //   },
    // ]
  });

  $('.main-tastes-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: false,
    prevArrow: '<div class="arrow arrow-left"><img class="slider-arrows slider-arrows__left reviews-slider-arrows" src="images/tastes/prev-arrow.svg" alt=""></img></div>',
    nextArrow: '<div class="arrow arrow-right"><img class="slider-arrows slider-arrows__right reviews-slider-arrows" src="images/tastes/next-arrow.svg" alt=""></img></div>',
    // responsive: [
    //   {
    //     breakpoint: 1380,
    //     settings: {
    //       slidesToShow: 2,
    //     }
    //   },
    //   {
    //     breakpoint: 800,
    //     settings: {
    //       slidesToShow: 1.5,
    //     }
    //   },
    //   {
    //     breakpoint: 620,
    //     settings: {
    //       slidesToShow: 1,
    //     }
    //   },
    //   {
    //     breakpoint: 400,
    //     settings: {
    //       slidesToShow: 0.7,
    //     }
    //   },
    // ]
  });

  $('.main-reviews-reviews-slider').slick({
    slidesToShow: 4,
    slidesToScroll: -1,
    arrows:false,
    dots: false,
    vertical: true,
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    accessibility: false,
    pauseOnHover: false,
    // responsive: [
    //   {
    //     breakpoint: 1380,
    //     settings: {
    //       slidesToShow: 2,
    //     }
    //   },
    //   {
    //     breakpoint: 800,
    //     settings: {
    //       slidesToShow: 1.5,
    //     }
    //   },
    //   {
    //     breakpoint: 620,
    //     settings: {
    //       slidesToShow: 1,
    //     }
    //   },
    //   {
    //     breakpoint: 400,
    //     settings: {
    //       slidesToShow: 0.7,
    //     }
    //   },
    // ]
  });





  setInterval(() => {
    //скролл и анимация
    let isScrolling = false;
    let featuresFirst = document.querySelector('.features_first');
    let featuresFirstCat = featuresFirst.querySelector('.features_first-cat');
    let featuresFirstEye = featuresFirst.querySelector('.features_first-cat-eye');
    let featuresFirstEyeLines = featuresFirst.querySelector('.features_first-cat-eye-lines');

    window.addEventListener("scroll", throttleScroll, false);

    function throttleScroll(e) {
      if (isScrolling == false) {
        window.requestAnimationFrame(function () {
          scrolling(e);
          isScrolling = false;
        });
      }
      isScrolling = true;
    }

    function isPartiallyVisible(el, num) {
      let elementBoundary = el.getBoundingClientRect();
      let top = elementBoundary.top - num;
      let bottom = elementBoundary.bottom;
      let height = elementBoundary.height - num;
      return ((top + height >= 0) && (height + window.innerHeight >= bottom));
    }

    function addClasses(elem, arr) {
      arr.forEach(clas => {
        elem.classList.add(`${clas}`)
      })
      return elem
    }

    document.addEventListener("DOMContentLoaded", scrolling, false);

    function scrolling(e) {
      if (isPartiallyVisible(featuresFirst, 150)) {
        addClasses(featuresFirstCat, ['animate__animated', 'animate__fadeInRight', 'animate__delay-1s']);
        addClasses(featuresFirstEye, ['animate__animated', 'animate__bounceIn', 'animate__delay-2s']);
        addClasses(featuresFirstEyeLines, ['animate__animated', 'animate__bounceIn', 'animate__delay-3s',]);
      }
    }


    //плавный скролл при клике на меню

    const menuList = document.querySelector('.header__menu-list');

    const getSmoothScroll = () => {
      const ancors = menuList.querySelectorAll('a');
     
      const getScroll = (element) => {
        element.addEventListener('click', function (e) {
          e.preventDefault();
          const blockID = element.getAttribute('href');
          document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          burger.classList.toggle('menu-burger__active');
          menuBody.classList.toggle('header__menu-body--show');
        })
      }

      ancors.forEach((item) => {
        getScroll(item);
      });

    }

    getSmoothScroll();


  }, 2000)

   //Открытие бургер-меню
   const burger = document.querySelector('.menu-burge_root'),
   menuBody = document.querySelector('.header__menu-body');

 burger.addEventListener('click', () => {
   burger.classList.toggle('menu-burger__active');
   menuBody.classList.toggle('header__menu-body--show');
 })

})

