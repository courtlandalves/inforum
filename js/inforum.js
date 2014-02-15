// Adding facebook album photos to event section
$.get( "https://graph.facebook.com/INFORUMsf/albums", function (albums) {

  for ( var albumIndex = 0; albumIndex < albums.data.length; albumIndex++ ) {
    var album = albums.data[albumIndex];

    var photosReplaced = 0;

    if ( album.name != "Cover Photos" && album.name != "Timeline Photos" && album.name != "Profile Pictures") {

      $.get("https://graph.facebook.com/" + album.cover_photo, function (photo) {

        if ( photosReplaced < 3 ) {
          $("#event_" + photosReplaced).attr("src", photo.source);
          photosReplaced++;
        }

      });

    }

  }
});

function shuffle(array) {

  var currentIndex = array.length
    , temporaryValue
    , randomIndex
    ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function drawSpeakerMatrix(data, tabletop) {

  console.log(data);
  googleDocData = data;

  var source = $("#fliptile-template").html();
  var template = Handlebars.compile(source);

  var fliptileDataShuffled = shuffle(googleDocData);

  for (var i = 0; i < fliptileDataShuffled.length; i++) {
    $("#tile" + i).append(template(fliptileDataShuffled[i]));
  };

  // Flip animation

  if ($('html').hasClass('csstransforms3d')) {  

    $('.thumb').removeClass('scroll').addClass('flip');   
    $('.thumb.flip').hover(
        function () {
          $(this).find('.thumb-wrapper').addClass('flipIt');
        },
        function () {
          $(this).find('.thumb-wrapper').removeClass('flipIt');     
        }
        );

  } else {

    $('.thumb').hover(
        function () {
          $(this).find('.thumb-detail').stop().animate({bottom:0}, 500, 'easeOutCubic');
        },
        function () {
          $(this).find('.thumb-detail').stop().animate({bottom: ($(this).height() * -1) }, 500, 'easeOutCubic');      
        }
        );
  }

}

$(function(){
  Tabletop.init( { key: '0Arjh_9mskXPsdEJTcDduN1hhT053TGpTQWdDZVJVclE',
    callback: drawSpeakerMatrix,
  simpleSheet: true } )
});
