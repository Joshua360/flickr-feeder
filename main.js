
//   let searchTerm = document.getElementById('search').value;

const searchTerm = 'dogs';




const endpoint = `https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=${searchTerm}`;



fetch(endpoint)
  .then(response => response.json())
  .then(data => {
      data.photos.photo.forEach(element => {
          let image = `<img src="${element.media.m}">`;
          document.getElementById('photos').innerHTML = image;

          
      });
  })
  .catch((error) => {
    console.error('Error:', error);
  });