$(document).ready(function () {
  $(document).mousemove(function (event) {
    // mouse position relative to the document scroll
    const mouseXPos = event.pageX - $(window).scrollLeft();
    const mouseYPos = event.pageY - $(window).scrollTop();

    $("#header-logo").css(
      "transform",
      "rotateY(" +
        (mouseXPos - window.outerWidth / 2) / 50 +
        "deg) rotateX(" +
        ((mouseYPos - window.outerHeight / 2) / 50) * -1 +
        "deg)"
    );
  });
});
