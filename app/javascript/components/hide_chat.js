const hideChat = () => {
  $(document).ready(function () {
    $(document).on("click", "#close-show", function () {
      $("#show").hide();
    });
  });
}

export { hideChat }