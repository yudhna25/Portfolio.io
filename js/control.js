var typed = new Typed('.element', {
               	strings: ["Graphic Designer.","UX/UI Designer.","Film Maker.",],
       	 	typeSpeed:50,
        		backSpeed:50,
        		loop:true,
        		});
// JavaScript Document
document.getElementById("toggle-switch").addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
});
document.getElementById("toggle-switch").addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
    document.querySelector("nav").classList.toggle("dark-mode"); // Tác động đến navbar
});
document.getElementById("toggle-switch").addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
    document.querySelector("nav").classList.toggle("dark-mode");

    console.log("Lớp của body:", document.body.classList);
    console.log("Lớp của navbar:", document.querySelector("nav").classList);
});


document.addEventListener("DOMContentLoaded", function () {
  const progressBars = document.querySelectorAll(".progress-bar");
  
  if (progressBars.length === 0) {
    console.error("Không tìm thấy phần tử nào có class .progress-bar. Vui lòng kiểm tra lại HTML.");
  } else {
    console.log("Đã tìm thấy", progressBars.length, "progress bar.");
  }
  
  window.addEventListener("scroll", function() {
    progressBars.forEach(function(bar) {
      const rect = bar.getBoundingClientRect();
      const targetWidth = bar.getAttribute("aria-valuenow");
      
      console.log("Giá trị aria-valuenow:", targetWidth);
      
      if (rect.top < window.innerHeight - 100 && !bar.classList.contains("expanded")) {
        bar.style.width = targetWidth + "%";
        bar.classList.add("visible");
        bar.classList.add("expanded");
        console.log("Đã mở rộng progress bar với giá trị:", targetWidth + "%");
      }
    });
  });
});
/*Phan Timeline*/
(function ($) {
  $(function () {


    $(window).on('scroll', function () {
      fnOnScroll();
    });

    $(window).on('resize', function () {
      fnOnResize();
    });


    var agTimeline = $('.js-timeline'),
      agTimelineLine = $('.js-timeline_line'),
      agTimelineLineProgress = $('.js-timeline_line-progress'),
      agTimelinePoint = $('.js-timeline-card_point-box'),
      agTimelineItem = $('.js-timeline_item'),
      agOuterHeight = $(window).outerHeight(),
      agHeight = $(window).height(),
      f = -1,
      agFlag = false;

    function fnOnScroll() {
      agPosY = $(window).scrollTop();

      fnUpdateFrame();
    }

    function fnOnResize() {
      agPosY = $(window).scrollTop();
      agHeight = $(window).height();

      fnUpdateFrame();
    }

    function fnUpdateWindow() {
      agFlag = false;

      agTimelineLine.css({
        top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
        bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
      });

      f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
    }

    function fnUpdateProgress() {
      var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;

      i = agTop + agPosY - $(window).scrollTop();
      a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
      n = agPosY - a + agOuterHeight / 2;
      i <= agPosY + agOuterHeight / 2 && (n = i - a);
      agTimelineLineProgress.css({height: n + "px"});

      agTimelineItem.each(function () {
        var agTop = $(this).find(agTimelinePoint).offset().top;

        (agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight ? $(this).addClass('js-ag-active') : $(this).removeClass('js-ag-active');
      })
    }

    function fnUpdateFrame() {
      agFlag || requestAnimationFrame(fnUpdateWindow);
      agFlag = true;
    }


  });
})(jQuery);
$('.counter').countUp();


  AOS.init();




