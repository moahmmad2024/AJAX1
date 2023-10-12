//When the button is clicked, this text fades out
$(document).ready(function () {
  $("#btnFadeOut").click(function () {
    $("#para1").fadeOut(function () {
      $("#btnFadeOut").text("It's gone");
    });
  });
  //Delete the text
  $("#btnFadeIn").click(function () {
    $("#para2").fadeIn(function () {
      $(this).text("Hello to all smart people :)");
    });
  });
  //Make the text color red
  $("#color-change").click(function () {
    $("#para3").css("color", "red");
  });
});
