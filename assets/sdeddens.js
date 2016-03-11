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
$('#thispage').on('shown.bs.collapse', function() {
  $('#thispage').prev()[0].scrollIntoView();
});
$('#tictactoe').on('shown.bs.collapse', function() {
  $('#tictactoe').prev()[0].scrollIntoView();
});

// remember to kill this entry when finished with working notice
$('#px').on('shown.bs.collapse', function() {
  $('#px').prev()[0].scrollIntoView();
});

// fix for mobile tool tips... found at: http://jsfiddle.net/xaAN3/
// I added the timer.
// Issue with content off screen when next to edge of screen.
$("abbr").click(function () {
    var $title = $(this).find(".title");
    console.log('titleLength: ',$title);
    if (!$title.length) {
        $(this).append('<span class="title">' + $(this).attr("title") + '</span>');
        $title = $(this).find(".title");
        setTimeout(function(){
          $title.remove();
          // if ($title.length){
        }, 2000);
    } else {
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
