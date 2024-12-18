$(function () {
  // $('div#a').fadeIn();

  $('#btn_fade_in').on('click', function () {
    $('div#a').fadeIn();
    $('div#b').fadeIn('slow', function () {
      alert('완료됐어요.');
    });
    $('div#c').fadeIn(3000);
  });

  $('#btn_fade_out').on('click', function () {
    $('div#a').fadeOut(3000);
    $('div#b').fadeOut(5000);
    $('div#c').fadeOut(8000);
  });

  $('#btn_fade_toggle').on('click', function () {
    $('div#a').fadeToggle(3000, function () {
      console.log('end');
    });
  });

  $('#btn_fade_to').on('click', function () {
    $('div#a').fadeTo(4000, 0);
  });
});
