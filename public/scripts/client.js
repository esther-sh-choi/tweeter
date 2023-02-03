/**
 * Attach a function to be run when DOM is ready.
 * This function mainly deals with the form submission and rendering tweets.
 */
$(function () {
  // Submit handler
  // When user clicks on the submit button, the callback is fired.
  const $form = $(".new-tweet").children("form");
  $form.on("submit", errorHandler);

  // Automatically loads tweet data that is already in the server.
  loadTweets();
});

/**
 * This function takes in an array of tweet data objects and calls the createTweetElement function
 * for each tweet data in the array. Then it appends the return value from the createTweetElement function to the #tweets-container section, displaying a list of tweets in the browser.
 * Tweets are displayed in a reverse order because I want the new messages to appear before the older messages.
 *
 * @param {array} tweetObjects Array of objects that contain tweet data.
 * @return {undefined} This function does not return any value.
 */
const renderTweets = (tweets) => {
  $("#tweets-container").empty();

  for (let i = tweets.length - 1; i >= 0; i--) {
    const $tweet = createTweetElement(tweets[i]);

    $("#tweets-container").append($tweet);
  }
};

/**
 * This function takes one tweet data object and formats each value in the object in HTML format.
 * The HTML format is the individual tweet (article elemen) that displays the username, avatar, handle, tweet content, and the time passed since user uploaded the tweet.
 *
 * @param {object} data A single tweet data from the array of tweet data that contains
 * user information, content, and created time.
 * @return {string} A HTML template literal that contains tweet data inside the article element to be rendered.
 */
const createTweetElement = (data) => {
  const { user, content, created_at } = data;

  let $tweet = $('<article class="tweet"></article>');

  const header = $(`<header>
    <img src="${user.avatars}" alt="${user.name}'s avatar" />
    <h3>${user.name}</h3>
    <div class="handle">${user.handle}</div>
  </header>`);

  const paragraph = $("<p></p>");
  paragraph.text(content.text);

  // Although the timeago.format() is already imported and ready to be used,
  // I wanted to practice JS skills by implementing my own timeago function.
  const footer = $(`<footer>
    <h6>${myTimeAgo(created_at)}</h6>
    <div class="footer-icons">
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
  </div>
  </footer>`);

  $tweet.append(header).append(paragraph).append(footer);

  return $tweet;
};

/**
 * This function gets the data from /tweets and returns a JSON format of the data as a parameter.
 * Once the data is loaded successfully, the tweet data arrays are passed into the renderTweets function.
 */
const loadTweets = () => {
  $.getJSON("/tweets/", (tweetDataArr) => renderTweets(tweetDataArr));
};

const errorHandler = function (event) {
  event.preventDefault();
  const $error = $(this).children("div.error-container");
  const $errorMsg = $error.find(".error-message");
  const $textarea = $(this).children("textarea");
  const $data = $textarea.serialize();

  // If there is no input from user, display error modal and the corresponding error message.
  if (!$textarea.val().trim()) {
    $errorMsg.html("You cannot upload a blank tweet.");
    return $error.removeClass("hidden");
  }
  // If user inputs more than 140 characters (excluding spaces), display error modal with corresponding error message.
  if ($textarea.val().replace(/\s/g, "").length > 140) {
    $errorMsg.html("Exceeded the maximum character limit of 140.");
    return $error.removeClass("hidden");
  }

  // If submission successful, reset the form value and the counter display.
  $textarea.val("");
  const $counter = $(this).children("#tweet-text-bottom").children("output");
  $counter.val(140);
  // Make a POST request to /tweets, which will fire loadTweets function.
  $.post("/tweets/", $data, loadTweets);
};
