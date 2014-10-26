// Adding facebook album photos to event section
$.get( "https://graph.facebook.com/INFORUMsf/albums", function (albums) {

  for ( var albumIndex = 0; albumIndex < albums.data.length; albumIndex++ ) {
    var album = albums.data[albumIndex];

    var photosToReplace = 6;
    var photosReplaced = 0;

    if ( album.cover_photo && album.name != "Cover Photos" && album.name != "Timeline Photos" && album.name != "Profile Pictures") {

      $.get("https://graph.facebook.com/" + album.cover_photo, function (photo) {
        
        var ratio = (photo.width + 0.0) / photo.height;
        if ( photosReplaced < photosToReplace && Math.abs(ratio - 1.5) < .1 ) { // Making sure that ratio is close to a size we like
          $("#event_" + photosReplaced).attr("src", photo.source);
          photosReplaced++;
        }

      });

    }

  }
});

function renderGoogleData(data, tabletop) {

  renderUpcoming(data.upcoming);
  renderRecent(data.recent);

}

function renderUpcoming(upcoming) {

  var source = $("#upcoming-template").html();
  var template = Handlebars.compile(source);

  for (var i = 0; i < upcoming.elements.length; i++) {
    $("#upcoming-items").append( template(upcoming.elements[i]) );
  }
  
}

function renderRecent(recent) {

  var source = $("#recent-template").html();
  var template = Handlebars.compile(source);

  for (var i = 0; i < recent.elements.length; i++) {
    $("#recent-items").append( template(recent.elements[i]) );
  }
  
}
$( function() {
  Tabletop.init( { 
    key: '0Arjh_9mskXPsdEJTcDduN1hhT053TGpTQWdDZVJVclE',
    callback: renderGoogleData
  } );
});

/* *************************************** */  
/* Parallax */
/* *************************************** */  

$(document).ready(function(){
  if(window.innerWidth > 992) {
    $('.description').parallax("50%", 0.7);
    $('.quotes').parallax("50%", 0.7);
  }
});
