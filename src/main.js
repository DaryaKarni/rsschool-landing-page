

document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const burgerModal = document.querySelector('.burger-menu-modal');
    if(burgerMenu){
      burgerMenu.addEventListener('click', toggleBurgerMenu);
    }
    function toggleBurgerMenu(){
      if(burgerModal && burgerModal.classList.contains('hidden')){
        burgerModal.classList.remove('hidden');
        burgerMenu.classList.add('close');
      } else{
        burgerModal.classList.add('hidden');
        burgerMenu.classList.remove('close');
      }
    }
});
