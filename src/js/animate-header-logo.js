const multiplier = 0.03;

$(document).ready(function () {
  $(document).mousemove(function (event) {
    // mouse position relative to the document scroll
    const mouseXPos = event.pageX - $(window).scrollLeft();
    const mouseYPos = event.pageY - $(window).scrollTop();

    $("#header-logo").css(
      "transform",
      "rotateY(" +
        (mouseXPos - window.outerWidth / 2) * multiplier +
        "deg) rotateX(" +
        (mouseYPos - window.outerHeight / 2) * multiplier * -1 +
        "deg)"
    );
  });
});
