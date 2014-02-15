


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

  // Handlebars templating for flip tiles

  var fliptileData = [
{
  imageFilename:  "head-shot.jpg",
  speakerName: "Alexis Ohanian",
  speakerDetail: "Founder of Reddit",
  programTitle: "Ask Me Anything Live",
},
{
  imageFilename: "head-shot.jpg",
  speakerName: "Rachel Maddow",
  speakerDetail: "TV Journalist",
  programTitle: "A Conversation with Rachel Maddow",
},
{
  imageFilename:  "head-shot.jpg",
  speakerName: "Speaker 3",
  speakerDetail: "Speaker Detail",
  programTitle: "Program Title",
},
{
  imageFilename:  "head-shot.jpg",
  speakerName: "Speaker 4",
  speakerDetail: "Speaker Detail",
  programTitle: "Program Title",
},
{
  imageFilename:  "head-shot.jpg",
  speakerName: "Speaker 5",
  speakerDetail: "Speaker Detail",
  programTitle: "Program Title",
},
{
  imageFilename:  "head-shot.jpg",
  speakerName: "Speaker 6",
  speakerDetail: "Speaker Detail",
  programTitle: "Program Title",
},
{
  imageFilename:  "head-shot.jpg",
  speakerName: "Speaker 7",
  speakerDetail: "Speaker Detail",
  programTitle: "Program Title",
},
{
  imageFilename:  "head-shot.jpg",
  speakerName: "Speaker 8",
  speakerDetail: "Speaker Detail",
  programTitle: "Program Title",
},
{
  imageFilename:  "head-shot.jpg",
  speakerName: "Speaker 9",
  speakerDetail: "Speaker Detail",
  programTitle: "Program Title",
},
{
  imageFilename:  "head-shot.jpg",
  speakerName: "Speaker 10",
  speakerDetail: "Speaker Detail",
  programTitle: "Program Title",
},
{
  imageFilename:  "head-shot.jpg",
  speakerName: "Speaker 11",
  speakerDetail: "Speaker Detail",
  programTitle: "Program Title",
},
{
  imageFilename:  "head-shot.jpg",
  speakerName: "Speaker 12",
  speakerDetail: "Speaker Detail",
  programTitle: "Program Title",
},
{
  imageFilename:  "head-shot.jpg",
  speakerName: "Speaker 13",
  speakerDetail: "Speaker Detail",
  programTitle: "Program Title",
},
{
  imageFilename:  "head-shot.jpg",
  speakerName: "Speaker 13",
  speakerDetail: "Speaker Detail",
  programTitle: "Program Title",
},
{
  imageFilename:  "head-shot.jpg",
  speakerName: "Speaker 14",
  speakerDetail: "Speaker Detail",
  programTitle: "Program Title",
},
{
  imageFilename:  "head-shot.jpg",
  speakerName: "Speaker 15",
  speakerDetail: "Speaker Detail",
  programTitle: "Program Title",
},
{
  imageFilename:  "head-shot.jpg",
  speakerName: "Speaker 16",
  speakerDetail: "Speaker Detail",
  programTitle: "Program Title",
},
{
  imageFilename:  "head-shot.jpg",
  speakerName: "Speaker 17",
  speakerDetail: "Speaker Detail",
  programTitle: "Program Title",
},
{
  imageFilename:  "head-shot.jpg",
  speakerName: "Speaker 18",
  speakerDetail: "Speaker Detail",
  programTitle: "Program Title",
},
{
  imageFilename:  "head-shot.jpg",
  speakerName: "Speaker 19",
  speakerDetail: "Speaker Detail",
  programTitle: "Program Title",
},
{
  imageFilename:  "head-shot.jpg",
  speakerName: "Speaker 20",
  speakerDetail: "Speaker Detail",
  programTitle: "Program Title",
},
{
  imageFilename:  "head-shot.jpg",
  speakerName: "Speaker 21",
  speakerDetail: "Speaker Detail",
  programTitle: "Program Title",
},
{
  imageFilename:  "head-shot.jpg",
  speakerName: "Speaker 22",
  speakerDetail: "Speaker Detail",
  programTitle: "Program Title",
},		  

  ];

  var source = $("#fliptile-template").html();
  var template = Handlebars.compile(source);

  var fliptileDataShuffled = shuffle(fliptileData);

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

});
