$(function(){
  $('.menuBurger').on('click', function(){
    $(this).find('img.menu_rotate').toggleClass('active');
    $('.menu_bar').slideToggle(200, function(){
      if($(this).css('display') === 'none'){
      $(this).removeAttr('style');
  }
});
});
});
