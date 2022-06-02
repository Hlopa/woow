'use scrict';

document.addEventListener("DOMContentLoaded", () => {
  //Функция для смены стилей хедера при скролле
  $(window).on("scroll", function () {
    $('.header').toggleClass("active", $(this).scrollTop() > 200);
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

    function deleteClasses(elem, arr) {
      arr.forEach(clas => {
        elem.classList.remove(`${clas}`)
      })
      return elem
    }
    
    document.addEventListener("DOMContentLoaded", scrolling, false);

    function scrolling(e) {
      if (isPartiallyVisible(featuresFirst, 150)) {
        addClasses(featuresFirstCat, ['animate__animated', 'animate__fadeInRight', 'animate__delay-1s']);
        addClasses(featuresFirstEye, ['animate__animated', 'animate__bounceIn', 'animate__delay-2s']);
        addClasses(featuresFirstEyeLines, ['animate__animated', 'animate__bounceIn',  'animate__delay-3s',]);
      }
    }
  })

})

