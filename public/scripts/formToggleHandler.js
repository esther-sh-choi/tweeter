const toggleForm = () => {
  const $form = $("main").children(".new-tweet").children("form");
  if ($form.is(":hidden")) {
    console.log($(window).scrollTop());
    console.log($("header").height());
    if ($(window).scrollTop() > $("header").height()) {
      $("html, body").animate(
        {
          scrollTop: $form.offset().top,
        },
        1000
      );
    }

    $form.slideDown("slow");
    $("#toggle-label").html("Close Form");
  } else {
    $form.slideUp("slow");
    $("#toggle-label").html("Show Form");
  }
};

$(() => {
  const $newTweetButton = $("button#new-tweet");
  $newTweetButton.on("click", toggleForm);

  const $newTweetButtonBottom = $("#new-tweet-bottom");
  $newTweetButtonBottom.on("click", toggleForm);
});
