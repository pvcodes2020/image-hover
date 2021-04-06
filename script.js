$(".main_div").hover(
  function () {
    $(this).find("h3").css("opacity", "1");
    $(this).find("h3").css("transition", "1s");
  },
  function () {
    $(this).find("h3").css("opacity", "0");
    $(this).find("h3").css("transition", "1s");
  }
);