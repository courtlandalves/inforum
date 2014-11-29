function renderGoogleData(data, tabletop) {

  renderUpcoming(data.upcoming);
  renderRecent(data.recent);

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


/* *************************************** */  
/* Smooth Scrolling */
/* *************************************** */  

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});
