$(document).ready(function(){

// click nav highlights
  $("a").click(function (event){
    event.preventDefault();

    $(this).closest("li").siblings().children().removeClass("active");
    $(this).addClass("active");

// click scroll to element
    var scrSection = "." + $(this).attr('rel');
    $("html, body").animate({ scrollTop: $(scrSection).offset().top}, 1000);

  });

// scroll highlight nav position
  $(window).scroll(function() {

    var scrollPos = $(window).scrollTop();

    if (scrollPos >= 200) {
      $("nav a").eq(0).addClass("active");
      $("nav a").eq(1).removeClass("active");
    }

    if (scrollPos >= 500) {
      $("nav a").eq(1).addClass("active");
      $("nav a").eq(0).removeClass("active");
      $("nav a").eq(2).removeClass("active");
    }

    if (scrollPos >= 1500) {
      $("nav a").eq(2).addClass("active");
      $("nav a").eq(1).removeClass("active");
      $("nav a").eq(3).removeClass("active");
    }

    if (scrollPos >= 2500) {
      $("nav a").eq(3).addClass("active");
      $("nav a").eq(2).removeClass("active");
      $("nav a").eq(4).removeClass("active");
    }

    if (scrollPos >= 3500) {
      $("nav a").eq(4).addClass("active");
      $("nav a").eq(3).removeClass("active");
    }
  });

});
