/**
 * Attach a function to be run when DOM is ready.
 * This function container click handlers that toggles form.
 */
$(() => {
  // Desktop version
  // if user scrolled down to below the nav bar, the top bottom will disappear and the bottom button will appear
  $("main").on("scroll", function () {
    toggleNewTweetButton("main");
  });

  // Tablet, mobile version
  // if user scrolled down to below the nav bar, the top bottom will disappear and the bottom button will appear
  $(window).on("scroll", function () {
    toggleNewTweetButton();
  });
});

/**
 * This function takes in a jQuery selctor (default is this keyword) and toggles the new tweet button depending on where the user is on the screen (scroll position).
 *
 * @param {selector} selector The name of the selector (i.e., element, id, class, etc.). If it not given, the default value is 'this'.
 * @return {undefined} This function does not return any value.
 */
const toggleNewTweetButton = function (selector = this) {
  const $newTweetButton = $("#new-tweet");
  const $newTweetButtonBottom = $("#new-tweet-bottom");

  // if user is above the bottom of navbar (120px in height), hide bottom button and show the top button.
  // if user is below the bottom of navbar, hide the top button and show the bottom button.
  if ($(selector).scrollTop() < 120) {
    $newTweetButtonBottom.addClass("hide");
    $newTweetButton.removeClass("hide");
  } else if ($(selector).scrollTop() >= 120) {
    $newTweetButtonBottom.removeClass("hide");
    $newTweetButton.addClass("hide");
  }
};
