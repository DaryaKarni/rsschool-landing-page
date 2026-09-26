
document.addEventListener('DOMContentLoaded', () => {
  const headerWrapper = document.querySelector('.header-wrapper');
  const footerWrapper = document.querySelector('.footer-wrapper');
  if(headerWrapper && footerWrapper){
    const currentPath = window.location.pathname;
    const isMenuPage = currentPath.includes('menu');
    const active = isMenuPage ? 'active' : '';
    headerWrapper.outerHTML = `
      <header class="header" id="header">
        <a href="./index.html" class="logo">
          <img class="logo-image" src="./assets/logo.svg" alt="logo image">
        </a>
        <nav class="header-nav">
          <ul class="nav-list">
            <li class="nav-item">
              <a class="link" href="./index.html#favorite">Favorite coffee</a>
            </li>
            <li class="nav-item">
              <a class="link" href="./index.html#about">About</a>
            </li>
            <li class="nav-item">
              <a class="link" href="./index.html#mobile">Mobile app</a>
            </li>
            <li class="nav-item">
              <a class="link" href="./index.html#contact">Contact us</a>
            </li>
          </ul>
        </nav>
        <div class="header-actions">
          <div class="theme-switch">
            <button class="theme-switch-light active switch-button">
              <svg class="theme-switch-sun" aria-hidden="true" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 3V1C10 0.45 10.45 0 11 0C11.55 0 12 0.45 12 1V3C12 3.55 11.55 4 11 4C10.45 4 10 3.55 10 3ZM17.36 6.05L18.77 4.63C19.16 4.24 19.16 3.61 18.77 3.22C18.38 2.83 17.75 2.83 17.36 3.22L15.95 4.64C15.56 5.03 15.56 5.66 15.95 6.05C16.34 6.44 16.97 6.44 17.36 6.05ZM21 10H19C18.45 10 18 10.45 18 11C18 11.55 18.45 12 19 12H21C21.55 12 22 11.55 22 11C22 10.45 21.55 10 21 10ZM11 18C10.45 18 10 18.45 10 19V21C10 21.55 10.45 22 11 22C11.55 22 12 21.55 12 21V19C12 18.45 11.55 18 11 18ZM4.64 6.05L3.22 4.64C2.83 4.25 2.83 3.61 3.22 3.23C3.61 2.85 4.25 2.84 4.63 3.23L6.04 4.64C6.43 5.03 6.43 5.67 6.04 6.05C5.65 6.43 5.02 6.44 4.64 6.05ZM15.95 15.95C15.56 16.34 15.56 16.98 15.95 17.36L17.36 18.77C17.75 19.16 18.39 19.16 18.77 18.77C19.16 18.38 19.16 17.74 18.77 17.36L17.36 15.95C16.98 15.56 16.34 15.56 15.95 15.95ZM1 12H3C3.55 12 4 11.55 4 11C4 10.45 3.55 10 3 10H1C0.45 10 0 10.45 0 11C0 11.55 0.45 12 1 12ZM4.64 18.78L6.05 17.37C6.44 16.98 6.44 16.34 6.05 15.96C5.66 15.58 5.02 15.57 4.64 15.96L3.23 17.37C2.84 17.76 2.84 18.4 3.23 18.78C3.61 19.17 4.25 19.17 4.64 18.78ZM11 5C7.69 5 5 7.69 5 11C5 14.31 7.69 17 11 17C14.31 17 17 14.31 17 11C17 7.69 14.31 5 11 5Z" fill="#E1D4C9"/>
              </svg>
            </button>
            <button class="theme-switch-dark switch-button">
              <svg class="theme-switch-moon" aria-hidden="true" width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 0C4.03 0 0 4.03 0 9C0 13.97 4.03 18 9 18C13.97 18 18 13.97 18 9C18 8.54 17.96 8.08 17.9 7.64C16.92 9.01 15.32 9.9 13.5 9.9C10.52 9.9 8.1 7.48 8.1 4.5C8.1 2.69 8.99 1.08 10.36 0.0999999C9.92 0.0399999 9.46 0 9 0Z" fill="#403F3D"/>
              </svg>
            </button>
          </div>
          <button class="coffee-menu button ${active}">
            <p class="coffee-menu-text">Menu</p>
            <svg class="coffee-menu-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.167 9.76667V11.6667C14.167 14.8883 11.5553 17.5 8.33366 17.5C5.112 17.5 2.50033 14.8883 2.50033 11.6667V9.76667C2.50033 9.4353 2.76896 9.16667 3.10033 9.16667H13.567C13.8984 9.16667 14.167 9.4353 14.167 9.76667Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.0003 7.50008C10.0003 6.66675 10.5956 5.83341 11.786 5.83341C13.101 5.83341 14.167 4.76743 14.167 3.45246V2.91675" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.66634 7.5V7.08333C6.66634 5.70262 7.78563 4.58333 9.16634 4.58333C10.0868 4.58333 10.833 3.83714 10.833 2.91667V2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.333 9.16675H15.4163C16.5669 9.16675 17.4997 10.0995 17.4997 11.2501C17.4997 12.4007 16.5669 13.3334 15.4163 13.3334H14.1663" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button class="burger-menu hidden">  
            <div class="up-line line"></div>
            <div class="down-line line"></div>
          </button>
        </div>
      </header>
    `;
    footerWrapper.outerHTML = `
      <footer class="footer" id="contact">
        <div class="offer">
          <p class="footer-text heading-2">Sip, Savor, Smile.<br>
            <span class="heading-2 accent">It's coffee time!</span>
          </p>
          <div class="footer-socials">
            <a class="socials-frame link footer-link" href="https://x.com/" target="_blank" rel="noopener noreferrer">
              <svg class="socials-icon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 3.01006C23 3.01006 20.9821 4.20217 19.86 4.54006C19.2577 3.84757 18.4573 3.35675 17.567 3.13398C16.6767 2.91122 15.7395 2.96725 14.8821 3.29451C14.0247 3.62177 13.2884 4.20446 12.773 4.96377C12.2575 5.72309 11.9877 6.62239 12 7.54006V8.54006C10.2426 8.58562 8.50127 8.19587 6.93101 7.4055C5.36074 6.61513 4.01032 5.44869 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C20.9991 7.23151 20.9723 6.95365 20.92 6.68006C21.9406 5.67355 23 3.01006 23 3.01006Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            <a class="socials-frame link footer-link" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" >
              <svg class="socials-icon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z" stroke="currentColor"/>
                <path d="M17.5 6.51L17.51 6.49889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            <a class="socials-frame link footer-link" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <svg class="socials-icon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </ф>
          </div>  
        </div>
        <div class="contacts-info">
          <p class="contacts-text heading-3">Contact us</p>
          <div class="contacts-container">
            <div class="contact-line link">
              <svg width="20" height="20" aria-hidden="true" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6663 8.33335C16.6663 12.0153 9.99967 18.3334 9.99967 18.3334C9.99967 18.3334 3.33301 12.0153 3.33301 8.33335C3.33301 4.65146 6.31778 1.66669 9.99967 1.66669C13.6816 1.66669 16.6663 4.65146 16.6663 8.33335Z" stroke="#E1D4C9" stroke-width="1.5"/>
                <path d="M10.0003 9.16667C10.4606 9.16667 10.8337 8.79357 10.8337 8.33333C10.8337 7.8731 10.4606 7.5 10.0003 7.5C9.54009 7.5 9.16699 7.8731 9.16699 8.33333C9.16699 8.79357 9.54009 9.16667 10.0003 9.16667Z" fill="#E1D4C9" stroke="#E1D4C9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <a class="text link footer-link" href="https://www.google.com/maps/search/8558+Green+Rd.,++LA/@30.3866189,-91.9945961,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" rel="noopener noreferrer">8558 Green Rd.,  LA</a>
            </div>
            <div class="contact-line link">
              <svg width="20" height="20" aria-hidden="true" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.0984 12.2517L11.6665 12.9167C9.34845 11.7532 7.91654 10.4167 7.08321 8.33335L7.72483 4.8916L6.51197 1.66669L3.72946 1.66669C2.60191 1.66669 1.71466 2.59964 1.90108 3.71167C2.29888 6.0846 3.37231 10.0391 6.24987 12.9167C9.27338 15.9402 13.5661 17.3318 16.1378 17.9288C17.299 18.1984 18.3332 17.2908 18.3332 16.0988L18.3332 13.4844L15.0984 12.2517Z" stroke="#E1D4C9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <a class="link footer-link" href="tel:+16035550123">+1 (603) 555-0123</a>
            </div>
            <div class="contact-line link">
              <svg width="20" height="20" aria-hidden="true" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_227_2037)">
                <path d="M10 5L10 10L15 10" stroke="#E1D4C9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.0003 18.3333C14.6027 18.3333 18.3337 14.6024 18.3337 9.99999C18.3337 5.39762 14.6027 1.66666 10.0003 1.66666C5.39795 1.66666 1.66699 5.39762 1.66699 9.99999C1.66699 14.6024 5.39795 18.3333 10.0003 18.3333Z" stroke="#E1D4C9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_227_2037">
                <rect width="20" height="20" fill="white"/>
                </clipPath>
                </defs>
              </svg>
              <p>Mon–Sat: 9:00–23:00</p>
            </div>
          </div>
        </div>
      </footer>
    `;
    document.body.insertAdjacentElement('afterbegin', headerWrapper);
    document.body.insertAdjacentElement('beforeend', footerWrapper);
  }
});
