$(function () {

  // フロートヘッダーメニュー
  var targetHeight = $('.js-float-menu-target').height();
  $(window).on('scroll', function() {
    $('.js-float-menu').toggleClass('float-active', $(this).scrollTop() > targetHeight);
  });

  // SPメニュー
  $('.js-toggle-sp-menu').on('click', function () {
    $(this).toggleClass('active');
    $('.js-toggle-sp-menu-target').toggleClass('active');
  });

  //SPメニュー押したら閉じる
  $('.menu-link').on('click',function(){
    $('.nav-menu').toggleClass('active');
    $('.js-toggle-sp-menu').toggleClass('active');
  });
});

