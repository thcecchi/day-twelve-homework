$(document).ready(function(){

  $("a").click(function (event){

    $(this).closest("li").siblings().children().removeClass("active");
    $(this).addClass("active");

    var scrollSection = "." + $(this).attr('rel');

      $(this).scrollTo(scrollSection);

  });



});
