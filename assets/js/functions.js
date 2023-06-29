// Obtém todas as imagens dos cards
let cardImages = document.querySelectorAll('.card');



cardImages.forEach(function(image) {
  
  image.addEventListener('mouseover', function() {
    let parentDiv = image.parentNode;

    let paragraph = parentDiv.querySelector('p');

    paragraph.style.display = 'block';
    image.style.transform = 'scale(1.2)';
  });

  image.addEventListener('mouseout', function() {
  
    let parentDiv = image.parentNode;

    let paragraph = parentDiv.querySelector('p');
    

    paragraph.style.display = 'none';
    image.style.transform = 'scale(1)';
    

  });
});

const movieModal = new bootstrap.Modal('#movieModal', {})



