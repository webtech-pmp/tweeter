$(document).ready(function () {
  // --- our code goes here ---
  $('.new-tweet textarea').on('keyup', function (event) {
    let char = $(this).val();
    $('.counter').text(140 - char.length);
    if (char.length > 140) {
      $('.counter').css('color', '#ed2a07');
    } else {
      $('.counter').css('color', '#514519');
    }
  });
});