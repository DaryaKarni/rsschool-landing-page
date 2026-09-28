document.addEventListener('DOMContentLoaded', () => {
  //slider
  const leftArrow = document.querySelector('.button.slider-button.left');
  const rightArrow = document.querySelector('.button.slider-button.right');
  const rowSlider = document.querySelector('.row-slider');
  const slides = document.querySelectorAll('.slide');
  const controls = document.querySelectorAll('.control');
  rowSlider.appendChild(slides[0].cloneNode(true));
  rowSlider.insertBefore(slides[slides.length - 1].cloneNode(true), slides[0]);
  const allSlides = rowSlider.querySelectorAll('.slide');
  let currentIndex = 1;
  let isAnimating = false
  rowSlider.style.transform = `translateX(-${currentIndex * 100}%)`;

  function moveTo(index){
    if(isAnimating) return;
    isAnimating = true;
    currentIndex = index;
    rowSlider.style.transition = `transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)`;
    rowSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateControls();
  }
  function updateControls(){
    for(const control of controls){
      control.classList.remove('active');
    }
    let realIndex = currentIndex - 1;
    if (currentIndex === allSlides.length - 1) {
      realIndex = 0; 
    } else if (currentIndex === 0) {
      realIndex = controls.length - 1; 
    }
    if (controls[realIndex]) {
      controls[realIndex].classList.add('active');
    }
  }
  rowSlider.addEventListener('transitionend', () => {
    isAnimating = false;
    if (currentIndex === allSlides.length - 1) {
      rowSlider.style.transition = 'none'; 
      currentIndex = 1;                  
      rowSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
    } 
    else if (currentIndex === 0) {
      rowSlider.style.transition = 'none';
      currentIndex = allSlides.length - 2; 
      rowSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  })
  if(rightArrow){
    rightArrow.addEventListener('click', () => {
      moveTo(currentIndex + 1);
    });
  }
  if(leftArrow){
    leftArrow.addEventListener('click', () => {
    moveTo(currentIndex - 1);
  });
  }

let touchStartX = 0;
let touchEndX = 0;
const swipeThreshold = 50; 

rowSlider.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].clientX;
}, { passive: true });

rowSlider.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].clientX;
  handleSwipe();
}, { passive: true });

function handleSwipe() {
  const swipeDistance = touchEndX - touchStartX;
  if (swipeDistance < -swipeThreshold) {
    moveTo(currentIndex + 1);
  }
  if (swipeDistance > swipeThreshold) {
    moveTo(currentIndex - 1);
  }
}
})