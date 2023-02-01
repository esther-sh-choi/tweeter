$(() => {
  $("main").on("scroll", function () {
    const $newTweetButton = $("#new-tweet");
    const $newTweetButtonBottom = $("#new-tweet-bottom");

    if ($("main").scrollTop() === 0) {
      $newTweetButtonBottom.addClass("hide");
      $newTweetButton.removeClass("hide");
    } else if ($("main").scrollTop() >= 120) {
      $newTweetButtonBottom.removeClass("hide");
      $newTweetButton.addClass("hide");
    }
  });
});
