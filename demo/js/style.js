$(function(){
  $('#s_circle').bind('click', function(){
    if ($('.s_circle').data('state') === 'close') {
      $('.b_circle').addClass('select');
      $('.bg').show();
      $('.s_circle').data('state', 'open');
    }else{
      $('.b_circle').removeClass('select');
      $('.bg').hide();
      $('.s_circle').data('state', 'close');
    }
  });
});

$(function(){
  $()
});