$(document).ready(function () {
  let mouseXPos = 0;

  $(document).mousemove(function (event) {
    mouseXPos = event.pageX;
  });

  setInterval(function () {
    $("#header-logo").css("transform", "rotateY(" + (mouseXPos - window.outerWidth / 2) / 50 + "deg)");
  }, 50);
});
