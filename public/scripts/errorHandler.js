const closeErrorModal = (event) => {
  event.preventDefault();
  const $error = $("#tweet-text").next("div.error-container");
  $error.addClass("hidden");
  const $textarea = $("#tweet-text");
  $textarea.val("");
  $textarea.removeClass("error");
  const $counter = $("#tweet-text-bottom").children("output");
  $counter.val(140);
  $counter.removeClass("error");
};

$(() => {
  const $closeButton = $(".new-tweet").find(".close-button");
  $closeButton.on("click", function (event) {
    closeErrorModal(event);
  });

  const $modalBackdrop = $(".new-tweet").find("div.error-container");
  $modalBackdrop.on("click", function (event) {
    if (event.target === this) {
      closeErrorModal(event);
    }
  });
});
