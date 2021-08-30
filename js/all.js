$(document).ready(function () {
  
  // header下拉式選單
  $('.menu li > a').on('click', function (e) {
    e.preventDefault();
    $(this).parent().find('ul').slideToggle();
    $(this).parent().siblings().find('ul').slideUp(0);
  });

  // swiper
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });

  // scroll top
  // 下拉一定的高度才會顯示scrollTop
  function showBtnCondition() {
    if($(this).scrollTop() > 300) {
      $('.scrollTop').fadeIn();
    } else {
      $('.scrollTop').fadeOut();
    }
  }
  $(window).scroll(showBtnCondition);

  $('.scrollTop').click(function (e) { 
    e.preventDefault();
    $('body, html').animate({
      scrollTop: 0
    }, 500);
  });

});