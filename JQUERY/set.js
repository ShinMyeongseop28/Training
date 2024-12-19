$(function () {
  $('#btn_set').on('click', function () {
    $('#google').attr('href', function (i, origValue) {
      return origValue + '/dflesfefasdf';
    });
    // $('#set1').text('변경된 값');
    // $('#set1').html('<b>변경된 값</b> ');
    // $('#email').val('aaaa@aaa.com');
    // $('.set1').text(function (i, origText) {
    //   return '안녕하세요. 저는 ' + origText + '입니다. (' + i + ')';
    // });
  });

  // $('#btn_get').on('click', function () {
  //   alert($('#email').val());
  // });
});
