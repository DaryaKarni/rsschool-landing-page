

document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector('.burger-menu');
  const burgerModal = document.querySelector('.burger-menu-modal');
  const navList = burgerModal.querySelector('.nav-list');
  window.addEventListener('resize', () => {
    if(window.innerWidth > 768){
      burgerModal.classList.add('hidden');
      burgerMenu.classList.remove('close');
      document.documentElement.classList.remove('no-scroll');
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
  if(burgerMenu){
    burgerMenu.addEventListener('click', toggleBurgerMenu);
  }
  if(navList){
    navList.addEventListener('click', (e) => {
      const link = e.target.closest('.nav-item');
      if(!link) return;
      toggleBurgerMenu();
    })
  }
  function toggleBurgerMenu(){
    if(burgerModal && burgerModal.classList.contains('hidden')){
      burgerModal.classList.remove('hidden');
      burgerMenu.classList.add('close');
      document.documentElement.classList.add('no-scroll');
    } else{
      closeModal();
    }
  }
  function closeModal(){
    burgerModal.classList.add('hidden');
      burgerMenu.classList.remove('close');
      document.documentElement.classList.remove('no-scroll');
  }
});
