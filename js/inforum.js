function renderGoogleData(data, tabletop) {

  renderUpcoming(data.upcoming);
  renderRecent(data.recent);
  renderModal();

}

function renderUpcoming(upcoming) {

  var source = $("#upcoming-template").html();
  var template = Handlebars.compile(source);

  var photosToReplace = Math.min(3, upcoming.elements.length);

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

function renderModal() {

  if( location.search.indexOf("submitted=true") > -1 ) {
    $("#confirm-modal").modal('show');
  }

}

$( function() {
  Tabletop.init( { 
    key: '0Arjh_9mskXPsdEJTcDduN1hhT053TGpTQWdDZVJVclE',
    callback: renderGoogleData
  } );
});

