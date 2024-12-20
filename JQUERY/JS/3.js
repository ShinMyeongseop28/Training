$(function () {
  // $('#btn').click(function () { // 클릭 이벤트
  $('#btn').dblclick(function () {
    // 더블클릭 이벤트
    $(this).hide();
  });
  $('p').mouseenter(function () {
    $(this).css('background-color', 'gold');
  });

  $('p').mouseleave(function () {
    $(this).css('background-color', 'pink');
  });

  $('p').mouseup(function () {
    $(this).css('background-color', 'pink');
  });

  $('p').mousedown(function () {
    $(this).css('background-color', 'gold');
  });

  // $('p').hover(function () {
  //   $(this).css('background-color', 'gold');
  // });
});
