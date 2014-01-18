$.get( "https://graph.facebook.com/INFORUMsf/albums", function (albums) {

  for ( var albumIndex = 0; albumIndex < 3; albumIndex++ ) {


    (function(albumIndex){

      var albumId = albums.data[albumIndex].id;
      $.get("https://graph.facebook.com/" + albumId + "/photos", function (photos) {

        $("#event_" + albumIndex).attr("src", photos.data[0].source);

      });
    }) (albumIndex);

  }


});
