function renderGoogleData(data, tabletop) {

  renderUpcoming(data.upcoming);
  renderRecent(data.recent);

}

function renderUpcoming(upcoming) {

  var source = $("#upcoming-template").html();
  var template = Handlebars.compile(source);

  var photosToReplace = 3;

  for (var i = 0; i < photosToReplace; i++) {
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
