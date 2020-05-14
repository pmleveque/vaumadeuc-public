//jQuery to collapse the navbar on scroll
// $(window).scroll(function() {
//     if ($(".navbar").offset().top > 50) {
//         $(".navbar-fixed-top").addClass("top-nav-collapse");
//     } else {
//         $(".navbar-fixed-top").removeClass("top-nav-collapse");
//     }
// });

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});


$(window).scroll(function() {
    if ($(this).scrollTop() > 400)
     {
         $("#fp-nav").fadeIn();
        $('nav').fadeIn();
     }
    else
     {
         $("#fp-nav").fadeOut();
      $('nav').fadeOut();
     }
 });

//  $("body").append(
//     $("<img>")
//     .attr("class","fleche")
//     .attr("src", "assets/fleche.png")
//     .click(function(){
//         var $anchor = $(this);
//         $('html, body').stop().animate({
//           scrollTop: $($anchor.attr('href')).offset().top
//         }, 1500, 'easeInOutExpo');
//     })
// );


// var no_scroll = true;
// $(window).scroll(function() {
//   no_scroll = false
// })

// $(function() {
//   setTimeout(function() {
//     if (no_scroll && window.pageYOffset < 100) {
//       $(".logo-vaumadeuc").fadeOut(1000);
//       setTimeout(function() {
//         $(window).scrollTop($(".accueil-section").offset().top);
//         $(".accueil-section").hide().fadeIn(2000);
//         $(".logo-vaumadeuc").fadeIn(500);
//       }, 1000);

//       setTimeout(function() {
//         $(".navbar").fadeIn(2000);
//       }, 2000);
//     } else {
//       $(".navbar").fadeIn(1000);
//     }
//   }, 2000);
// });
