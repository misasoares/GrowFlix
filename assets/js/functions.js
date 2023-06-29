// Obtém todas as imagens dos cards
let cardImages = document.querySelectorAll('.card');



cardImages.forEach(function(image) {
  console.log(image)
  image.addEventListener('mouseover', function() {
    let parentDiv = image.parentNode;

    let paragraph = parentDiv.querySelector('p');

    paragraph.style.display = 'block';
    
  });

  image.addEventListener('mouseout', function() {
  console.log(image)
    let parentDiv = image.parentNode;

    let paragraph = parentDiv.querySelector('p');
    

    paragraph.style.display = 'none';

  });
});

const movieModal = new bootstrap.Modal('#movieModal', {})



