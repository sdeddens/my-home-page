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

// note: Bootstrap data-parent [attribute /.panel-group] accordion association breaks
// across .well class, so, to make sure any open panel in other .well collapses, we do ourself.
$('.scroll-me').on('show.bs.collapse', function() {
  $(".in").not(this).collapse('hide');
});
// Scroll each panel into view when it is expanded.
$('.scroll-me').on('shown.bs.collapse', function() {
  $(this).prev()[0].scrollIntoView();
});

// animated link
var redLight = null;
var signalLightClickEnabled = null;
var $stopGo = $('#stop-go');
var $playTheGame = $('#play-the-game');
var originalSize = $playTheGame.css('fontSize');
var downAnimationTimer = null;
var upAnimationTimer = null;
var upAnimationDelay1 = null;
var upAnimationDelay2 = null;

var upTransition = function(){
    $playTheGame.animate({fontSize: originalSize}, 1000);
    $stopGo.css("opacity", 1.0);
  };
var downTransition = function(){
    $playTheGame.animate({fontSize: "5px"}, 1000);
    $stopGo.css("opacity", .4);
  };

var startStopGo = function(){
  $stopGo.css("background", "firebrick");
  redLight = true;
  signalLightClickEnabled = true;

  // t=0s: start down transition asap
  downTransition();

  // t=1s: start up transition after down transition is complete
  upAnimationDelay1 = setTimeout(function(){
    upTransition();
  }, 1000);

  // t=2s: start down animation after first transition cycle
  downAnimationTimer = setInterval(function(){
    downTransition();
  }, 2000);

  // t=3s: start up animation half way into up animation cycle
  upAnimationDelay2 = setTimeout(function(){
    upAnimationTimer = setInterval(function(){
      upTransition();
    }, 2000);
  },1000);
};

startStopGo();

$stopGo.click(function(){
  if (!signalLightClickEnabled) return;
  if (redLight) {
    signalLightClickEnabled = false;
    clearTimeout(upAnimationDelay1);
    clearTimeout(upAnimationDelay2);
    clearInterval(upAnimationTimer);
    clearInterval(downAnimationTimer);
    $stopGo.css("background", "green");
    redLight = false;
    upTransition();
    setTimeout(function(){
      signalLightClickEnabled = true;
    }, 1000);
  } else {
    startStopGo();
  };
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
