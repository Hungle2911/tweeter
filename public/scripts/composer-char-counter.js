$(document).ready(function() {
  $("#tweet-text").on('input', function() {
    const max = 140;
    const count = $(this).val().length;
    const remaining = max - count
    const counter = $(this).closest("form").find(".counter")
    counter.text(remaining).toggleClass('red-counter', remaining < 0);
  });
});