// This code is retrieved and executed after the jQuary js files are loaded.

// The following is designed to defeat trolls from obtaining the email and phone number.
// This is not really a concern.  It is included mostly to show how it is done.
var m = 'sdeddens';
m += '@gm';
m += 'ail';
m += '.com';
var tgtElmt = $('#myMail');
tgtElmt.attr('href', 'mailto:' + m);
tgtElmt.html('Email: ' + m);

m =  '+1-281';
m += '-300-2630';
tgtElmt = $('#myMobile');
tgtElmt.attr('href', 'tel:' + m);
m =  '+1-281-';
m += '300-3630';
tgtElmt.html('Mobile: ' + m);

// This injects the LinkedIn href into the html.. reason: I have more than one link and
// I want to keep the reference in one place.
$('.aLinkedIn').attr('href','https://www.linkedin.com/pub/stephen-deddens/6a/833/21');

// each line ensures both inline and modal instances reference the identical image.
$('.future-1').attr('src','assets/future-1.jpg');
$('.future-2').attr('src','assets/future-2.jpg');

// Scroll each vignette into view when it is expanded.
// There has to be a way to refactor this, but for now, brute force will have to do.
$('#v0').on('shown.bs.collapse', function() {
  $('#v0').prev()[0].scrollIntoView();
});
$('#v1').on('shown.bs.collapse', function() {
  $('#v1').prev()[0].scrollIntoView();
});
$('#v2').on('shown.bs.collapse', function() {
  $('#v2').prev()[0].scrollIntoView();
});
$('#v3').on('shown.bs.collapse', function() {
  $('#v3').prev()[0].scrollIntoView();
});
$('#v4').on('shown.bs.collapse', function() {
  $('#v4').prev()[0].scrollIntoView();
});
$('#v5').on('shown.bs.collapse', function() {
  $('#v5').prev()[0].scrollIntoView();
});
$('#v6').on('shown.bs.collapse', function() {
  $('#v6').prev()[0].scrollIntoView();
});
$('#v7').on('shown.bs.collapse', function() {
  $('#v7').prev()[0].scrollIntoView();
});
$('#v8').on('shown.bs.collapse', function() {
  $('#v8').prev()[0].scrollIntoView();
});
$('#v9').on('shown.bs.collapse', function() {
  $('#v9').prev()[0].scrollIntoView();
});
$('#thispage').on('shown.bs.collapse', function() {
  $('#thispage').prev()[0].scrollIntoView();
});
$('#tictactoe').on('shown.bs.collapse', function() {
  $('#tictactoe').prev()[0].scrollIntoView();
});

// animated link
var $playTheGame = $('#play-the-game');
var $stopGo = $('#stop-go');
var originalSize = $playTheGame.css('fontSize');
var resetFontFlasher = null;
var changeFontFlasher = setInterval(function(){
  $playTheGame.animate({fontSize: "5px"}, 1000);
  $stopGo.css("opacity", .4);
}, 2000);
setTimeout(function(){
  resetFontFlasher = setInterval(function(){
    $playTheGame.animate({fontSize: originalSize}, 1000);
    $stopGo.css("opacity", 1.0);
  }, 2000);
},1000)

$stopGo.click(function(){
  clearInterval(changeFontFlasher);
  clearInterval(resetFontFlasher);
  setTimeout(function(){
    $playTheGame.css({'fontSize':originalSize});
    $stopGo.css("opacity", 1.0);
    $stopGo.css("background", "green");
  }, 1000);
});

// workaround for no mobile ":hover / tool tips" functionality... found at: http://jsfiddle.net/xaAN3/
// I added the conditional left offset and the setTimeout.
$("abbr").click(function () {
    var $title = $(this).find(".title");
    if (!$title.length) {
      $(this).append('<span class="title">' + $(this).attr("title") + '</span>');
      $title = $(this).find(".title");
      var overlap = $title.offset().left + $title.width() +10 - $(document).width();
      if (overlap > 0) $title.offset({ left: ($title.offset().left - overlap)});
      setTimeout(function(){
        // note: If already removed by second click... jQuery will clean up the mess.
        $title.remove();
      }, 2000);
    }
    else {
      $title.remove();
    };
});

/* Save for later! */
// jQuery(document).ready(function($) {

//     // Fixa navbar ao ultrapassa-lo
//     var navbar = $('#navbar-main'),
//        distance = navbar.offset().top,
//         $window = $(window);

//     $window.scroll(function() {
//         if ($window.scrollTop() >= distance) {
//             navbar.removeClass('navbar-fixed-top').addClass('navbar-fixed-top');
//            $("body").css("padding-top", "70px");
//         } else {
//             navbar.removeClass('navbar-fixed-top');
//             $("body").css("padding-top", "0px");
//         }
//     });
// });
