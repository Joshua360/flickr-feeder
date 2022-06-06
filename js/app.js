$(document).ready(function() {


<<<<<<< HEAD
 $('form').submit(function(e){
 e.preventDefault();
  let $searchTerm = $('#search').val();
  

    // the AJAX part
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var animal = $searchTerm;
    var flickrOptions = {
      tags: animal,
      format: "json"
    };
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items,function(i,photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);

  }); // end click

}); // end ready 
=======
  $('form').submit(function(e){
  e.preventDefault();
   let $searchTerm = $('#search').val();
   
 
     // the AJAX part
     var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
     var animal = $searchTerm;
     var flickrOptions = {
       tags: animal,
       format: "json"
     };
     function displayPhotos(data) {
       var photoHTML = '<ul>';
       $.each(data.items,function(i,photo) {
         photoHTML += '<li class="grid-25 tablet-grid-50">';
         photoHTML += '<a href="' + photo.link + '" class="image">';
         photoHTML += '<img src="' + photo.media.m + '"></a></li>';
       }); // end each
       photoHTML += '</ul>';
       $('#photos').html(photoHTML);
     }
     $.getJSON(flickerAPI, flickrOptions, displayPhotos);
 
   }); // end click
 
 }); // end ready
>>>>>>> 56ba2e8d559d1102f11158eef89e746f5b51237b
