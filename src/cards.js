let allData = [];
let currentData = [];
let renderedCards= 0;
let currentCategory = 'coffee';

document.addEventListener('DOMContentLoaded', async() => {
  //menu
  allData = await loadData()
  const menuTabs = document.querySelector('.menu-tabs');
  const loadButton = document.querySelector('.round-button');
  const modalWrapper = document.querySelector(".card-modal-wrapper");
  if(menuTabs){
    menuTabs.addEventListener('click', async function(e){
      const tab = e.target.closest('.tab-item');
      if(!tab) return;
      for(const tab of menuTabs.children){
        tab.classList.remove('active');
      }
      tab.classList.add('active'); 
      const category = tab.dataset.category;
      initCategory(category)
    })
  }
  if(loadButton){
    loadButton.addEventListener('click', () => {
      renderCards();
    })
  }
  initCategory(currentCategory);
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      initCategory(currentCategory);
    }, 200);
  });
  //card modal
  const grid = document.querySelector('.menu-grid');
  if(grid){
    grid.addEventListener('click', (e) => {
      const card = e.target.closest('.card');
      if(!card) return;
      const cardObj = currentData.filter((obj) => card.dataset.name === obj.name);
      openCardModal(cardObj[0], card);
    })
  }
  document.addEventListener('keydown', (e) => {
    if(e.key === "Escape"){
      closeCardModal();
    }
  });
  modalWrapper.addEventListener('click', (e) => {
    if(e.target === modalWrapper){
      closeCardModal();
    }
  });
});
//menu functions
function getLimit(){
  return window.innerWidth > 768 ? 8 : 4;
}

