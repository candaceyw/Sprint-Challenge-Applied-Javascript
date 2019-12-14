/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


const carousel2 = document.querySelector('.carousel-container')
const rightButton = document.querySelector('.right-button');
const leftButton = document.querySelector('.left-button');

let counter = 0;
let slides = Array.from(document.querySelectorAll('.carousel img'))
let amount = slides.length;

console.log(carousel2)

//function nonworking :(
    function navigate(direction) {

      counter = counter + direction;

      if (direction === -1 && 
        counter < 0) { 
      counter = amount - 1; 
    }

    if (direction === 1 && 
        !slides[counter]) { 
      counter = 0;
    }

    current = slides[counter];
  }

    // rightButton.addEventListener('click', navigate(1));
    // leftButton.addEventListener('click', navigate(-1));

    navigate(0);
   

carouselCreator();


function carouselCreator() {
  const carousel = document.createElement('div');
  const leftButton = document.createElement('div')
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  const img4 = document.createElement('img');
  const rightButton = document.createElement('div')

  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  img1.src = './assets/carousel/mountains.jpeg';
  img2.src = './assets/carousel/computer.jpeg';
  img3.src = './assets/carousel/trees.jpeg';
  img4.src = './assets/carousel/turntable.jpeg';


  carousel.appendChild(leftButton);
  carousel.appendChild(img1);
  carousel.appendChild(img2);
  carousel.appendChild(img3);
  carousel.appendChild(img4);
  carousel.appendChild(rightButton);

  document.querySelector('.carousel-container').appendChild(carousel);
  img1.style.display = "block";
  // img2.style.display = "block";

}

