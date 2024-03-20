$(document).ready(function() {
  $("#tweet-text").on('input', function() {
    const max = 140;
    let count = $(this).val().length;
    let remaining = max - count
    const counter = $(this).closest("form").find(".counter")
    counter.text(remaining).toggleClass('red-counter', remaining < 0);
  });
});