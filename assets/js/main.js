var xPos = 0;
var yPos = 0;
var lastScrolled = 0;
var lastPosX = 0;
$(document).ready(function (event) {
  var height = $(document).height();
  var width = $(document).width();

  $(".curtain1").css("height", height + "px");
  $(".curtain2").css("height", height + "px");

  $(".curtain1").css("transform", "translateX(-500%)");
  $(".curtain2").css("transform", "translateX(500%)");

  // Coordinates of the Mouse
  $(document).mousemove(function (event) {
    // console.log(event);
    xPos = event.pageX;
    yPos = event.pageY;
    $("#cursor").css("top", yPos);
    $("#cursor").css("left", xPos);

    // if (xPos < lastPosX) {
    //   $(".cursor").css("transform", "rotate(10deg)");
    // } else {
    //   $(".cursor").css("transform", "rotate(-10deg)");
    // }
    //   return lastPosX = xPos;
  });

  $(
    ".btn, .nav_links, .nav_logo_links, .nav_info-mail, .social-links"
  ).mousemove(function () {
    $(".cursor").css("transform", "rotate(-25deg)");
  });

  $(
    ".btn, .nav_links, .nav_logo_links, .nav_info-mail, .social-links"
  ).mouseout(function () {
    $(".cursor").css("transform", "rotate(0deg)");
  });

  // New Relative Position of Mouse
  // on Scroll Functionality
  $(document).scroll(function (event) {
    if (lastScrolled != $("#scoller").scrollTop()) {
      yPos -= lastScrolled + 3;
      lastScrolled = $("#scoller").scrollTop();
      yPos += lastScrolled + 3;
      $("#cursor").css("top", yPos);
      $("#cursor").css("left", xPos);
    }
  });

  $(".btn").mousemove(function (event) {
    if (this.className == "portfolio_cards btn") {
      var element = $(this).attr("project");

      thisElement = "[project = '" + element + "'] .before";

      // console.log(event);
      var bW = $(thisElement).width() / 2;
      var bH = $(thisElement).height() / 2;

      xPos = event.pageX - $(this).offset().left - bW;
      yPos = event.pageY - $(this).offset().top - bH;

      $(thisElement).css("top", yPos);
      $(thisElement).css("left", xPos);
      $(thisElement).css("transform", "scale(72)");
    }
    if (this.className == "btn" || "portfolio_plus btn") {
      var element = $(this).attr("btn");

      thisElement = "[btn = '" + element + "'] .before";
      // console.log(event);
      var bW = $(thisElement).width() / 2;
      var bH = $(thisElement).height() / 2;

      xPos = event.pageX - $(this).offset().left - bW;
      yPos = event.pageY - $(this).offset().top - bH;

      $(thisElement).css("top", yPos);
      $(thisElement).css("left", xPos);
      $(thisElement).css("transform", "scale(70)");
    }
  });

  $(".btn").mouseout(function (event) {
    if (this.className == "portfolio_cards btn") {
      var element = $(this).attr("project");

      thisElement = "[project = '" + element + "'] .before";

      // console.log(event);
      var bW = $(thisElement).width() / 2;
      var bH = $(thisElement).height() / 2;

      xPos = event.pageX - $(this).offset().left - bW;
      yPos = event.pageY - $(this).offset().top - bH;

      $(thisElement).css("top", yPos);
      $(thisElement).css("left", xPos);
      $(thisElement).css("transform", "scale(0)");
    }
    if (this.className == "btn" || "portfolio_plus btn") {
      var element = $(this).attr("btn");

      thisElement = "[btn = '" + element + "'] .before";
      // console.log(event);
      var bW = $(thisElement).width() / 2;
      var bH = $(thisElement).height() / 2;

      xPos = event.pageX - $(this).offset().left - bW;
      yPos = event.pageY - $(this).offset().top - bH;

      $(thisElement).css("top", yPos);
      $(thisElement).css("left", xPos);
      $(thisElement).css("transform", "scale(0)");
    }
  });

  $(".portfolio_nav_items").click(function () {
    $(".active").removeClass("active");
    $(this).addClass("active");

    var type = $(this).attr("type");

    if (type == "all") {
      $(".portfolio_cards[type='site']").css("display", "block");
      $(".portfolio_cards[type='image']").css("display", "block");
    }

    if (type == "site") {
      $(".portfolio_cards[type='" + type + "']").css("display", "block");
      $(".portfolio_cards[type='image']").css("display", "none");
    }

    if (type == "image") {
      $(".portfolio_cards[type='" + type + "']").css("display", "block");
      $(".portfolio_cards[type='site']").css("display", "none");
    }
  });

  var currentY = new Date();
  $("#currentYear").html(currentY.getFullYear());

  $(".btn").click(function (e) {
    if (this.className == "portfolio_cards_content btn") {
      var element = $(this).attr("btn");

      thisElement = "[modal = '" + element + "']";
      $(thisElement).css("display", "block");
      $(".bg-modal").css("display", "block");
    }
  });

  $(".modal_x").click(function (e) {
    var element = $(this).attr("close");

    thisElement = "[modal = '" + element + "']";
    $(thisElement).css("display", "none");
    $(".bg-modal").css("display", "none");
  });

  $(".bg-modal").click(function (e) {
    $(".portfolio_modal").css("display", "none");
    $(".bg-modal").css("display", "none");
  });

  $(".hamb").click(function (e) {
    if (width < 1024) {
      var element = $(this).attr("state");

      if (element == "close") {
        $(this).attr("state", "open");
        $(".nav_list").css("display", "flex");
        $(".nav_list").css("opacity", 1);
        $(".nav_list").css("transform", "translateY(0)");
        $(".nav_logo").css("transform", "translateY(.5rem)");
        $(this).css("transform", "translateY(.5rem)");
        $(".nav_items").css("transform", "translateY(1rem)");

        $(".hamb .bar3").css("opacity", 0);
        $(".hamb .bar2").css("transform", "rotate(45deg)");
        $(".hamb .bar1").css("top", "50%");
        $(".hamb .bar1").css("transform", "rotate(-45deg)");
      }
      if (element == "open") {
        $(this).attr("state", "close");
        $(".nav_list").css("display", "none");
        $(".nav_list").css("opacity", 0);
        $(".nav_list").css("transform", "translateY(-3rem)");
        $(".nav_logo").css("transform", "translateY(-.5rem)");
        $(this).css("transform", "translateY(-.5rem)");

        $(".hamb .bar3").css("opacity", 1);
        $(".hamb .bar2").css("transform", "rotate(0)");
        $(".hamb .bar1").css("top", "0");
        $(".hamb .bar1").css("transform", "rotate(0)");
      }
    }
  });

  $(".nav_links").click(function (e) {
    if (width < 1024) {
      var element = $(".hamb").attr("state");

      if (element == "open") {
        $(".hamb").attr("state", "close");
        $(".nav_list").css("display", "none");
        $(".nav_list").css("opacity", 0);
        $(".nav_list").css("transform", "translateY(-3rem)");
        $(".nav_logo").css("transform", "translateY(-.5rem)");
        $(".hamb").css("transform", "translateY(-.5rem)");

        $(".hamb .bar3").css("opacity", 1);
        $(".hamb .bar2").css("transform", "rotate(0)");
        $(".hamb .bar1").css("top", "0");
        $(".hamb .bar1").css("transform", "rotate(0)");
      }
    }
  });
});
