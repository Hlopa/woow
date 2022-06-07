'use scrict';

document.addEventListener("DOMContentLoaded", () => {
  //Функция для смены стилей хедера при скролле
  $(window).on("scroll", function () {
    $('.header').toggleClass("active", $(this).scrollTop() > 200);
  });

  //sliders
  $('.reviews-slider').slick({
    slidesToShow: 5,
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
        breakpoint: 2300,
        settings: {
          slidesToShow: 3.4,
        }
      },
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
    responsive: [
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        }
      },
    ]
  });

  $('.main-tastes-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: false,
    prevArrow: '<div class="arrow arrow-left"><img class="slider-arrows slider-arrows__left reviews-slider-arrows" src="images/tastes/prev-arrow.svg" alt=""></img></div>',
    nextArrow: '<div class="arrow arrow-right"><img class="slider-arrows slider-arrows__right reviews-slider-arrows" src="images/tastes/next-arrow.svg" alt=""></img></div>',
  });

  $('.main-reviews-reviews-slider').slick({
    slidesToShow: 4,
    slidesToScroll: -1,
    arrows: false,
    dots: false,
    vertical: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    accessibility: false,
    pauseOnHover: false,

  });



  setInterval(() => {
    //скролл и анимация
    let isScrolling = false;
    let featuresFirst = document.querySelector('.features_first');
    let featuresFirstCat = featuresFirst.querySelector('.features_first-cat');
    let featuresFirstEye = featuresFirst.querySelector('.features_first-cat-eye');
    let featuresFirstEyeLines = featuresFirst.querySelector('.features_first-cat-eye-lines');

    let featuresSecond = document.querySelector('.features_second');
    let featuresSecondCat = featuresSecond.querySelector('.features_second-crasyCats');

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

      if (isPartiallyVisible(featuresSecond, 150)) {
        addClasses(featuresSecondCat, ['animate__animated', 'animate__slideInRight', 'animate__delay-1s']);
      }
    }


    //плавный скролл при клике на меню

    const menuList = document.querySelector('.header__menu-list');


    const getSmoothScroll = () => {
      const ancors = menuList.querySelectorAll('a');
      const menuListItem = document.querySelectorAll('.header__menu-item');

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

      menuListItem.forEach((item) => {
        item.addEventListener('click', function (e) {
          burger.classList.remove('menu-burger__active');
          menuBody.classList.remove('header__menu-body--show');
        })
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


  //выбор аватара в форме 

  const avatars = document.querySelectorAll('.main-reviews-form-avatar-item');

  avatars.forEach((avatar) => {
    avatar.addEventListener('click', function (e) {
      avatars.forEach((item) => {
        item.classList.remove('main-reviews-form-avatar-item-active')
      })
      avatar.classList.toggle('main-reviews-form-avatar-item-active')
    })
  })

  //modal

  let btnOpen = document.querySelectorAll('.btn--open-modal');
  let btnClose = document.querySelector('.btn--close-modal');
  let modal = document.querySelector('.modal');


  btnOpen.forEach((item) => {
    item.addEventListener('click', function (e) {
      modal.classList.add('modal--open');
      burger.classList.remove('menu-burger__active');
      menuBody.classList.remove('header__menu-body--show');
    })
  })

  btnClose.addEventListener('click', function (e) {
    modal.classList.remove('modal--open');
  });



  //отправка отзыва на почту

  const form = document.getElementById('form');

  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault()
    let error = formValidate(form);

    let formData = new FormData(form);

    if (error === 0) {
      form.classList.add('_sending')
      let response = await fetch('sendmail.php', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        form.reset();
        form.classList.remove('_sending')
      } else { 
        alert('Ошибка')
        form.classList.remove('_sending')
       }
    } else {
      return
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.value === '') {
        formAddError(input)
        error++;
      }
    }

    return error

  }

  function formAddError(input) {
    input.parentElement.classList.add('_error-helper');
    input.classList.add('_error');
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('_error-helper');
    input.classList.remove('_error');
  }


})

