  /**
  *   选型卡
  **/

  $('.product .list li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('.product .inner').eq($(this).index()).removeClass('yk-hide').siblings().addClass('yk-hide');
  });


