let allData = [];
let currentData = [];
let renderedCards= 0;
let currentCategory = 'coffee';

document.addEventListener('DOMContentLoaded', async() => {
  //menu
  allData = await loadData()
  const menuTabs = document.querySelector('.menu-tabs');
  const loadButton = document.querySelector('.round-button');
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
});

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


 
