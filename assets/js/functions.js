// Obtém todas as imagens dos cards
var cardImages = document.querySelectorAll('.image');


cardImages.forEach(function(image) {
  
  image.addEventListener('mouseover', function() {
    var parentDiv = image.parentNode;

    var paragraph = parentDiv.querySelector('p');

    paragraph.style.display = 'block';
    image.style.transform = 'scale(1.2)';
  });

  image.addEventListener('mouseout', function() {
  
    var parentDiv = image.parentNode;

    var paragraph = parentDiv.querySelector('p');

    paragraph.style.display = 'none';
    image.style.transform = 'scale(1)';
  });
});
