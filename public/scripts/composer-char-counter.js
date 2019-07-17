$(document).ready(function () {
  // --- our code goes here ---
  $('.new-tweet textarea').on('keyup', function (event) {
    let overMax = #FF0000;
    let maxChar = 140;
    let char = $(this).val();
    $('.counter').text(maxChar - char.length);
    if (char.length > maxChar) {
      $('.counter').css('color', 'overMax');
    } else {
      $('.counter').css('color', '#514519');
    }
  });
});