async function loadData(){
  try{
    const response = await fetch('./data.json');
    const data = await response.json();
    return data;
  } catch{
    console.log("Error in fetching data");
    return [];
  }
} 
async function initCategory(category){
  currentData = allData.filter(item => item.category === category);
  const grid = document.querySelector('.menu-grid');
  if(grid) grid.innerHTML = '';
  currentCategory = category;
  renderedCards = 0;
  renderCards();
}
async function renderCards(){
  const grid = document.querySelector('.menu-grid');
  const loadButton = document.querySelector('.round-button');
  if(!grid) return;
  const batchSize = getLimit();
  const nextBatch = currentData.slice(renderedCards, renderedCards + batchSize);
  
  nextBatch.forEach((el, index) => {
    const realIndex = renderedCards + index + 1;
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = el.name;
    card.dataset.id = realIndex;
    const imageSrc = `./assets/${currentCategory}-${realIndex}.png`;
    card.innerHTML = `
      <img class="card-image" src=${imageSrc} alt='item ${currentCategory} photo'>
      <div class="card-description">
        <h3 class="heading-3">${el.name}</h3>
        <p class="medium">${el.description}</p>
        <h3 class="heading-3">$${el.price}</h3>
      </div>
    `;
    grid.append(card);
  });
  renderedCards += nextBatch.length;
  if (loadButton) {
    if (renderedCards >= currentData.length) {
      loadButton.classList.add('hidden');
    } else {
      loadButton.classList.remove('hidden');
    }
  }
}
//card modal functions
function openCardModal(obj, card){
  const modalWrapper = document.querySelector(".card-modal-wrapper");
  modalWrapper.classList.remove('hidden');
  const modal = modalWrapper.querySelector('.card-modal');
  modal.innerHTML = `
  <div class="modal-inner">
    <div class="image-wrapper">
      <img src="./assets/${currentCategory}-${card.dataset.id}.png" alt="${currentCategory}-${card.dataset.id} image">
    </div>
    <div class="description-wrapper">
      <div class="title-wrapper">
        <h3 class="title heading-3">${obj.name}</h3>
        <p class="description medium">${obj.description}</p>
      </div>
      <div class="size-wrapper">
        <p class="size-title medium">Size</p>
        <div class="size-buttons">
          <div data-price="${obj.sizes.s["add-price"]}" class="tap-button button active">
            <div class="tab-round">
              <p class="button tab-text">S</p>
            </div>
            <p class="button tab-text-outer">${obj.sizes.s.size}</p>
          </div>
          <div data-price="${obj.sizes.m["add-price"]}" class="tap-button button">
            <div class="tab-round">
              <p class="button tab-text">M</p>
            </div>
            <p class="button tab-text-outer">${obj.sizes.m.size}</p>
          </div>
          <div data-price="${obj.sizes.l["add-price"]}" class="tap-button button">
            <div class="tab-round">
              <p class="button tab-text">L</p>
            </div>
            <p class="button tab-text-outer">${obj.sizes.l.size}</p>
          </div>
        </div>
        <div class="additives">
          <p class="size-title medium">Additives</p>
          <div class="size-buttons additives-buttons">
            <div data-price="${obj.additives[0]["add-price"]}" class="tap-button button">
              <div class="tab-round">
                <p class="button tab-text">1</p>
              </div>
              <p class="button tab-text-outer">${obj.additives[0]["name"]}</p>
            </div>
            <div data-price="${obj.additives[1]["add-price"]}" class="tap-button button">
              <div class="tab-round">
                <p class="button tab-text">2</p>
              </div>
              <p class="button tab-text-outer">${obj.additives[1]["name"]}</p>
            </div>
            <div data-price="${obj.additives[2]["add-price"]}" class="tap-button button">
              <div class="tab-round">
                <p class="button tab-text">3</p>
              </div>
              <p class="button tab-text-outer">${obj.additives[2]["name"]}</p>
            </div>
          </div>
        </div>
        <div class="total-wrapper">
          <h3 class="heading-3">Total:</h3>
          <h3 class="heading-3 price" data-price="${obj.price}">$${obj.price}</h3>
        </div>
        <div class="warning-wrapper">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_147811_7611)">
            <path d="M8 7.66663V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 5.00667L8.00667 4.99926" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.00016 14.6667C11.6821 14.6667 14.6668 11.6819 14.6668 8.00004C14.6668 4.31814 11.6821 1.33337 8.00016 1.33337C4.31826 1.33337 1.3335 4.31814 1.3335 8.00004C1.3335 11.6819 4.31826 14.6667 8.00016 14.6667Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_147811_7611">
            <rect width="16" height="16" fill="white"/>
            </clipPath>
            </defs>
          </svg>
          <p class="caption warning-text">The cost is not final.
          Download our mobile app to see the final price and place your order.
          Earn loyalty points and enjoy your favorite coffee with up to 20% discount.
          </p>
        </div>  
        <button class="close-button button">
          <span class="close-button-text button">Close</span>
        </button>
      </div>
    </div>
  </div>
  `;
  const closeButton = document.querySelector('.close-button');
  if(closeButton){
    closeButton.addEventListener('click', (e) => {
      e.stopPropagation();
      closeCardModal();
    })  
  };
  document.documentElement.classList.add('no-scroll');

  const sizeTabs = modalWrapper.querySelector(".size-buttons");
  const addintiveTabs = modalWrapper.querySelector(".additives-buttons");
  if(sizeTabs){
    sizeTabs.addEventListener('click', (e) => {
      const tab = e.target.closest('.tap-button');
      if(!tab) return;
      const actualSizeTabs = modalWrapper.querySelector(".size-buttons");
      const sizeTabsArr = Array.from(actualSizeTabs.querySelectorAll('.tap-button'));
      sizeTabsArr.forEach((el) => el.classList.remove('active'));
      tab.classList.add('active');
      recalculatePrice();
    });
  }
  if(addintiveTabs){
    addintiveTabs.addEventListener('click', (e) => {
      const tab = e.target.closest('.tap-button');
      if(!tab) return;
      if(tab.classList.contains('active')){
        tab.classList.remove('active');
      }else{
        tab.classList.add('active');
      }
      recalculatePrice();
    })
  }
}

function closeCardModal(){
  const modalWrapper = document.querySelector(".card-modal-wrapper");
  modalWrapper.classList.add('hidden');
  document.documentElement.classList.remove('no-scroll');
}

function recalculatePrice(){
  const modalWrapper = document.querySelector(".card-modal-wrapper");
  const sizeTabs = modalWrapper.querySelector(".size-buttons");
  const sizePrice = Number(sizeTabs.querySelector(".tap-button.active").dataset.price);
  const addintiveTabs = modalWrapper.querySelector(".additives-buttons");
  const addintiveTabsArr = Array.from(addintiveTabs.querySelectorAll(".tap-button"));
  const additivePrice = addintiveTabsArr.reduce((price, tab) => {
    if(tab.classList.contains('active')){
      price += Number(tab.dataset.price);
    }
    return price;
  }, 0);
  const priceTag = modalWrapper.querySelector('.price');
  const price = Number(priceTag.dataset.price);
  priceTag.textContent = `$${price + sizePrice + additivePrice}`;
}
 
