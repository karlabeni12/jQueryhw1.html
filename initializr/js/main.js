function highlight() {
  $('h1').text('Hello');
  $('.jumbotron').addClass('highlighted');
}
function unhighlight() {
  $('h1').text('Hello World');
  $('.jumbotron').removeClass('highlighted');
}
function hide() {
  $('.jumbotron').fadeOut('hide');
}
function show() {
    $('.jumbotron').slideDown('show');
}
$(document).ready(function() {
  $('.jumbotron').on('mouseenter', highlight);
  $('.jumbotron').on('mouseleave', unhighlight);
});
function hide() {
  $  $('.jumbotron').addClass('hide');
}
$(document).ready(function() {
  $('.jumbotron').on('mouseenter', hide);
});
