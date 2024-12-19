$(function () {
  $('button').on('click', function () {
    $('p').hide('slow', function () {
      alert('다 사라졌어요~');
      $('p').show();
    });
  });
});
