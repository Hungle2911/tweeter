/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {
const renderTweets = function(tweets) {
  $('.tweet-container').empty();
  // loops through tweets
  for (let tweet of tweets) {
    let $tweet = createTweetElement(tweet)
    $('.tweet-container').prepend($tweet); 
  }
}
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
    <p>${data.content.text}</p>
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
const loadTweets = () => {
  $.ajax({
    url: '/tweets',
    method: 'GET',
    success: (data) => {
      renderTweets(data);
    }
  })
}
  $('.tweet-form').on('submit', (event) => {
    event.preventDefault();
    const data = $('.tweet-form').serialize()
    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: data,
      success: (data) => {
        console.log(`post request resolved successfully`);
        loadTweets(data)
      }
    });
  })
  loadTweets()
})
