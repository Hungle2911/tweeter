/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]
const renderTweets = function(tweets) {
  // loops through tweets
  for (let tweet of tweets) {
    let $tweet = createTweetElement(tweet)
    $('.tweet-container').append($tweet); 
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
    <p>${data.created_at}</p>
    <div id="icons">
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-repeat"></i>
      <i class="fa-solid fa-heart"></i>
      </div>
  </footer>
</article>`)
return userTweet
}
renderTweets(data)