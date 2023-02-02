/**
 * This function toggles the form, which slides up and down.
 * When the form is closed, the bottom toggle button's label changes to "Show Form".
 * When the form is opened, the bottom toggle button's label changes to "Close Form".
 */
const toggleForm = () => {
  const $form = $("form");
  if ($form.is(":hidden")) {
    // Desktop version
    // If main section's scroll position is below the bottom position of the form (roughly 520px from top)
    // (i.e., if user scrolled down below where the form is/would be)
    // the page will automatically scroll up to display the form when user opens form.
    if ($("main").scrollTop() > 520) {
      $("main").animate(
        {
          scrollTop: $("main").offset().top,
        },
        500
      );
    }
    // Tablet, mobile version
    // If window's scroll position is below the bottom position of header (520px from top)
    // (i.e., if user scrolled down below the header)
    // the page will automatically scroll up to display the form when user opens form.
    if ($(window).scrollTop() > 520) {
      $("html, body").animate(
        {
          scrollTop: $("form").offset().top + 300,
        },
        500
      );
    }

    $form.slideDown("slow");
    $("#toggle-label").html("Close Form");
  } else {
    $form.slideUp("slow");
    $("#toggle-label").html("Show Form");
  }
};

/**
 * Attach a function to be run when DOM is ready.
 * This function container click handlers that toggles form.
 */
$(() => {
  const $newTweetButton = $("button#new-tweet");
  $newTweetButton.on("click", toggleForm);

  const $newTweetButtonBottom = $("#new-tweet-bottom");
  $newTweetButtonBottom.on("click", toggleForm);
});
