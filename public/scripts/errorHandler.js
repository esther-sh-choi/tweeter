/**
 * This function takes in the event object in a click event handler.
 * This will hide the error modal.
 *
 * @param {event} Object Event object created when the user clicks an element.
 * @return {undefined} This function does not return any value.
 */
const closeErrorModal = (event) => {
  event.preventDefault();

  const $error = $("#tweet-text").next("div.error-container");
  $error.addClass("hidden");
};

/**
 * Attach a function to be run when DOM is ready.
 * This function container click handlers that closes the error modal.
 */
$(() => {
  // closeErrorModal function is called when user clicks on the X icon or the OK button in the error modal.
  const $closeButton = $(".new-tweet").find(".close-button");
  $closeButton.on("click", (event) => {
    closeErrorModal(event);
  });

  // closeErrorModal function is called when user clicks on the backdrop.
  const $modalBackdrop = $(".new-tweet").find("div.error-container");
  $modalBackdrop.on("click", function (event) {
    if (event.target === this) {
      closeErrorModal(event);
    }
  });
});
