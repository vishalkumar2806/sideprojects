$(function () {
  $("#preload-logo").velocity({ translateY: "35vh", opacity: 0 }, 0);
  $("#preloader").velocity({ opacity: 0 }, 0);
  $("#wrapper").addClass("preload").velocity({ translateY: "32.45vh" }, 0);
  $("#menu").css({ display: "none" });
  $("#preload-logo").velocity(
    { translateY: 0, opacity: 1 },
    1000,
    [0.7, 0, 0.3, 1]
  );
  $("#preloader").delay(300).velocity({ opacity: 1 }, 800, [0.7, 0, 0.3, 1]);
  $("body").css({ height: $(window).height() });
  $(".gift-card-home .hidden").css({ height: 0, opacity: 0 });
  $(".gift-card-home")
    .click(function (e) {
      var thisvar = $(this);
      if (thisvar.hasClass("show")) {
        thisvar.removeClass("show");
        $("html").velocity("stop");
        thisvar
          .find(".hidden")
          .velocity("stop")
          .velocity({ height: 0, opacity: 0 }, 500, "ease");
      } else {
        var htmlOffset =
          thisvar.offset().top -
          ($(window).height() -
            (thisvar.outerHeight() +
              thisvar.find(".hidden-wrapper").outerHeight())) /
            2 +
          $(window).height() * 0.05;
        thisvar.addClass("show");
        $("html")
          .velocity("stop")
          .velocity("scroll", { duration: 500, offset: htmlOffset });
        thisvar
          .find(".hidden")
          .velocity("stop")
          .velocity(
            {
              height: thisvar.find(".hidden-wrapper").outerHeight(),
              opacity: 1,
            },
            500,
            "ease",
            function () {
              thisvar.find(".hidden").css({ height: "auto" });
            }
          );
      }
    })
    .find(".gift-card-link")
    .click(function (e) {
      e.stopPropagation();
    });
  $(".page-about .hidden").css({ height: 0, opacity: 0 });
  $(".read-more-link").click(function (e) {
    e.preventDefault();
    var readmore = $(this);
    readmore.velocity(
      { height: 0, opacity: 0, marginTop: "-7vw" },
      500,
      "ease"
    );
    readmore
      .parent(".page-about")
      .find(".hidden")
      .velocity(
        {
          height: readmore
            .parent(".page-about")
            .find(".hidden-wrapper")
            .outerHeight(),
          opacity: 1,
        },
        500,
        "ease",
        function () {
          readmore
            .parent(".page-about")
            .find(".hidden")
            .css({ height: "auto" });
        }
      );
  });
  $("#menu-trigger").click(function () {
    if ($(this).hasClass("close")) {
      enableSlideshow();
      $(this).removeClass("close");
      $("#wrapper").removeClass("menu");
      $("#menu").removeClass("menu");
    } else {
      disableSlideshow();
      $(this).addClass("close");
      $("#wrapper").addClass("menu");
      $("#menu").addClass("menu");
    }
  });
  $(window).resize(function () {
    vh = $(window).height();
    vw = $(window).width();
    tt = $("#title").offset().top;
  });
  $(window).trigger("resize");
  enabledSlideshow = true;
  $(window).scroll(function () {
    var scroll = $("body").scrollTop();
    if (scroll > tt && enabledSlideshow) {
      enabledSlideshow = false;
      disableSlideshow();
      console.log("disabled");
    } else if (scroll <= tt && !enabledSlideshow) {
      enabledSlideshow = true;
      enableSlideshow();
      console.log("enabled");
    }
  });
  slides = $(".start-gift-card");
  sCur = 1;
  sLen = slides.length;
  $("#switch").click(function () {
    sCur += 1;
    if (sCur >= sLen) sCur = 0;
    var next = sCur + 1;
    if (next >= sLen) next = 0;
    var prev = sCur - 1;
    if (prev < 0) prev = sLen - 1;
    slides.each(function (i) {
      if (i == sCur)
        $(this).removeClass("pos-0 pos-1 pos-2 pos-3").addClass("pos-0");
      if (i == next)
        $(this).removeClass("pos-0 pos-1 pos-2 pos-3").addClass("pos-2");
      if (i == prev)
        $(this).removeClass("pos-0 pos-1 pos-2 pos-3").addClass("pos-1");
      if (i != sCur && i != next && i != prev)
        $(this).removeClass("pos-0 pos-1 pos-2 pos-3").addClass("pos-3");
    });
  });
  enableSlideshow = function () {
    if (typeof slideshow != "undefined") clearInterval(slideshow);
    slideshow = setInterval(function () {
      $("#switch").trigger("click");
    }, 1500);
  };
  disableSlideshow = function () {
    if (typeof slideshow != "undefined") clearInterval(slideshow);
  };
  giftcard = $(".choose-gift-card");
  gboverlay = $("#gboverlay");
  statustext = $("#statustext");
  generatorbox = $("#generatorbox");
  gbmouse = $("#gbmouse");
  progress = $("#sbcomplete");
  wholder = $("#widgetholder");
  gblogo = $("#genlogo");
  ts = 600;
  as = 400;
  ae = "ease";
  psMin = as;
  psMax = 2000;
  psLongMin = 8000;
  psLongMax = 12000;
  canClose = false;
  code = $("#genreturn");
  giftcard.click(function (e) {
    e.preventDefault();
    $("#widgetholder").append(
      '<iframe src="' +
        $("#widgetholder").attr("whsrc") +
        '" style="width: 100%; height: 100%;"></iframe>'
    );
    gboverlay.css({ display: "block" });
    var cclone = $(this).clone();
    $(gboverlay).append(cclone);
    $(this).css({ opacity: 0 });
    var fixLeft = 0;
    if (parseInt(cclone.css("marginLeft")) < 0)
      fixLeft = parseInt(cclone.css("marginLeft"));
    var cat = $(this).offset().top - $("body").scrollTop();
    var cal = $(this).offset().left;
    var gbw = generatorbox.width();
    var gbh = generatorbox.height();
    cclone
      .attr("id", "animateCard")
      .css({
        position: "fixed",
        top: cat,
        left: cal,
        margin: 0,
        opacity: 1,
        zIndex: 1,
      });
    setTimeout(function () {
      gbmouse.addClass("show");
      var ccw = cclone.width();
      var cch = cclone.height();
      scx = ((generatorbox.width() / cclone.width()) * 1.4 - 1) / 2 + 1;
      scy = (generatorbox.height() / cclone.height() - 1) / 2 + 1;
      cclone.velocity(
        {
          top: cat + (vh / 2 - cch / 2 - cat) / 2,
          left: cal + (vw / 2 - ccw / 2 - cal) / 2,
          scaleX: scx,
          scaleY: scy,
          opacity: 0.5,
          rotateX: "-90deg",
        },
        200,
        "ease-in",
        function () {
          cclone.css({ display: "none" });
          gsx = cclone.width() / generatorbox.width();
          gsy = (cclone.height() / generatorbox.height()) * scy;
          generatorbox.velocity(
            {
              top: cat + cch / 2 + (vh / 2 - cat - cch / 2) / 2,
              left: cal + ccw / 2 + (vw / 2 - cal - ccw / 2) / 2,
              scaleX: gsx,
              scaleY: gsy,
              opacity: 0.5,
              rotateX: "90deg",
            },
            0
          );
          generatorbox.velocity(
            {
              top: "50%",
              left: "50%",
              opacity: 1,
              scaleX: 1,
              scaleY: 1,
              rotateX: 0,
            },
            200,
            "ease-out",
            function () {
              startGenerate();
            }
          );
        }
      );
      cantClose();
    }, 50);
  });
  function cantClose() {
    gbmouse.click(function (e) {
      gboverlay.addClass("noclick");
      setTimeout(function () {
        gboverlay.removeClass("noclick");
      }, 150);
    });
  }
  function startGenerate() {
    level1 = $("#hacklines .level1");
    level2 = $("#hacklines .level2");
    level3 = $("#hacklines .level3");
    sbLength = $("#statusbar").width();
    statustext.html(level1.eq(0).html());
    progress.css({ width: 0 });
    level = 0;
    setTimeout(function () {
      generateLevel1();
    }, 500);
  }
  function generateLevel1() {
    var duration = Math.random() * (psMax - psMin) + psMin;
    var pWidth = (sbLength / 2 / level1.length) * (level + 1);
    pWidth = (pWidth / sbLength) * 100;
    progress.velocity({ width: pWidth + "%" }, duration, "linear", function () {
      if (level >= level1.length - 1) {
        $("#sbcirca2, #step2").addClass("active");
        changeText(level2.eq(0).html());
        generateLevel2();
      } else {
        level += 1;
        changeText(level1.eq(level).html());
        generateLevel1();
      }
    });
  }
  function generateLevel2() {
    generatorbox.addClass("big");
    code.addClass("active");
    gcParts = code.attr("format").split("-");
    sTimer = setInterval(function () {
      code.html(shuffleText(gcParts, false));
    }, 50);
    var pWidth = sbLength;
    var duration = Math.random() * (psLongMax - psLongMin) + psLongMin;
    progress.velocity({ width: "100%" }, duration, "linear", function () {
      $("#sbcirca3, #step3").addClass("active");
      changeText(level3.eq(0).html());
      gblogo.addClass("hide");
      setTimeout(function () {
        wholder.addClass("show");
      }, 600);
      clearInterval(sTimer);
      code.html(shuffleText(gcParts, true));
      setTimeout(function () {
        code.find("span.final").addClass("active");
      }, 10);
    });
  }
  function shuffleText(tParts, tFinal) {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    var tCode = "";
    for (var j = 0; j < tParts.length; j++) {
      var stringRandom = "";
      for (var i = 0; i < tParts[j].length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        stringRandom += chars.substring(rnum, rnum + 1);
      }
      if (tFinal) {
        if (j === 0) {
          tCode += "<span>" + stringRandom + "</span>";
        } else if (j > 0 && j < tParts.length - 1) {
          tCode += "-<span>" + stringRandom + "</span>";
        } else if (j == tParts.length - 1) {
          tCode +=
            '-<span class="final">' + tParts[tParts.length - 1] + "</span>";
        }
      } else {
        if (j === 0) {
          tCode += "<span>" + stringRandom + "</span>";
        }
        if (j !== 0) {
          tCode += "-<span>" + stringRandom + "</span>";
        }
      }
    }
    return tCode;
  }
  unlockCode = function () {
    $("#genreturn span").each(function () {
      if (!$(this).hasClass("final")) {
        var string = code.attr("format").split("-");
        string = string[string.length - 1];
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";
        var tCode = "";
        var stringRandom = "";
        for (var i = 0; i < string.length; i++) {
          var rnum = Math.floor(Math.random() * chars.length);
          stringRandom += chars.substring(rnum, rnum + 1);
        }
        $(this).html(stringRandom).addClass("active");
      }
    });
  };
  function changeText(text) {
    statustext.velocity({ opacity: 0 }, as / 2, ae, function () {
      statustext.html(text);
      statustext.velocity({ opacity: 1 }, as / 2, ae);
    });
  }
});
$(window).load(function () {
  setTimeout(function () {
    $("body, html").scrollTop(0);
    $("#start")
      .velocity({ translateY: "50vh" }, 0)
      .velocity({ translateY: 0 }, 1000, [0.7, 0, 0.3, 1]);
    $("#title")
      .velocity({ translateY: "75vh" }, 0)
      .velocity({ translateY: 0 }, 1000, [0.7, 0, 0.3, 1]);
    $("#gift-cards")
      .velocity({ translateY: "75vh" }, 0)
      .velocity({ translateY: 0 }, 1000, [0.7, 0, 0.3, 1]);
    $("#page")
      .velocity({ translateY: "75vh" }, 0)
      .velocity({ translateY: 0 }, 1000, [0.7, 0, 0.3, 1]);
    $("#preload-logo").velocity(
      { translateY: "-32.45vh", opacity: 0 },
      1000,
      [0.7, 0, 0.3, 1]
    );
    $("#preloader").velocity({ opacity: 0 }, 500, [0.7, 0, 0.3, 1]);
    $("#wrapper").velocity({ translateY: 0 }, 1000, [0.7, 0, 0.3, 1]);
    $("#preload").velocity({ opacity: 0 }, 1000, [0.7, 0, 0.3, 1], function () {
      enableSlideshow();
      $("#preload").css({ display: "none" });
      $("body").css({ height: "auto" });
      $("#wrapper").removeClass("preload").css({ transform: "" }, 0);
      $("#menu").css({ display: "block" });
    });
  }, 1500);
});
