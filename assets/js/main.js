$(document).ready(function () {
  // Initialize the plugin
  var indicatorPos = $(".nav_indicator").offset().left;
  var width = $(window).width();

  //Nav options toggle
  $(".options_icon").click(function (e) {
    e.preventDefault();
    var status = $(".options").attr("status");
    if (status == "open") {
      $(".options_list").css({
        opacity: 0,
        visibility: "hidden",
        top: "2rem",
      });
      $(".options").attr("status", "close");
    } else {
      $(".options_list").css({
        opacity: 1,
        visibility: "visible",
        top: "2.5rem",
      });
      $(".options").attr("status", "open");
    }
  });

  //Nav projects toggle
  $(".projects_nav_item").click(function (e) {
    var dataFilter = $(this).attr("data-filter");
    $(".projects_nav_item").removeClass("active");
    $(this).addClass("active");

    if (dataFilter == "all") {
      $(".projects_select").css("left", "5px");

      $(".projects_item").show();
    } else if (dataFilter == "web") {
      $(".projects_select").css("left", "calc(33% + 5px)");

      $("[data-category = web]").show();
      $("[data-category = design]").hide();
    } else if (dataFilter == "design") {
      $(".projects_select").css("left", "calc(66% + 5px)");

      $("[data-category = design]").show();
      $("[data-category = web]").hide();
    }
  });

  //curent year
  var date = new Date();
  var year = date.getFullYear();
  $(".footer").html("© " + year + " - Kylian BARDINI");

  //Nav
  //Nav toggle
  $(".menu").click(function async(e) {
    e.preventDefault();
    var status = $(this).attr("status");
    if (status == "open") {
      navBtnMove(status);
      $(".nav_list").css("transform", "translateY(-140%)");
      $(".projects_modals-bg").css("display", "none");
      $(this).attr("status", "close");
    } else {
      navBtnMove(status);
      $(".nav_list").css("transform", "translateY(0)");
      $(".projects_modals-bg").css("display", "block");
      $(this).attr("status", "open");
    }
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var height = $(window).height();
    var width = $(window).width();

    //Nav init
    if (width > 1024) {
      $(".nav_list").css({ transform: "translateY(0)" });
    } else {
      //Nav close on click outside
      $(document).mouseup(function (e) {
        var container = $(".nav_list");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          $(".nav_list").css("transform", "translateY(-140%)");
          $(".projects_modals-bg").css("display", "none");
          navBtnMove("open");
          $(".menu").attr("status", "close");
        }
      });

      //Nav close on click on nav item
      $(".nav_item").click(function (e) {
        $(".nav_list").css("transform", "translateY(-140%)");
        $(".projects_modals-bg").css("display", "none");
        navBtnMove("open");
        $(".menu").attr("status", "close");
      });
    }

    //Nav indicator on scroll
    $("section").each(function () {
      var top = $(this).offset().top - height / 2;
      var bottom = top + $(this).outerHeight();
      var id = $(this).attr("id");
      var nav = $(".nav_item[data-scroll='" + id + "']");
      var navLink = $("a[href='#" + id + "']").width();

      if (id == "about" || id == "skills" || id == "projects") {
        if (scroll > top && scroll < bottom) {
          $(".nav_indicator").css("width", "20px");
          var posX =
            nav.offset().left -
            indicatorPos +
            $(".nav_indicator").width() / 2 +
            nav.width() / 2;
          $(".nav_indicator").css("left", posX);
        }
      } else {
        if (scroll > top && scroll < bottom) {
          $(".nav_indicator").css("width", 0);
        }
      }
    });
  });

  //Projects modals open
  $(".projects_item").click(function (e) {
    e.preventDefault();
    var dataModal = $(this).attr("data-modal");
    var modal = $(".projects_modal[data-project='" + dataModal + "']");

    $(".projects_modals-bg").css("display", "block");
    modal.addClass("active");
    $("body").css("overflow", "hidden");
  });

  //Projects modals close
  $(".modal_exit").click(function (e) {
    e.preventDefault();
    $(".projects_modals-bg").css("display", "none");
    $(".projects_modal").removeClass("active");
    $("body").css("overflow", "auto");
  });

  //Projects modals close on click outside
  $(document).mouseup(function (e) {
    var container = $(".projects_modal");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".projects_modals-bg").css("display", "none");
      $(".projects_modal").removeClass("active");
      $("body").css("overflow", "auto");
    }
  });

  //Nav menu button move on click
  function navBtnMove(status) {
    if (status == "open") {
      $(".menu").css("transform", "translateY(0)");
      $(".bar").css({
        transform: "rotate(0)",
        opacity: 1,
      });
    } else if (status == "close") {
      $(".menu").css("transform", "translateY(0rem)");
      $(".bar:nth-child(1)").css(
        "transform",
        "rotate(45deg) translateY(.3rem)"
      );
      $(".bar:nth-child(2)").css(
        "transform",
        "rotate(-45deg) translateY(-.3rem)"
      );
      $(".bar:nth-child(3)").css("opacity", "0");
    }
  }

  //loader svg animation
  $(window).on("load", function () {
    var width = 100, // width of a progress bar in percentage
      perfData = window.performance.timing, // The PerformanceTiming interface
      EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart), // Calculated Estimated Time of Page Load which returns negative value.
      time = parseInt((EstimatedTime / 1000) % 60) * 100;

    $(".loader_bar_progress").animate(
      {
        width: width + "%",
      },
      time
    );

    // When Page is loaded completely, remove the loader
    setTimeout(function () {
      $(".loader").fadeOut(500);
    }, time);
  });
});
