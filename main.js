

//Google Maps Click for Location
$(document).ready(function () {
  $('address').each(function () {
     var link = "<a href='http://maps.google.com/maps?q=" + encodeURIComponent( $(this).text() ) + "' target='_blank'>" + $(this).text() + "</a>";
     $(this).html(link);
  });
});

//Click to Call Phone Number

