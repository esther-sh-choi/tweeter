/**
 * This function takes in an array of tweet data objects and calls the createTweetElement function
 * for each tweet data in the array. Then it appends the return value from the createTweetElement function
 * to the #tweets-container section.
 *
 * @param {array} tweetObjects Array of objects that contain tweet data.
 * @return {undefined} This function does not return any value.
 */
const renderTweets = (tweets) => {
  $("#tweets-container").empty();
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);

    $("#tweets-container").append($tweet);
  }
};

/**
 * This function takes one tweet data object and formats each value in the object in HTML format.
 * The HTML format is the indiviaul article element that displays the username, avatar, handle,
 * tweet content, and the time passed since user uploaded the tweet.
 *
 * @param {object} data A single tweet data from the array of tweet data that contains
 * user information, content, and created time.
 * @return {string} A HTML template literal that renders tweet data inside the article element.
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
  const footer = $(`<footer>
    <h6>${myTimeAgo(created_at)}</h6>
    <div class="footer-icons">
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
  </div>
  </footer>`);
  paragraph.text(content.text);
  $tweet.append(header).append(paragraph).append(footer);

  return $tweet;
};

const loadTweets = () => {
  $.getJSON("/tweets/").then((tweetDataArr) => renderTweets(tweetDataArr));
};

$(function () {
  const $form = $(".new-tweet").children("form");
  $form.on("submit", function (event) {
    event.preventDefault();
    const $error = $(this).children("div.error-container");
    const $errorMsg = $error.find(".error-message");
    const $textarea = $(this).children("textarea");
    const $data = $textarea.serialize();

    if (!$textarea.val().trim()) {
      $errorMsg.html("You cannot upload a blank tweet.");
      return $error.removeClass("hidden");
    }
    if ($textarea.val().length > 140) {
      $errorMsg.html("Exceeded the maximum character limit of 140.");
      return $error.removeClass("hidden");
    }

    $textarea.val("");
    const $counter = $(this).children("#tweet-text-bottom").children("output");
    $counter.val(140);
    $.post("/tweets/", $data).then(loadTweets);
  });

  loadTweets();
});
