
  $(document).ready(function() {
     $("[data-tab]").click(function(event) {
          event.preventDefault();
          $(this).addClass("current");
          $(this).siblings().removeClass("current");
          var tab = $(this).attr("rel");
          $(".tab-container").not(tab).css("display", "none");
          $(tab).fadeIn();
      });
  });