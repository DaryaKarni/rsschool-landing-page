
document.addEventListener('DOMContentLoaded', () => {
  loadChangeTheme();
  const themeButton = document.querySelector('.theme-switch');
  if(themeButton){
    themeButton.addEventListener('click', clickThemeButton);
  }
  function clickThemeButton(e){
  const button = e.target.closest('.theme-switch-light, .theme-switch-dark');
  if (!button || button.classList.contains('active')) return;
  const isLight = button.classList.contains('theme-switch-light');
  changeTheme(isLight ? 'light' : 'dark');
}
function changeTheme(str){
  localStorage.setItem('theme', str);
  loadChangeTheme();
}
function loadChangeTheme(){
  const theme = localStorage.getItem('theme') || 'light';
  document.documentElement.dataset.theme = theme;
  const logo = document.querySelector('.logo-image');
  if(logo){
    logo.src = theme === 'dark' ? '../assets/logo-dark.svg' : '../assets/logo.svg';
  }
  const lightButton = document.querySelector('.theme-switch-light');
  const darkButton = document.querySelector('.theme-switch-dark');
  if (lightButton && darkButton) {
    lightButton.classList.toggle('active', theme === 'light');
    darkButton.classList.toggle('active', theme === 'dark');
  }
}


})