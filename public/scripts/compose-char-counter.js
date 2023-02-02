/**
 * Attach a function to be run when DOM is ready.
 * This function displays the remaining character count.
 * The counter changes when user finishes typing a key (key up).
 */
$(function () {
  $("#tweet-text").on("keyup", function () {
    // calculates the number of charactered typed by the user (excluding spaces)
    // counter gets the remaining available character count
    let counter = 140 - $(this).val().replace(/\s/g, "").length;

    // Although using a unique ID would be my personal choice, the assignment required us to use a combination of selectors
    const $counter = $(this)
      .siblings("#tweet-text-bottom")
      .children(".counter");

    $counter.html(counter);

    // if counter is less than zero, text will change color to indicate error.
    if (counter < 0) {
      $counter.addClass("error");
      $(this).addClass("error");
    }
    // if counter is greater than -1, text will change back to default.
    if (counter >= 0) {
      $counter.removeClass("error");
      $(this).removeClass("error");
    }
  });
});
