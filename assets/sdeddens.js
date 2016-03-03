// This code is retreaved and exacuted after the jQuary js files are loaded.
// It is designed to defeat trolls from obtaining the email and phone number.
// This is not really a concern.  It is included mostly to show that it can be done.

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

$(.linkedIn).attr('href','https://www.linkedin.com/pub/stephen-deddens/6a/833/21');
