const toggleNewTweetButton = function (selector = this) {
  const $newTweetButton = $("#new-tweet");
  const $newTweetButtonBottom = $("#new-tweet-bottom");

  if ($(selector).scrollTop() === 0) {
    $newTweetButtonBottom.addClass("hide");
    $newTweetButton.removeClass("hide");
  } else if ($(selector).scrollTop() >= 120) {
    $newTweetButtonBottom.removeClass("hide");
    $newTweetButton.addClass("hide");
  }
};

$(() => {
  $("main").on("scroll", function () {
    toggleNewTweetButton("main");
  });

  $(window).on("scroll", function () {
    toggleNewTweetButton();
  });
});
