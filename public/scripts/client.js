/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$('.error').hide()
$(document).ready(() => {
  // Function to render tweets onto the page
const renderTweets = function(tweets) {
  $('.tweet-container').empty();
  // loops through tweets
  for (let tweet of tweets) {
    let $tweet = createTweetElement(tweet)
    $('.tweet-container').prepend($tweet); 
  }
}
// Function to create HTML elements for a single tweet
const createTweetElement = function(data) {
  const userTweet = $(`
  <article>
  <header class="tweet">
    <div class="avatar">
    <img src="${data.user.avatars}"> 
    <span>${data.user.name}</span>
  </div>
    <div class="username">${data.user.handle}</div>
  </header>
  <main>
  <p>${$('<div>').text(data.content.text).html()}</p> 
    <hr>
  </main>
  <footer>
    <p>${timeago.format(data.created_at)}</p>
    <div id="icons">
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-repeat"></i>
      <i class="fa-solid fa-heart"></i>
      </div>
  </footer>
</article>`)
return userTweet
}
 // Function to load tweets from the server
const loadTweets = () => {
  $.ajax({
    url: '/tweets',
    method: 'GET',
    success: (data) => {
      renderTweets(data);
      $('#tweet-text').val(''); // Clear tweet input field
      $('.counter').val(140); // Reset character counter
    }
  })
}
  $('.tweet-form').on('submit', (event) => {
    event.preventDefault();
    $('.error').hide()
    // Serialize form data
    const data = $('.tweet-form').serialize() 
    // Validate tweet text length
    const tweetText = $('#tweet-text').val();
    if (tweetText.trim().length === 0) {
      $('#short-error').slideDown()
    } else if (tweetText.length > 140) {
      $('#long-error').slideDown()
    } else {
    // If tweet is valid, send POST request to server
    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: data,
      success: (data) => {
        console.log(`post request resolved successfully`);
        loadTweets()
      },
      error: (XMLHttpRequest, textStatus, errorThrown) => {
        alert("Post failed, please try again");
     }
    });
  }})
  // Load tweets when the page is ready
  loadTweets()
})
