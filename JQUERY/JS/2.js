// $(document).ready(function () {
$(function () {
  $('button').click(function () {
    // $('p .intro').css('background-color', 'gold');
    // $('ul li:last-child').css('background-color', 'gold');
    // $('a[href!="http://daum.net"]').css('background-color', 'gold');
    $('tr:odd').css('background-color', 'green');
    $('tr:even').css('background-color', 'gold');
  });
});
