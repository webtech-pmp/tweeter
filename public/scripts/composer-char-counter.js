$(document).ready(function () {
  $('.new-tweet textarea').on('keyup', function (event) {
    let overMax = '#FF0000';
    let maxChar = 140;
    let char = $(this).val();
    if (char.length > 0 && char.length <= 140) {
      $('.isa_error').hide();
    }
    $('.counter').text(maxChar - char.length);
    if (char.length > maxChar) {
      $('.counter').css('color', overMax);
    } else {
      $('.counter').css('color', '#514519');
    }
  });
});